import './App.css'
import Navbar from './components/Navbar'
import routesJson from './data/routes.json'
import { Routes, Route } from 'react-router-dom'
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Navbar title="Lynx3PL" routes={routesJson}/>
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/about-us' element={<AboutUs />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </main>
    </>
  )
}

export default App
