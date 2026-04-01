import { useNavigate } from 'react-router-dom'

const ACTIVITY = [
  { icon: '✅', text: 'Riya picked up', time: '7:14 AM · Yesterday', color: 'var(--green)' },
  { icon: '🏠', text: 'Dropped at Home', time: '3:52 PM · Yesterday', color: 'var(--blue)' },
]

export default function ParentHome() {
  const nav = useNavigate()

  return (
    <div className="phone">
      {/* Header */}
      <div style={{ padding: '20px 20px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 20 }}>☰</span>
          <span style={{ fontWeight: 700, fontSize: 18 }}>Vanity</span>
        </div>
        <span style={{ fontSize: 22 }}>🔔</span>
      </div>

      <div className="screen" style={{ padding: '0 20px 20px', gap: 0 }}>
        <p style={{ color: 'var(--text2)', fontSize: 12, marginBottom: 4 }}>Good Morning, Sunita</p>

        {/* Child card */}
        <div className="card" style={{ marginBottom: 16, background: 'var(--card2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 52, height: 52, borderRadius: 16, background: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>👧</div>
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800 }}>Riya · Grade 3</h2>
              <p style={{ color: 'var(--text2)', fontSize: 12 }}>VAN KA 05 AB 1234</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 10 }}>
            <div style={{ width: 8, height: 8, borderRadius: 50, background: 'var(--green)', animation: 'pulse 2s infinite' }}></div>
            <span style={{ color: 'var(--green)', fontSize: 12, fontWeight: 600 }}>Live Updates Active</span>
          </div>
        </div>

        {/* Driver info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, padding: '10px 14px', background: 'var(--card)', borderRadius: 12, border: '1px solid var(--border)' }}>
          <div style={{ width: 36, height: 36, borderRadius: 12, background: 'var(--blue-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🛡️</div>
          <div>
            <p style={{ fontSize: 11, color: 'var(--text2)', fontWeight: 600 }}>Trusted Driver</p>
            <p style={{ fontWeight: 600, fontSize: 14 }}>Ramesh Kumar</p>
          </div>
        </div>

        {/* Today's trips */}
        <p style={{ fontWeight: 700, fontSize: 14, marginBottom: 10 }}>Today's Trips</p>

        {/* Active trip */}
        <div className="card" style={{ marginBottom: 10, borderLeft: '3px solid var(--blue)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontWeight: 700, fontSize: 14 }}>Morning Pickup</p>
              <p style={{ color: 'var(--text2)', fontSize: 12 }}>Est. 7:14 AM</p>
            </div>
            <span className="badge badge-orange">Van approaching</span>
          </div>
          <p style={{ color: 'var(--text2)', fontSize: 12, marginTop: 8 }}>📍 2 stops away · Near Brigade Road</p>
          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <button className="btn btn-blue" style={{ flex: 1, padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}
              onClick={() => nav('/parent/tracking')}>📍 Track Live</button>
            <button className="btn btn-ghost" style={{ flex: 1, padding: '12px' }}
              onClick={() => nav('/parent/attendance')}>Mark Absent</button>
          </div>
        </div>

        {/* Upcoming trip */}
        <div className="card" style={{ marginBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontWeight: 700, fontSize: 14 }}>Afternoon Drop</p>
              <p style={{ color: 'var(--text2)', fontSize: 12 }}>Est. 3:46 PM</p>
            </div>
            <span className="badge badge-gray">NOT STARTED</span>
          </div>
        </div>

        {/* Recent Activity */}
        <p style={{ fontWeight: 700, fontSize: 14, marginBottom: 10 }}>Recent Activity</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {ACTIVITY.map((a, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: 50, background: a.color + '22', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{a.icon}</div>
              <div>
                <p style={{ fontWeight: 500, fontSize: 14 }}>{a.text}</p>
                <p style={{ color: 'var(--text2)', fontSize: 12 }}>{a.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bottom-nav">
        {[['🏠','Home','/parent/home'],['📍','History','/parent/history'],['⚙️','Settings','/parent/home']].map(([icon,label,path]) => (
          <button key={label} className={`nav-item ${label==='Home'?'active':''}`} onClick={() => nav(path)}>
            <span style={{ fontSize: 20 }}>{icon}</span>
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
