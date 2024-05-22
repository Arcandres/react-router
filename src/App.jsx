import { useState, useEffect } from 'react'
import { EVENTS } from './consts'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import './App.css'

function App() {
  const [actualPath, setActualPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setActualPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.pushState, onLocationChange)
    window.addEventListener(EVENTS.popState, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.pushState, onLocationChange)
      window.addEventListener(EVENTS.popState, onLocationChange)
    }
    
  }, [])

  return (
    <main>
      {actualPath === '/' && <HomePage />}
      {actualPath === '/about' && <AboutUs />}
    </main>
  )
}

export default App
