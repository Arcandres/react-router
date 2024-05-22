export default function HomePage({ navigateTo }) {

  return (
    <>
      <h1>Home</h1>
      <p>Homepage example</p>
      <button onClick={() => navigateTo('/about')}>About us</button>
    </>
  )
}