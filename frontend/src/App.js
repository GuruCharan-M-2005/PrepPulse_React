import React from 'react'
import Landing from './user/homepage/Landing/Landing'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import LearningPageApp from './user/learningpage/LearningPageApp'
import RoadMapApp from './user/roadmap/RoadMapApp'
import Login from './user/login/Login'
import CcalendarApp from './user/calendar/Calendar'
import Test from './user/test/Test'
import AdminLogin from './admin/adminlogin/AdminLogin'
import AdminDashboard from './admin/admindashboard/AdminDashboard'
import AdminStudents from './admin/adminstudents/AdminStudents'
import AdminResources from './admin/adminresources/AdminResources'
import AdminReferences from './admin/adminreferences/AdminReferences'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/learn" element={<LearningPageApp/>} />
      <Route path="/roadmap" element={<RoadMapApp/>} />
      <Route path="/calendar" element={<CcalendarApp/>} />
      <Route path="/test" element={<Test/>} />
      <Route path="/admin/login" element={<AdminLogin/>} />
      <Route path="/admin/dashboard" element={<AdminDashboard/>} />
      <Route path="/admin/students" element={<AdminStudents/>} />
      <Route path="/admin/resources" element={<AdminResources/>} />
      <Route path="/admin/references" element={<AdminReferences/>} />
      {/* <Route path="/user/calendar" element={<UserCalendar/>} /> */}
    </Routes>
    </BrowserRouter>
  )
}
