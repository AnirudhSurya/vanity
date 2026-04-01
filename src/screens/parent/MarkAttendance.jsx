import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TRIPS = [
  { id: 1, name: 'Morning Pickup', time: 'Est. 7:14 AM' },
  { id: 2, name: 'Afternoon Drop', time: 'Est. 3:48 PM' },
]

export default function MarkAttendance() {
  const nav = useNavigate()
  const [toggled, setToggled] = useState({ 1: true, 2: false })
  const [reason, setReason] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function toggle(id) {
    setToggled(t => ({ ...t, [id]: !t[id] }))
  }

  return (
    <div className="phone">
      <div className="screen p20" style={{ gap: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
          <button className="back-btn" onClick={() => nav(-1)}>← Mark Absence</button>
        </div>

        {/* Child chip */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px', background: 'var(--card)', borderRadius: 16, marginBottom: 28 }}>
          <div style={{ width: 44, height: 44, borderRadius: 14, background: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>👧</div>
          <div>
            <p style={{ fontWeight: 700, fontSize: 16 }}>Riya Sunita</p>
            <p style={{ color: 'var(--text2)', fontSize: 12 }}>GRADE 3 · VAN KA 05 AB 1234</p>
          </div>
        </div>

        <p style={{ fontWeight: 600, fontSize: 13, color: 'var(--text2)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Select Trip to Skip</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
          {TRIPS.map(t => (
            <div key={t.id} className="card" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 38, height: 38, borderRadius: 12, background: 'var(--card2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
                {t.id === 1 ? '🌅' : '🌆'}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: 600 }}>{t.name}</p>
                <p style={{ color: 'var(--text2)', fontSize: 12 }}>{t.time}</p>
              </div>
              <button className={`toggle ${toggled[t.id] ? 'on' : 'off'}`} onClick={() => toggle(t.id)} />
            </div>
          ))}
        </div>

        <p style={{ fontWeight: 600, fontSize: 13, color: 'var(--text2)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>Reason</p>
        <input className="input" placeholder="Feeling unwell" value={reason} onChange={e => setReason(e.target.value)} style={{ marginBottom: 16 }} />

        {/* Info note */}
        <div style={{ background: 'var(--orange-dim)', border: '1px solid var(--orange)', borderRadius: 12, padding: '12px 14px', display: 'flex', gap: 10, marginBottom: 24 }}>
          <span style={{ fontSize: 18, flexShrink: 0 }}>ℹ️</span>
          <p style={{ color: 'var(--orange)', fontSize: 12, lineHeight: 1.5 }}>The driver will see Riya marked absent before starting the trip.</p>
        </div>

        {submitted ? (
          <div style={{ background: 'var(--green-dim)', border: '1px solid var(--green)', borderRadius: 12, padding: 16, textAlign: 'center' }}>
            <p style={{ color: 'var(--green)', fontWeight: 600 }}>✅ Absence marked! Driver notified.</p>
          </div>
        ) : (
          <button className="btn btn-blue" onClick={() => setSubmitted(true)}
            disabled={!Object.values(toggled).some(Boolean)}
            style={{ opacity: Object.values(toggled).some(Boolean) ? 1 : 0.4 }}>
            Submit
          </button>
        )}
      </div>

      <div className="bottom-nav">
        {[['🗺️','Route','/parent/tracking'],['👨‍👩‍👧','Students','/parent/home'],['💬','Messages','/parent/home'],['👤','Profile','/parent/home']].map(([icon,label,path]) => (
          <button key={label} className="nav-item" onClick={() => nav(path)}>
            <span style={{ fontSize: 20 }}>{icon}</span>
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
