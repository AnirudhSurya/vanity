import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from './screens/Landing'
// Driver
import DriverOTP from './screens/driver/OTPVerification'
import DriverProfile from './screens/driver/ProfileSetup'
import BatchSetup from './screens/driver/BatchSetup'
import AddChildren from './screens/driver/AddChildren'
import ChildInfo from './screens/driver/ChildInfo'
import DriverCode from './screens/driver/DriverCode'
import DriverHome from './screens/driver/DriverHome'
import ActiveTrip from './screens/driver/ActiveTrip'
import DriverHistory from './screens/driver/TripHistory'
// Parent
import ConnectDriver from './screens/parent/ConnectDriver'
import ParentHome from './screens/parent/ParentHome'
import LiveTracking from './screens/parent/LiveTracking'
import MarkAttendance from './screens/parent/MarkAttendance'
import ParentHistory from './screens/parent/TripHistory'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      {/* Driver */}
      <Route path="/driver/otp" element={<DriverOTP />} />
      <Route path="/driver/profile" element={<DriverProfile />} />
      <Route path="/driver/batches" element={<BatchSetup />} />
      <Route path="/driver/children" element={<AddChildren />} />
      <Route path="/driver/child-info" element={<ChildInfo />} />
      <Route path="/driver/code" element={<DriverCode />} />
      <Route path="/driver/home" element={<DriverHome />} />
      <Route path="/driver/trip" element={<ActiveTrip />} />
      <Route path="/driver/history" element={<DriverHistory />} />
      {/* Parent */}
      <Route path="/parent/connect" element={<ConnectDriver />} />
      <Route path="/parent/home" element={<ParentHome />} />
      <Route path="/parent/tracking" element={<LiveTracking />} />
      <Route path="/parent/attendance" element={<MarkAttendance />} />
      <Route path="/parent/history" element={<ParentHistory />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
