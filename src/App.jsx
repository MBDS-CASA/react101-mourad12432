import { useState } from 'react'
import Navigation from './Navigation'
import Header from './Header'
import MainContent from './MainContent'
import StudentCard from './StudentCard'
import Footer from './Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <Header />
      <MainContent />
      <StudentCard />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Footer />
    </>
  )
}

export default App
