export default function AboutUs({ navigateTo }) {
  return (
    <>
      <h1>About Us</h1>
      <p>My name is Andres and this is a simple react-router clone from scratch.</p>
      <button onClick={() => navigateTo('/')}>Back to home</button>
    </>
  )
}