import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { Routes, Route, Navigate } from "react-router-dom";
// import Services from './components/pages/Services';
// import Products from './components/pages/Products';
// import SignUp from './components/pages/SignUp';
// import Contact from './components/pages/Contact';
// import SignupActivtie from './components/pages/SignupActivtie';
// import SignUpForwork from './components/pages/SignUpForwork';
// import KidsInformations from './components/pages/kidsinformations';
// import ProfileManagement from './components/pages/ProfileManagement';
import Login from './components/pages/login';
// import Map from './components/pages/Map';

function App() {
  return (
    <>
 <Navbar />

 <Routes>
  <Route exact path="/home" element={ <Home/> } />
  <Route exact path="/" element={ <Home/> } />
  {/* <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} /> */}
  <Route path="/login" element={<Login />} />
  {/* <Route path="/Employees" element={<AdminEmployeeDashboard />} />
  <Route path="/adminhome" element={<AdminDashboard />} />
  <Route path="/Parents" element={<AdminParentDashboard/>} />
  <Route path="/add-employee" element={<AddEmployee/>} />
  <Route path="/form" element={< AddEnfant />} /> */}
</Routes>
   
    </>
  );
}

export default App;
