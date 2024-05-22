import { lazy } from 'react'

import { Router } from './Router'
import { Route } from './Route'

import { Suspense } from 'react'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const SearchPage = lazy(() => import('./pages/SearchPage'))

const routes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {
  return (
    <main>
      <Suspense fallback={ null }>
        <Router routes={routes}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={AboutUs} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
