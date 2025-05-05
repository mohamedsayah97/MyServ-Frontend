import { Route, Routes } from 'react-router-dom'
import './App.css'
import Addrh from './pages/Addrh'
import Ajoutcand from './pages/ajoutcand'
import Login from './pages/Login'
import Navbar from './pages/Navbar'
import Suivientre from './pages/suivientre'
import Suivirec from './pages/suivirec'

function App() {
 

  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Login/>}/> 
      <Route path='/addrh' element={<Addrh/>}/> 
      <Route path='/suivientretien' element={<Suivientre/>}/> 
      <Route path='/suivirecruteur' element={<Suivirec/>}/> 
      <Route path='/ajoutcandidat' element={<Ajoutcand/>}/> 
      </Routes>
    </>
  )
}

export default App
