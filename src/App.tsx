import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { ReservedAndSound } from './pages/ReservedAndSold'
import { Employees } from './pages/Employees'
import {AllVehicles} from './pages/AllVehicles'

export function App (){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/ReservedAndSound" element={<ReservedAndSound />} />
      <Route path="/Employees" element={<Employees />} />
      <Route path="/AllVehicles" element={<AllVehicles />} />
    </Routes>
    </BrowserRouter>
  )
}

