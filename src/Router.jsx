import { EVENTS } from './consts'
import { useState, useEffect } from 'react'

export function Router({ routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
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

  const Page = routes.find(({ path }) => path === actualPath)?.Component

  return Page ? <Page /> : <DefaultComponent />

}