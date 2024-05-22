import { describe, it, expect, beforeEach, vi} from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { Router } from './Router'
import { getCurrentPath } from './utils'

vi.mock('./utils', () => ({
  getCurrentPath: vi.fn()
}))

describe('Router', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('should render wihtout problems', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })
  
  it('should render 404 if route dont match', () => {
    render(<Router routes={[{path: '/hello'}]} />)
    expect(screen.getByText('404 Not found')).toBeTruthy()
  })

  it('should render the component of the first route that matches', () => {
    getCurrentPath.mockReturnValue('/about')

    const routes = [
      {
        path: '/path1',
        Component: null
      },
      {
        path: '/path2',
        Component: null
      },
      {
        path: '/about',
        Component: () => <h1>About Us</h1>
      }
    ]

    render(<Router routes={routes} />)
    expect(screen.getByText('About Us')).toBeTruthy()
  })
})