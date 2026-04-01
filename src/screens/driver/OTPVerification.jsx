import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function OTPVerification() {
  const nav = useNavigate()
  const [phone, setPhone] = useState('')
  const [step, setStep] = useState('phone') // phone | otp
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const refs = useRef([])

  function handleOtp(i, val) {
    if (!/^\d?$/.test(val)) return
    const next = [...otp]
    next[i] = val
    setOtp(next)
    if (val && i < 5) refs.current[i + 1]?.focus()
  }

  const filled = otp.every(d => d !== '')

  return (
    <div className="phone">
      <div className="screen" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px 24px', gap: 0 }}>
        {/* Logo */}
        <div style={{ width: 56, height: 56, background: 'var(--blue)', borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, marginBottom: 10 }}>🚐</div>
        <h2 style={{ fontWeight: 700, fontSize: 22 }}>Vanity</h2>
        <p style={{ color: 'var(--text2)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 48 }}>School Transport, Tracked.</p>

        {step === 'phone' ? (
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ fontWeight: 600, fontSize: 17 }}>Enter your mobile number</p>
            <div style={{ display: 'flex', gap: 8 }}>
              <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '14px 12px', display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' }}>
                <span>🇮🇳</span><span style={{ color: 'var(--text2)', fontSize: 14 }}>+91</span>
              </div>
              <input className="input" placeholder="00000-00000" value={phone} onChange={e => setPhone(e.target.value)} maxLength={10} style={{ flex: 1 }} />
            </div>
            <button className="btn btn-blue" disabled={phone.length < 10} style={{ opacity: phone.length < 10 ? 0.4 : 1, marginTop: 8 }}
              onClick={() => setStep('otp')}>Send OTP</button>
          </div>
        ) : (
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ fontWeight: 600, fontSize: 17 }}>Enter the OTP sent to</p>
            <p style={{ color: 'var(--blue)', fontWeight: 600 }}>+91 {phone}</p>
            <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
              {otp.map((d, i) => (
                <input key={i} maxLength={1} value={d}
                  ref={el => refs.current[i] = el}
                  onChange={e => handleOtp(i, e.target.value)}
                  onKeyDown={e => { if (e.key === 'Backspace' && !d && i > 0) refs.current[i - 1]?.focus() }}
                  style={{ width: '44px', flexShrink: 0, height: '52px', borderRadius: '10px', background: 'var(--card)', border: `1px solid ${d ? 'var(--blue)' : 'var(--border)'}`, textAlign: 'center', fontSize: '22px', fontWeight: 700, color: '#fff', fontFamily: 'inherit', outline: 'none' }} />
              ))}
            </div>
            <button className="btn btn-blue" disabled={!filled} style={{ opacity: filled ? 1 : 0.4, marginTop: 8 }}
              onClick={() => nav('/driver/profile')}>Verify & Continue</button>
            <button className="btn btn-ghost" onClick={() => setStep('phone')}>Change Number</button>
          </div>
        )}

        <p style={{ color: 'var(--text3)', fontSize: 11, marginTop: 48, textAlign: 'center' }}>
          By continuing, you agree to our<br /><span style={{ color: 'var(--blue)' }}>Terms & Privacy Policy</span>
        </p>
      </div>
    </div>
  )
}
