import { Router } from './Router'
import { Route } from './Route'

import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import SearchPage from './pages/SearchPage'

const routes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {
  return (
    <main>
      <Router routes={routes}>
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={AboutUs} />
      </Router>
    </main>
  )
}

export default App
