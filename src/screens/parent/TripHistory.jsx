import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HISTORY = [
  {
    date: 'TODAY, MARCH 22',
    trips: [
      { type: 'Morning Pickup', time: '7:16 AM', status: 'PICKED_UP', tag: 'PICKED UP' },
    ]
  },
  {
    date: 'YESTERDAY, MARCH 21',
    trips: [
      { type: 'Morning Pickup', time: '7:14 AM', status: 'PICKED_UP', tag: 'PICKED UP' },
      { type: 'Afternoon Drop', time: '3:52 PM', status: 'DROPPED', tag: 'DROPPED OFF' },
    ]
  },
  {
    date: 'MARCH 20',
    trips: [
      { type: 'Morning Pickup', time: '7:16 AM', status: 'ABSENT', tag: 'ABSENT', note: 'Marked by parent' },
      { type: 'Afternoon Drop', time: '3:48 PM', status: 'DROPPED', tag: 'DROPPED OFF' },
    ]
  },
  {
    date: 'MARCH 19',
    trips: [
      { type: 'Morning Pickup', time: '7:16 AM', status: 'PICKED_UP', tag: 'PICKED UP' },
      { type: 'Afternoon Drop', time: '3:55 PM', status: 'DROPPED', tag: 'DROPPED OFF' },
    ]
  },
]

const statusStyle = {
  PICKED_UP: { badge: 'badge-green', icon: '✅' },
  DROPPED: { badge: 'badge-blue', icon: '🏠' },
  ABSENT: { badge: 'badge-red', icon: '❌' },
}

const filters = ['All', 'Pickups', 'Drops']

export default function ParentTripHistory() {
  const nav = useNavigate()
  const [filter, setFilter] = useState('All')

  return (
    <div className="phone">
      <div style={{ padding: '20px 20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="back-btn" onClick={() => nav(-1)}>←</button>
          <h2 style={{ fontWeight: 700, fontSize: 20 }}>Riya's History</h2>
        </div>
        <span style={{ cursor: 'pointer', fontSize: 20 }}>⚡</span>
      </div>

      <div style={{ display: 'flex', gap: 8, padding: '12px 20px', borderBottom: '1px solid var(--border)' }}>
        {filters.map(f => (
          <button key={f} onClick={() => setFilter(f)}
            style={{ padding: '6px 16px', borderRadius: 20, border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 13, fontWeight: 500,
              background: filter === f ? 'var(--blue)' : 'var(--card)', color: filter === f ? '#fff' : 'var(--text2)' }}>
            {f}
          </button>
        ))}
      </div>

      <div className="screen" style={{ padding: '16px 20px', gap: 0 }}>
        {HISTORY.map(group => {
          const filtered = group.trips.filter(t => {
            if (filter === 'Pickups') return t.status === 'PICKED_UP' || t.status === 'ABSENT'
            if (filter === 'Drops') return t.status === 'DROPPED'
            return true
          })
          if (!filtered.length) return null
          return (
            <div key={group.date} style={{ marginBottom: 20 }}>
              <p style={{ fontWeight: 600, fontSize: 11, color: 'var(--text2)', letterSpacing: '0.1em', marginBottom: 8 }}>{group.date}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {filtered.map((t, i) => {
                  const s = statusStyle[t.status]
                  return (
                    <div key={i} className="card" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 14, background: 'var(--card2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
                        {t.status === 'DROPPED' ? '🌆' : t.status === 'ABSENT' ? '🏥' : '🌅'}
                      </div>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontWeight: 600, fontSize: 13 }}>{t.type}</p>
                        {t.note && <p style={{ color: 'var(--text2)', fontSize: 11 }}>{t.note}</p>}
                        <p style={{ color: 'var(--text2)', fontSize: 12, marginTop: 2 }}>{t.time}</p>
                      </div>
                      <span className={`badge ${s.badge}`}>{s.icon} {t.tag}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <div className="bottom-nav">
        {[['🏠','Home','/parent/home'],['📋','History','/parent/history'],['⚙️','Settings','/parent/home']].map(([icon,label,path]) => (
          <button key={label} className={`nav-item ${label==='History'?'active':''}`} onClick={() => nav(path)}>
            <span style={{ fontSize: 20 }}>{icon}</span>
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
