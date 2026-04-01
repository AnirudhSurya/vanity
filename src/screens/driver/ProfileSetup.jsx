import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const vehicleTypes = ['Omni / Maruti Van', 'Force Tempo Traveller', 'Mahindra Bolero', 'Toyota Innova', 'Tata Ace']

export default function ProfileSetup() {
  const nav = useNavigate()
  const [form, setForm] = useState({ name: '', vehicle: '', type: '', license: '', rc: '' })
  const [photo, setPhoto] = useState(null)

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))
  const valid = form.name && form.vehicle && form.type && form.license && form.rc

  return (
    <div className="phone">
      <div className="screen p20" style={{ gap: 0 }}>
        {/* Progress */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <button className="back-btn" onClick={() => nav(-1)}>← Back</button>
          <div style={{ flex: 1 }}></div>
          <div className="stepper">
            {[1,2,3].map(i => <div key={i} className={`step-dot ${i===1?'active':''}`} />)}
          </div>
        </div>

        <h2 style={{ fontSize: 22, fontWeight: 700 }}>Set up your profile</h2>
        <p style={{ color: 'var(--text2)', fontSize: 13, marginTop: 4, marginBottom: 28 }}>Let parents know who's driving</p>

        {/* Photo */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 24 }}>
          <div style={{ width: 80, height: 80, borderRadius: 24, background: 'var(--card)', border: '2px dashed var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, cursor: 'pointer' }}
            onClick={() => setPhoto('set')}>
            {photo ? '👤' : '📷'}
          </div>
          <p style={{ color: 'var(--text2)', fontSize: 11, marginTop: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Add a Photo (Optional)</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="input-wrap">
            <label className="input-label">Full Name</label>
            <input className="input" placeholder="Raj Kumar" value={form.name} onChange={set('name')} />
          </div>
          <div className="input-wrap">
            <label className="input-label">Vehicle Number</label>
            <input className="input" placeholder="KA 05 AB 1234" value={form.vehicle} onChange={set('vehicle')} />
          </div>
          <div className="input-wrap">
            <label className="input-label">Vehicle Type</label>
            <select className="input" value={form.type} onChange={set('type')} style={{ appearance: 'none' }}>
              <option value="">Select vehicle type</option>
              {vehicleTypes.map(v => <option key={v} value={v}>{v}</option>)}
            </select>
          </div>
          <div className="input-wrap">
            <label className="input-label">Driver's License Number</label>
            <input className="input" placeholder="KA0120230012345" value={form.license} onChange={set('license')} />
          </div>
          <div className="input-wrap">
            <label className="input-label">RC Card Number</label>
            <input className="input" placeholder="KA05AB1234" value={form.rc} onChange={set('rc')} />
          </div>
        </div>

        <div style={{ flex: 1 }}></div>
        <button className="btn btn-blue" style={{ marginTop: 24, opacity: valid ? 1 : 0.4 }}
          disabled={!valid} onClick={() => nav('/driver/batches')}>Continue</button>
      </div>
    </div>
  )
}
