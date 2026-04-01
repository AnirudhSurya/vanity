# Vanity – School Transport, Tracked.

## Project Overview
Vanity is an interactive prototype for a school van management app serving two user types:
- **Drivers** – private school van operators who manage routes, batches, and student attendance
- **Parents** – parents who track their child's van in real-time and manage attendance

## Tech Stack
- **Framework**: Vite + React 18
- **Routing**: React Router v6 (HashRouter for GitHub Pages compatibility)
- **Styling**: Plain CSS (custom design system in `src/index.css`)
- **Deploy**: GitHub Pages via GitHub Actions (`/.github/workflows/deploy.yml`)
- **Base URL**: `/vanity/` (set in `vite.config.js`)

## File Structure
```
src/
├── main.jsx              # Entry point (HashRouter)
├── App.jsx               # Route definitions
├── index.css             # Global design system (colors, typography, components)
└── screens/
    ├── Landing.jsx        # Flow selector (Driver / Parent)
    ├── driver/
    │   ├── OTPVerification.jsx    # Phone + OTP entry
    │   ├── ProfileSetup.jsx       # Name, vehicle, license, RC
    │   ├── BatchSetup.jsx         # Create/view batches (trips)
    │   ├── AddChildren.jsx        # List children per batch
    │   ├── ChildInfo.jsx          # Add/edit individual child
    │   ├── DriverCode.jsx         # Share driver code (VAN-4K2R)
    │   ├── DriverHome.jsx         # Active trips dashboard
    │   ├── ActiveTrip.jsx         # Live route with mark picked-up/absent
    │   └── TripHistory.jsx        # Past trips filtered by date/week/month
    └── parent/
        ├── ConnectDriver.jsx      # Enter driver code, select child
        ├── ParentHome.jsx         # Child status, active trip, recent activity
        ├── LiveTracking.jsx       # Map view with stop progress
        ├── MarkAttendance.jsx     # Mark child absent per trip
        └── TripHistory.jsx        # Child's trip history (pickups/drops)
```

## Design System
All design tokens live in CSS custom properties in `index.css`:
| Token | Value | Use |
|---|---|---|
| `--bg` | `#0f1117` | Page background |
| `--card` | `#1a1d26` | Card surface |
| `--blue` | `#3d8ef0` | Primary CTA |
| `--green` | `#22c55e` | Completed / success |
| `--orange` | `#f97316` | In-progress / warning |
| `--red` | `#ef4444` | Danger / absent |

## Screens Implemented (14 total)

### Driver Flow
1. **OTP Verification** – Phone number entry → 6-digit OTP (interactive)
2. **Profile Setup** – Name, vehicle number, type, license, RC (form validation)
3. **Batch Setup** – View/create batches with time and pickup/dropoff type
4. **Add Children** – List of children per batch with edit/delete
5. **Child Info** – Add student name, grade, address, parent phone
6. **Driver Code** – Generated code (VAN-4K2R) with copy & WhatsApp share
7. **Driver Home** – Today's trips with status, START/END trip buttons
8. **Active Trip** – Live route progress with pick-up / absent marking per stop
9. **Trip History** – Past trips grouped by date with filters

### Parent Flow
10. **Connect to Driver** – Enter code → find driver → select child from roster
11. **Parent Home** – Child status card, active trip, track live, mark absent, recent activity
12. **Live Tracking** – Simulated map with van position, stops remaining
13. **Mark Attendance** – Toggle trips to skip, add reason, notify driver
14. **Trip History** – Child's history filtered by All/Pickups/Drops

## Routing
All routes use `HashRouter` so GitHub Pages works without server-side config:
```
/                   → Landing (flow selector)
/driver/otp         → OTP Verification
/driver/profile     → Profile Setup
/driver/batches     → Batch Setup
/driver/children    → Add Children
/driver/child-info  → Child Info form
/driver/code        → Driver Code
/driver/home        → Driver Home
/driver/trip        → Active Trip
/driver/history     → Driver Trip History
/parent/connect     → Connect to Driver
/parent/home        → Parent Home
/parent/tracking    → Live Tracking
/parent/attendance  → Mark Attendance
/parent/history     → Parent Trip History
```

## Deployment
- Auto-deploys on every push to `main` via GitHub Actions
- GitHub Pages URL: `https://anirudhsurya.github.io/vanity/`
- No login required — publicly accessible

## Future Features (from product spec)
- Parent-modified pickup/drop address for a day (notifies driver mid-trip)
- Multi-day absence scheduling
- Real GPS tracking (replace simulated map)
- Payment tracking per month
- Push notifications for trip start/arrival
