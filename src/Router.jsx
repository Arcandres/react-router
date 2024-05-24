import { useState, useEffect, Children } from 'react'
import { match } from 'path-to-regexp'

import { EVENTS } from './consts'
import { getCurrentPath } from './utils'

import { PageNotFound } from './pages/404'

export function Router({children, routes = [] }) {
  const [actualPath, setActualPath] = useState(getCurrentPath())
  
  useEffect(() => {
    const onLocationChange = () => {
      setActualPath(getCurrentPath())
    }

    // Custom event to load component based on a path
    window.addEventListener(EVENTS.pushState, onLocationChange)
    window.addEventListener(EVENTS.popState, onLocationChange)

    return () => {
      // Cleaning
      window.removeEventListener(EVENTS.pushState, onLocationChange)
      window.addEventListener(EVENTS.popState, onLocationChange)
    }

  }, [])

  let routeParams = {}

  // Add routes from children components
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type

    return name === 'Route' ? props : null
  })

  const routesToUse = routes.concat(routesFromChildren)
                            .filter(Boolean) // Filter boolean to avoid undefined 
  
  const Page = routesToUse.find(({ path }) => {
    // First route to match
    if (path === actualPath) return true

    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(actualPath)
    if(!matched) return false

    routeParams = matched.params
    return true

  })?.Component // If there is a match, let's get the Component from that path

  return Page ? <Page routeParams={routeParams} /> : <PageNotFound routeParams={routeParams} />

}