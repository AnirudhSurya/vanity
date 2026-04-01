import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HISTORY = [
  {
    date: 'Today, March 22', count: '1 trip',
    trips: [
      { name: 'MORNING EARLY', time: '7:02 AM → 7:47 AM', picked: 8, status: 'COMPLETED', absent: 0 },
    ]
  },
  {
    date: 'Yesterday, March 21', count: '2 trips',
    trips: [
      { name: 'MORNING EARLY', time: '7:02 AM → 7:38 AM', picked: 8, status: 'COMPLETED', absent: 0 },
      { name: 'MORNING LATE', time: '8:29 AM → 9:03 AM', picked: 4, status: 'COMPLETED', absent: 1 },
    ]
  },
  {
    date: 'March 20', count: null,
    trips: [
      { name: 'MORNING EARLY', time: '7:02 AM → 7:45 AM', picked: 8, status: 'COMPLETED', absent: 0 },
      { name: 'AFTERNOON DROP', time: '3:30 PM → 4:12 PM', picked: 12, status: 'COMPLETED', absent: 0 },
    ]
  },
]

const filters = ['All', 'This Week', 'This Month']

export default function TripHistory() {
  const nav = useNavigate()
  const [filter, setFilter] = useState('All')

  return (
    <div className="phone">
      <div style={{ padding: '20px 20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2 style={{ fontWeight: 700, fontSize: 20 }}>Trip History</h2>
        <span style={{ cursor: 'pointer', fontSize: 20 }}>🔔</span>
      </div>

      {/* Filters */}
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
        {HISTORY.map(group => (
          <div key={group.date} style={{ marginBottom: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
              <p style={{ fontWeight: 600, fontSize: 13 }}>{group.date}</p>
              {group.count && <p style={{ color: 'var(--text2)', fontSize: 12 }}>{group.count}</p>}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {group.trips.map((t, i) => (
                <div key={i} className="card" style={{ borderLeft: `3px solid var(--green)` }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: 12, color: 'var(--text2)', letterSpacing: '0.06em' }}>{t.name}</p>
                      <p style={{ color: 'var(--text2)', fontSize: 12, marginTop: 2 }}>{t.time}</p>
                      <div style={{ display: 'flex', gap: 10, marginTop: 6 }}>
                        <span className="badge badge-green">{t.picked} picked up</span>
                        {t.absent > 0 && <span className="badge badge-red">{t.absent} absent</span>}
                      </div>
                    </div>
                    <span className="badge badge-green">● COMPLETED</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bottom-nav">
        {[['🏠','Home','/driver/home'],['📋','History','/driver/history'],['👤','Profile','/driver/profile']].map(([icon,label,path]) => (
          <button key={label} className={`nav-item ${path === '/driver/history' ? 'active' : ''}`} onClick={() => nav(path)}>
            <span style={{ fontSize: 20 }}>{icon}</span>
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
