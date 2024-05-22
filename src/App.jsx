import { Router } from './Router'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'

const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutUs
  },
]

function App() {
  return (
    <main>
      <Router routes={routes}/>
    </main>
  )
}

export default App
