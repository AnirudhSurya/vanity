import { useNavigate } from 'react-router-dom'

export default function Landing() {
  const nav = useNavigate()
  return (
    <div className="landing">
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: 64, height: 64, background: 'var(--blue)', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 32 }}>🚐</div>
        <h1 style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.5px' }}>Vanity</h1>
        <p style={{ color: 'var(--text2)', marginTop: 6, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase' }}>School Transport, Tracked.</p>
      </div>

      <p style={{ color: 'var(--text2)', textAlign: 'center', maxWidth: 280, fontSize: 14, lineHeight: 1.6 }}>
        Choose a flow to explore the prototype
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', maxWidth: 320 }}>
        <button className="btn btn-blue" onClick={() => nav('/driver/otp')}>
          🚗  Driver Flow
        </button>
        <button className="btn btn-ghost" style={{ border: '1px solid var(--blue)', color: 'var(--blue)' }} onClick={() => nav('/parent/connect')}>
          👨‍👩‍👧  Parent Flow
        </button>
      </div>

      <p style={{ color: 'var(--text3)', fontSize: 12 }}>Interactive prototype · No login required</p>
    </div>
  )
}
