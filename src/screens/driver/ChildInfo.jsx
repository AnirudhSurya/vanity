import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function ChildInfo() {
  const nav = useNavigate()
  const loc = useLocation()
  const existing = loc.state?.child
  const [form, setForm] = useState({
    name: existing?.name || '',
    grade: existing?.grade || '',
    address: existing?.address || '',
    phone: existing?.phone || '',
    notes: '',
  })

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))
  const valid = form.name && form.grade && form.address && form.phone

  return (
    <div className="phone">
      <div className="screen p20">
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
          <button className="back-btn" onClick={() => nav(-1)}>← Add Student</button>
        </div>

        <p style={{ color: 'var(--text2)', fontSize: 13, marginBottom: 20 }}>Add a student to your van</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="input-wrap">
            <label className="input-label">Child's Name</label>
            <input className="input" placeholder="Arjun Sharma" value={form.name} onChange={set('name')} />
          </div>
          <div className="input-wrap">
            <label className="input-label">Class / Grade</label>
            <input className="input" placeholder="Grade 5" value={form.grade} onChange={set('grade')} />
          </div>
          <div className="input-wrap">
            <label className="input-label">Pickup / Drop Address</label>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: 14, top: 14, fontSize: 16 }}>📍</span>
              <input className="input" style={{ paddingLeft: 38 }} placeholder="12 Elm Street, HSR Layout, Bengaluru 560102" value={form.address} onChange={set('address')} />
            </div>
            <button style={{ background: 'none', border: 'none', color: 'var(--blue)', fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'inherit', marginTop: 4 }}>
              📍 Use current location
            </button>
          </div>
          <div className="input-wrap">
            <label className="input-label">Parent's Phone Number</label>
            <div style={{ display: 'flex', gap: 8 }}>
              <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '14px 12px', display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' }}>
                <span>🇮🇳</span><span style={{ color: 'var(--text2)', fontSize: 14 }}>+91</span>
              </div>
              <input className="input" placeholder="98765 43210" value={form.phone} onChange={set('phone')} style={{ flex: 1 }} />
            </div>
          </div>
          <div className="input-wrap">
            <label className="input-label">Notes (Optional)</label>
            <input className="input" placeholder="e.g. Ring doorbell twice" value={form.notes} onChange={set('notes')} />
          </div>

          {/* Upload area placeholder */}
          <div style={{ background: 'var(--card)', border: '1px dashed var(--border)', borderRadius: 12, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text3)', fontSize: 13, cursor: 'pointer' }}>
            📎 Upload ID card (optional)
          </div>
        </div>

        <div style={{ flex: 1 }}></div>
        <button className="btn btn-blue" style={{ marginTop: 24, opacity: valid ? 1 : 0.4 }} disabled={!valid}
          onClick={() => nav('/driver/children')}>Save Child</button>
      </div>
    </div>
  )
}
