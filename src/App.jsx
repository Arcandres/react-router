import { useState, useEffect } from 'react'
import { EVENTS } from './consts'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import './App.css'

function navigateTo (path) {
  window.history.pushState({}, '', path)

  const navigationEvent = new Event(EVENTS.pushState);
  window.dispatchEvent(navigationEvent)
}

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
      {actualPath === '/' && <HomePage navigateTo={navigateTo}/>}
      {actualPath === '/about' && <AboutUs navigateTo={navigateTo} />}
    </main>
  )
}

export default App
