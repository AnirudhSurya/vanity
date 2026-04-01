import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function DriverCode() {
  const nav = useNavigate()
  const [copied, setCopied] = useState(false)

  function copy() {
    navigator.clipboard.writeText('VAN-4K2R').catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="phone">
      <div className="screen p24" style={{ alignItems: 'center', justifyContent: 'center', gap: 0 }}>
        <div style={{ width: 64, height: 64, borderRadius: 50, background: 'var(--blue-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, marginBottom: 16 }}>✅</div>

        <h2 style={{ fontSize: 24, fontWeight: 700, textAlign: 'center' }}>You're all set!</h2>
        <p style={{ color: 'var(--text2)', fontSize: 14, textAlign: 'center', marginTop: 6, marginBottom: 32 }}>Your registration is complete.</p>

        {/* Code Card */}
        <div className="card" style={{ width: '100%', textAlign: 'center', padding: 24, marginBottom: 12 }}>
          <p style={{ color: 'var(--text2)', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Your Driver Code</p>
          <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '18px 0' }}>
            <span style={{ fontSize: 36, fontWeight: 800, letterSpacing: 6, color: '#fff', fontFamily: 'monospace' }}>VAN-4K2R</span>
          </div>
          <p style={{ color: 'var(--text2)', fontSize: 12, marginTop: 12 }}>Share this with parents to connect them to your van</p>
        </div>

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
          <button className="btn btn-ghost" onClick={copy}>
            {copied ? '✅ Copied!' : '📋  Copy Code'}
          </button>
          <button className="btn" style={{ background: '#25D366', color: '#fff' }}>
            💬  Share via WhatsApp
          </button>
        </div>

        <p style={{ color: 'var(--text3)', fontSize: 12, textAlign: 'center', marginBottom: 20 }}>
          Parents enter this code in the Vanity parent app
        </p>

        <button className="btn btn-blue" style={{ width: '100%' }} onClick={() => nav('/driver/home')}>
          Go to Home
        </button>
      </div>
    </div>
  )
}
