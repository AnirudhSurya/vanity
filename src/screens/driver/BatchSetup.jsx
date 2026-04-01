import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DEFAULT_BATCHES = [
  { id: 1, name: 'Morning Early', time: '7:00 AM', type: 'PICKUP', kids: 3 },
  { id: 2, name: 'Morning Late', time: '8:30 AM', type: 'PICKUP', kids: 2 },
  { id: 3, name: 'Afternoon Drop', time: '3:30 PM', type: 'DROPOFF', kids: 5 },
]

export default function BatchSetup() {
  const nav = useNavigate()
  const [batches, setBatches] = useState(DEFAULT_BATCHES)
  const [showNew, setShowNew] = useState(false)
  const [newBatch, setNewBatch] = useState({ name: '', time: '', type: 'PICKUP' })

  function addBatch() {
    if (!newBatch.name || !newBatch.time) return
    setBatches(b => [...b, { id: Date.now(), ...newBatch, kids: 0 }])
    setNewBatch({ name: '', time: '', type: 'PICKUP' })
    setShowNew(false)
  }

  const typeColor = t => t === 'PICKUP' ? 'badge-blue' : 'badge-orange'

  return (
    <div className="phone">
      <div className="screen p20">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
          <button className="back-btn" onClick={() => nav(-1)}>← Back</button>
          <div style={{ flex: 1 }}></div>
          <span style={{ color: 'var(--text2)', fontSize: 12, fontWeight: 600 }}>STEP 3 OF 3</span>
        </div>
        <div className="stepper" style={{ justifyContent: 'flex-start', marginBottom: 24 }}>
          {[1,2,3].map(i => <div key={i} className={`step-dot ${i<=3?'active':''}`} />)}
        </div>

        <h2 style={{ fontSize: 20, fontWeight: 700 }}>Your Batches</h2>
        <p style={{ color: 'var(--text2)', fontSize: 13, marginTop: 4, marginBottom: 20 }}>Group kids into trips</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {batches.map(b => (
            <div key={b.id} className="card" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 4, height: 40, borderRadius: 2, background: b.type === 'PICKUP' ? 'var(--blue)' : 'var(--orange)', flexShrink: 0 }}></div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontWeight: 600, fontSize: 15 }}>{b.name}</span>
                  <span className={`badge ${typeColor(b.type)}`}>{b.type}</span>
                </div>
                <div style={{ color: 'var(--text2)', fontSize: 12, marginTop: 4, display: 'flex', gap: 12 }}>
                  <span>{b.time}</span>
                  <span>·</span>
                  <span>{b.kids} kids assigned</span>
                </div>
              </div>
              <button style={{ background: 'none', border: 'none', color: 'var(--text2)', cursor: 'pointer', fontSize: 16 }}
                onClick={() => nav('/driver/children', { state: { batch: b } })}>✏️</button>
            </div>
          ))}

          {showNew ? (
            <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <input className="input" placeholder="Batch name (e.g. Morning Early)" value={newBatch.name} onChange={e => setNewBatch(b => ({ ...b, name: e.target.value }))} />
              <input className="input" type="time" value={newBatch.time} onChange={e => setNewBatch(b => ({ ...b, time: e.target.value }))} />
              <select className="input" value={newBatch.type} onChange={e => setNewBatch(b => ({ ...b, type: e.target.value }))} style={{ appearance: 'none' }}>
                <option value="PICKUP">Pickup</option>
                <option value="DROPOFF">Drop-off</option>
              </select>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="btn btn-ghost" style={{ flex: 1 }} onClick={() => setShowNew(false)}>Cancel</button>
                <button className="btn btn-blue" style={{ flex: 1 }} onClick={addBatch}>Add</button>
              </div>
            </div>
          ) : (
            <button className="card" style={{ border: '1px dashed var(--border)', cursor: 'pointer', color: 'var(--blue)', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: 'transparent', fontFamily: 'inherit', fontSize: 14 }}
              onClick={() => setShowNew(true)}>+ Create New Batch</button>
          )}
        </div>

        <div style={{ flex: 1 }}></div>
        <button className="btn btn-blue" style={{ marginTop: 24 }} onClick={() => nav('/driver/code')}>
          All done! Generate my driver code
        </button>
      </div>
    </div>
  )
}
