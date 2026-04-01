import { useNavigate } from 'react-router-dom'

export default function LiveTracking() {
  const nav = useNavigate()

  return (
    <div className="phone">
      {/* Header */}
      <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 20 }}>☰</span>
          <span style={{ fontWeight: 700, fontSize: 18 }}>Vanity</span>
        </div>
        <div style={{ width: 34, height: 34, borderRadius: 50, background: 'var(--card)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>👤</div>
      </div>

      {/* Map simulation */}
      <div style={{ position: 'relative', height: 320, background: 'linear-gradient(135deg, #1a1d2e 0%, #0f1117 100%)', overflow: 'hidden' }}>
        {/* Grid lines to simulate map */}
        <svg width="100%" height="100%" style={{ position: 'absolute', opacity: 0.15 }}>
          {[0,1,2,3,4,5,6,7,8].map(i => (
            <line key={`h${i}`} x1="0" y1={i*40} x2="100%" y2={i*40} stroke="#4a9fff" strokeWidth="0.5" />
          ))}
          {[0,1,2,3,4,5,6,7,8,9,10].map(i => (
            <line key={`v${i}`} x1={i*40} y1="0" x2={i*40} y2="100%" stroke="#4a9fff" strokeWidth="0.5" />
          ))}
          {/* Dashed route path */}
          <path d="M 60 280 Q 100 240 140 200 Q 200 160 240 130 Q 280 100 300 70" stroke="#3d8ef0" strokeWidth="2" strokeDasharray="6,4" fill="none" />
        </svg>

        {/* Van marker */}
        <div style={{ position: 'absolute', left: 215, top: 108, transform: 'translate(-50%,-50%)' }}>
          <div style={{ background: 'var(--orange)', borderRadius: 10, padding: '5px 10px', fontSize: 12, fontWeight: 700, color: '#fff', whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(249,115,22,0.4)' }}>
            🚐 VAN-042
          </div>
        </div>

        {/* Child destination marker */}
        <div style={{ position: 'absolute', left: 300, top: 60, transform: 'translate(-50%,-50%)' }}>
          <div style={{ width: 14, height: 14, borderRadius: 50, background: 'var(--green)', border: '2px solid #fff', boxShadow: '0 0 0 4px rgba(34,197,94,0.3)' }}></div>
        </div>

        {/* Map controls */}
        <div style={{ position: 'absolute', right: 16, top: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {['👁','⊕','⊖'].map(icon => (
            <div key={icon} style={{ width: 36, height: 36, background: 'var(--card)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 16 }}>{icon}</div>
          ))}
        </div>
      </div>

      {/* Info panel */}
      <div className="screen" style={{ padding: '16px 20px', gap: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <span className="badge badge-orange">Morning Pickup · In Progress</span>
          <span className="badge badge-blue" style={{ marginLeft: 'auto' }}>Waiting</span>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 800, marginTop: 8 }}>2 stops before Riya</h2>
        <p style={{ color: 'var(--text2)', fontSize: 13, marginTop: 4, marginBottom: 16 }}>Est. arrival 7:14 AM · Oak Ridge Avenue</p>

        {/* Stop list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px', background: 'var(--card)', borderRadius: 12 }}>
            <div style={{ width: 10, height: 10, borderRadius: 50, background: 'var(--orange)', flexShrink: 0 }}></div>
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: 600, fontSize: 13 }}>Rohan's stop</p>
              <p style={{ color: 'var(--text2)', fontSize: 11 }}>8 Pine Road</p>
            </div>
            <span className="badge badge-orange">CURRENT</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px', background: 'var(--card)', borderRadius: 12 }}>
            <div style={{ width: 10, height: 10, borderRadius: 50, background: 'var(--blue)', flexShrink: 0 }}></div>
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: 600, fontSize: 13, color: 'var(--blue)' }}>Riya's stop</p>
              <p style={{ color: 'var(--text2)', fontSize: 11 }}>12 Elm Street</p>
            </div>
            <span className="badge badge-blue">NEXT</span>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="bottom-nav">
        {[['🗺️','Live Map','/parent/tracking'],['👨‍👩‍👧','Students','/parent/home'],['📋','History','/parent/history']].map(([icon,label,path]) => (
          <button key={label} className={`nav-item ${label==='Live Map'?'active':''}`} onClick={() => nav(path)}>
            <span style={{ fontSize: 20 }}>{icon}</span>
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
