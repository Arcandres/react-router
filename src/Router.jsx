import { EVENTS } from './consts'
import { useState, useEffect, Children } from 'react'
import { PageNotFound } from './pages/404'
import { match } from 'path-to-regexp'

export function Router({children, routes = [] }) {
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

  let routeParams = {}

  // Add routes from children Component Route
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type

    return name === 'Route' ? props : null
  })

  const routesToUse = routes.concat(routesFromChildren)

  const Page = routesToUse.find(({ path }) => {
    if (path === actualPath) return true

    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(actualPath)
    if(!matched) return false

    routeParams = matched.params
    return true

  })?.Component

  return Page ? <Page routeParams={routeParams} /> : <PageNotFound routeParams={routeParams} />

}