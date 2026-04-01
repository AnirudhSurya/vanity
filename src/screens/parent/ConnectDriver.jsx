import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MOCK_KIDS = [
  { id: 1, name: 'Arjun Sharma', grade: 'Grade 5' },
  { id: 2, name: 'Priya Nair', grade: 'Grade 3' },
  { id: 3, name: 'Rohan Mehta', grade: 'Grade 2' },
  { id: 4, name: 'Kavya Reddy', grade: 'Grade 4' },
]

export default function ConnectDriver() {
  const nav = useNavigate()
  const [code, setCode] = useState('')
  const [found, setFound] = useState(false)
  const [selected, setSelected] = useState(null)

  function findDriver() {
    if (code.trim().toUpperCase() === 'VAN-4K2R' || code.trim().length >= 6) setFound(true)
  }

  return (
    <div className="phone">
      <div className="screen p20" style={{ gap: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 20 }}>🚐</span>
            <span style={{ fontWeight: 700, fontSize: 18 }}>Vanity</span>
          </div>
          <span style={{ color: 'var(--text2)', fontSize: 12 }}>Onboarding</span>
        </div>

        <h2 style={{ fontSize: 22, fontWeight: 700 }}>Connect to your van</h2>
        <p style={{ color: 'var(--text2)', fontSize: 13, marginTop: 6, marginBottom: 24 }}>Enter the code your driver shared with you</p>

        {/* Step 1: Code entry */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <input className="input" placeholder="VAN-4K2R" value={code}
            onChange={e => { setCode(e.target.value); setFound(false); setSelected(null) }}
            style={{ textAlign: 'center', fontSize: 20, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase' }} />
          <button className="btn btn-blue" onClick={findDriver} disabled={code.length < 6} style={{ opacity: code.length >= 6 ? 1 : 0.4 }}>
            Find my Driver
          </button>
        </div>

        {/* Step 2: Driver found */}
        {found && (
          <div style={{ marginTop: 20 }}>
            <div className="card" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, borderColor: 'var(--green)' }}>
              <div className="avatar" style={{ background: 'var(--blue)', color: '#fff', fontSize: 18, width: 48, height: 48, borderRadius: 16 }}>RK</div>
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: 700 }}>Raj Kumar</p>
                <p style={{ color: 'var(--text2)', fontSize: 12 }}>KA 05 AB 1234</p>
                <p style={{ color: 'var(--text2)', fontSize: 12 }}>5 children on this van</p>
              </div>
              <span className="badge badge-green">● CONNECTED</span>
            </div>

            <p style={{ fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Select your child</p>
            <p style={{ color: 'var(--text2)', fontSize: 12, marginBottom: 12 }}>Step 2 of 2</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {MOCK_KIDS.map(k => (
                <div key={k.id} className="card" style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', borderColor: selected?.id === k.id ? 'var(--blue)' : 'var(--border)' }}
                  onClick={() => setSelected(k)}>
                  <div className="avatar">{k.name[0]}</div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 600 }}>{k.name}</p>
                    <p style={{ color: 'var(--text2)', fontSize: 12 }}>{k.grade}</p>
                  </div>
                  <div style={{ width: 22, height: 22, borderRadius: 50, border: `2px solid ${selected?.id === k.id ? 'var(--blue)' : 'var(--border)'}`, background: selected?.id === k.id ? 'var(--blue)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {selected?.id === k.id && <span style={{ color: '#fff', fontSize: 12 }}>✓</span>}
                  </div>
                </div>
              ))}
            </div>

            <button className="btn btn-blue" style={{ marginTop: 16, opacity: selected ? 1 : 0.4 }} disabled={!selected}
              onClick={() => nav('/parent/home')}>Confirm & Continue</button>
          </div>
        )}

        <p style={{ color: 'var(--text3)', fontSize: 11, textAlign: 'center', marginTop: 'auto', paddingTop: 24 }}>POWERED BY VANITY LOGISTICS</p>
      </div>
    </div>
  )
}
