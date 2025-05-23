import './App.css'
import Navbar from './components/Navbar'
import routesJson from './data/routes.json'

function App() {
  return (
    <>
      <Navbar title="Lynx3PL" routes={routesJson}/>
    </>
  )
}

export default App
