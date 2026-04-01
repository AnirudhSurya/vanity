import { useNavigate } from 'react-router-dom'

const BATCHES = [
  { id: 1, name: 'Morning Early', time: '7:00 AM', status: 'COMPLETED', kids: 8, km: null },
  { id: 2, name: 'Morning Late', time: '8:30 AM', status: 'IN_PROGRESS', kids: 5, km: '2.4' },
  { id: 3, name: 'Afternoon Drop', time: '3:30 PM', status: 'UPCOMING', kids: 12, km: null },
]

const statusMap = {
  COMPLETED: { label: '● Completed', color: 'var(--green)', bg: 'var(--green-dim)' },
  IN_PROGRESS: { label: '● In Progress', color: 'var(--orange)', bg: 'var(--orange-dim)' },
  UPCOMING: { label: '● Upcoming', color: 'var(--text2)', bg: 'rgba(255,255,255,0.06)' },
}

export default function DriverHome() {
  const nav = useNavigate()

  return (
    <div className="phone">
      {/* Header */}
      <div style={{ padding: '20px 20px 12px', background: 'var(--bg)', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🚐</div>
            <span style={{ fontWeight: 700, fontSize: 16 }}>VANITY</span>
          </div>
          <p style={{ color: 'var(--text2)', fontSize: 11, marginTop: 2 }}>KA 05 AB 1234</p>
        </div>
        <div style={{ display: 'flex', gap: 12, color: 'var(--text2)' }}>
          <span style={{ cursor: 'pointer', fontSize: 20 }}>🔔</span>
          <span style={{ cursor: 'pointer', fontSize: 20 }}>☰</span>
        </div>
      </div>

      <div className="screen p20" style={{ gap: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700 }}>Today's Trips</h2>
            <p style={{ color: 'var(--text2)', fontSize: 12, marginTop: 2 }}>Monday, 24 May 2024</p>
          </div>
          <span className="badge badge-blue">3 ACTIVE</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {BATCHES.map(b => {
            const s = statusMap[b.status]
            return (
              <div key={b.id} className="card" style={{ borderLeft: `3px solid ${s.color}` }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontWeight: 700, fontSize: 15 }}>{b.name}</span>
                  <span style={{ background: s.bg, color: s.color, fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 20 }}>{s.label}</span>
                </div>
                <p style={{ color: 'var(--text2)', fontSize: 12 }}>⏰ {b.time}</p>

                {b.status === 'IN_PROGRESS' && (
                  <div style={{ display: 'flex', gap: 16, marginTop: 12 }}>
                    <div style={{ background: 'var(--card2)', borderRadius: 10, padding: '8px 14px', textAlign: 'center', flex: 1 }}>
                      <p style={{ fontSize: 18, fontWeight: 700 }}>{b.kids}</p>
                      <p style={{ color: 'var(--text2)', fontSize: 11 }}>CHILDREN</p>
                    </div>
                    <div style={{ background: 'var(--card2)', borderRadius: 10, padding: '8px 14px', textAlign: 'center', flex: 1 }}>
                      <p style={{ fontSize: 18, fontWeight: 700 }}>{b.km}</p>
                      <p style={{ color: 'var(--text2)', fontSize: 11 }}>KM LEFT</p>
                    </div>
                  </div>
                )}

                <div style={{ marginTop: 12 }}>
                  {b.status === 'IN_PROGRESS' && (
                    <button className="btn btn-danger" onClick={() => nav('/driver/trip')}>END TRIP</button>
                  )}
                  {b.status === 'UPCOMING' && (
                    <button className="btn btn-blue" onClick={() => nav('/driver/trip')}>START</button>
                  )}
                  {b.status === 'COMPLETED' && (
                    <button className="btn btn-ghost" onClick={() => nav('/driver/history')}>View Details</button>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Driver Tools */}
        <div style={{ marginTop: 24 }}>
          <p style={{ color: 'var(--text3)', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', marginBottom: 12 }}>DRIVER TOOLS</p>
          <div style={{ display: 'flex', gap: 10 }}>
            <div className="card" style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }}>
              <span style={{ fontSize: 22 }}>⚠️</span>
              <p style={{ color: 'var(--text2)', fontSize: 11, marginTop: 6 }}>Report Delay</p>
            </div>
            <div className="card" style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }}>
              <span style={{ fontSize: 22 }}>🛠️</span>
              <p style={{ color: 'var(--text2)', fontSize: 11, marginTop: 6 }}>Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="bottom-nav">
        {[['🏠','Home','/driver/home'],['📋','History','/driver/history'],['👤','Profile','/driver/profile']].map(([icon,label,path]) => (
          <button key={label} className={`nav-item ${path === '/driver/home' ? 'active' : ''}`} onClick={() => nav(path)}>
            <span style={{ fontSize: 20 }}>{icon}</span>
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
