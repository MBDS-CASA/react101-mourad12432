import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'
import './App.css'

function App() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
