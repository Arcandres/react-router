import { Link } from '../components/Link'

export function PageNotFound() {
  return (
    <>
      <h1>404 Not found</h1>
      <img src="https://miro.medium.com/v2/format:webp/0*ZjYSm_q36J4KChdn" alt="This is fine, image meme" />
      <Link to='/'>Go back</Link>
    </>
  )
}