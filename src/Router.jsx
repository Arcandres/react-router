import { EVENTS } from './consts'
import { useState, useEffect } from 'react'
import { PageNotFound } from './pages/404'

export function Router({ routes = [] }) {
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

  return Page ? <Page /> : <PageNotFound />

}