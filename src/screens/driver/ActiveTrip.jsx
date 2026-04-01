import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const STOPS = [
  { id: 1, name: 'Arjun Sharma', stop: 'Stop 1 · 12 Elm St', time: '7:22 AM', status: 'PICKED_UP' },
  { id: 2, name: 'Priya Nair', stop: 'Stop 2 · 45 Oak Ave', time: '7:38 AM', status: 'PICKED_UP' },
  { id: 3, name: 'Rohan Mehta', stop: 'Stop 3 · 8 Pine Road', status: 'ABSENT', time: null },
  { id: 4, name: 'Kavya Reddy', stop: 'Stop 4 · 22 Mango St', status: 'WAITING', time: null },
  { id: 5, name: 'Dev Patel', stop: 'Stop 5 · 3 Banyan Lane', status: 'WAITING', time: null },
]

const stopStatus = {
  PICKED_UP: { label: 'PICKED UP', color: 'var(--green)', icon: '✅' },
  ABSENT: { label: 'ABSENT', color: 'var(--red)', icon: '❌' },
  WAITING: { label: 'WAITING', color: 'var(--text3)', icon: '⏳' },
}

export default function ActiveTrip() {
  const nav = useNavigate()
  const [stops, setStops] = useState(STOPS)

  function markPickup(id) {
    setStops(s => s.map(x => x.id === id ? { ...x, status: 'PICKED_UP', time: '7:45 AM' } : x))
  }
  function markAbsent(id) {
    setStops(s => s.map(x => x.id === id ? { ...x, status: 'ABSENT' } : x))
  }

  const remaining = stops.filter(s => s.status === 'WAITING').length

  return (
    <div className="phone">
      {/* Trip Header */}
      <div style={{ background: 'var(--card)', padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="badge badge-orange">BROADCASTING LOCATION</span>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: 11, color: 'var(--text2)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Elapsed Time</p>
            <p style={{ fontSize: 22, fontWeight: 800 }}>12 min</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 10 }}>
          <span style={{ fontSize: 16 }}>🔀</span>
          <span style={{ fontSize: 12, color: 'var(--text2)' }}>Route optimized for traffic</span>
        </div>
      </div>

      <div className="screen p20" style={{ gap: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <div>
            <h3 style={{ fontWeight: 700, fontSize: 16 }}>Route Progress</h3>
            <p style={{ color: 'var(--text2)', fontSize: 12 }}>{remaining} stops remaining</p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {stops.map((s, i) => {
            const st = stopStatus[s.status]
            const isNext = s.status === 'WAITING' && i === stops.findIndex(x => x.status === 'WAITING')
            return (
              <div key={s.id} className="card" style={{ borderLeft: isNext ? '3px solid var(--blue)' : '3px solid transparent' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div className="avatar" style={{ background: isNext ? 'var(--blue)' : 'var(--card2)', color: isNext ? '#fff' : 'var(--text2)' }}>{s.name[0]}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <p style={{ fontWeight: 600, fontSize: 14 }}>{s.name}</p>
                      {isNext && <span className="badge badge-blue">NEXT STOP</span>}
                    </div>
                    <p style={{ color: 'var(--text2)', fontSize: 12 }}>{s.stop}</p>
                    {s.time && <p style={{ color: 'var(--green)', fontSize: 11, marginTop: 2 }}>{s.time}</p>}
                  </div>
                  <span style={{ color: st.color, fontSize: 20 }}>{st.icon}</span>
                </div>

                {isNext && (
                  <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                    <button className="btn btn-blue" style={{ flex: 1, padding: '10px' }} onClick={() => markPickup(s.id)}>✅ Picked Up</button>
                    <button className="btn btn-ghost" style={{ flex: 1, padding: '10px', color: 'var(--red)', borderColor: 'var(--red)' }} onClick={() => markAbsent(s.id)}>⊘ Absent</button>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div style={{ padding: '12px 20px 20px', borderTop: '1px solid var(--border)', display: 'flex', gap: 10 }}>
        <button className="btn btn-ghost" style={{ flex: 0, padding: '14px 20px', color: 'var(--red)', borderColor: 'var(--red)', whiteSpace: 'nowrap' }}>🚨 EMERGENCY</button>
        <button className="btn btn-danger" onClick={() => nav('/driver/home')}>END TRIP</button>
      </div>
    </div>
  )
}
