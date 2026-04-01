import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const MOCK_CHILDREN = [
  { id: 1, name: 'Arjun Sharma', grade: 'Grade 5', address: '12 Elm Street' },
  { id: 2, name: 'Priya Nair', grade: 'Grade 3', address: '45 Oak Avenue' },
  { id: 3, name: 'Rohan Mehta', grade: 'Grade 2', address: '8 Pine Road' },
  { id: 4, name: 'Kavya Reddy', grade: 'Grade 4', address: '22 Mango Street' },
]

export default function AddChildren() {
  const nav = useNavigate()
  const loc = useLocation()
  const batch = loc.state?.batch || { name: 'Morning Early' }
  const [children, setChildren] = useState(MOCK_CHILDREN)

  function removeChild(id) {
    setChildren(c => c.filter(x => x.id !== id))
  }

  return (
    <div className="phone">
      <div className="screen p20">
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
          <button className="back-btn" onClick={() => nav(-1)}>← Back</button>
        </div>

        <h2 style={{ fontSize: 20, fontWeight: 700 }}>Your Children</h2>
        <p style={{ color: 'var(--text2)', fontSize: 13, marginTop: 4, marginBottom: 20 }}>Add all kids on your van · {batch.name}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {children.map(c => (
            <div key={c.id} className="card" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div className="avatar">{c.name[0]}</div>
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: 600, fontSize: 14 }}>{c.name}</p>
                <p style={{ color: 'var(--text2)', fontSize: 12 }}>{c.grade} · {c.address}</p>
              </div>
              <button style={{ background: 'none', border: 'none', color: 'var(--text2)', cursor: 'pointer', fontSize: 16 }}
                onClick={() => nav('/driver/child-info', { state: { child: c } })}>✏️</button>
              <button style={{ background: 'none', border: 'none', color: 'var(--red)', cursor: 'pointer', fontSize: 16 }}
                onClick={() => removeChild(c.id)}>🗑️</button>
            </div>
          ))}

          <button className="card" style={{ border: '1px dashed var(--border)', cursor: 'pointer', color: 'var(--blue)', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: 'transparent', fontFamily: 'inherit', fontSize: 14 }}
            onClick={() => nav('/driver/child-info', { state: { child: null } })}>+ Add Another Child</button>
        </div>

        <div style={{ flex: 1 }}></div>
        <button className="btn btn-blue" style={{ marginTop: 24 }} onClick={() => nav('/driver/batches')}>
          Continue →
        </button>
      </div>
    </div>
  )
}
