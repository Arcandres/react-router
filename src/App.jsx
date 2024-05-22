import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

const EVENT = 'navigateTo'

function HomePage() {

  return (
    <>
      <h1>Home</h1>
      <p>Homepage example</p>
      <button onClick={() => navigate('/about')}>About us</button>
    </>
  )
}

function AboutUs() {
  return (
    <>
      <h1>About Us</h1>
      <p>My name is Andres and this is a simple react-router clone from scratch.</p>
      <button onClick={() => navigate('/')}>Back to home</button>
    </>
  )
}

function navigate (path) {
  window.history.pushState({}, '', path)

  const navigationEvent = new Event(EVENT);
  window.dispatchEvent(navigationEvent)
}

function App() {
  const [actualPath, setActualPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setActualPath(window.location.pathname)
    }

    window.addEventListener(EVENT, onLocationChange)

    return () => {
      window.removeEventListener(EVENT, onLocationChange)
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
