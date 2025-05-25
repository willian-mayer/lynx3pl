import './App.css'
import Navbar from './components/Navbar'
import routesJson from './data/routes.json'
import { Routes, Route } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Home from './pages/Home'

import type { Route as AppRoute } from './types/routes'
import Footer from './components/Footer'
import Warehousing from './pages/Warehousing'
import Transloading from './pages/Transloading'
import FulfillmentPage from './pages/Fulfillment'
const routes: AppRoute[] = routesJson

function App() {
  return (
    <>
      <Navbar title="Lynx3PL" routes={routes}/>
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/warehousing' element={<Warehousing />} />
          <Route path='/fulfillment' element={<FulfillmentPage />} />
          <Route path='/transloading' element={<Transloading />} />
          <Route path='/about-us' element={<AboutUs />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </main>
      <Footer links={routes} />
    </>
  )
}

export default App
