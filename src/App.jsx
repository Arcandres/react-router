import { Router } from './Router'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import SearchPage from './pages/SearchPage'

const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutUs
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {
  return (
    <main>
      <Router routes={routes}/>
    </main>
  )
}

export default App
