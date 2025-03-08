import { useState } from 'react'
import './App.css'
import AuthPage from '../pages/auth-page/AuthPage'
import DashboardPage from '../pages/dashboard/DashboardPage'
function App() {
  
  return (
    <div className="container">
      {/* <AuthPage/> */}
      <DashboardPage/>
    </div>
  )
}

export default App
