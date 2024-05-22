import { useState } from 'react'
import './App.css'

function HomePage() {

  return (
    <>
      <h1>Home</h1>
      <p>Homepage example</p>
      <a href="/about">About us</a>
    </>
  )
}

function AboutUs() {
  return (
    <>
      <h1>About Us</h1>
      <p>My name is Andres and this is a simple react-router clone from scratch.</p>
      <a href="/">Back to home</a>
    </>
  )
}

function App() {
  return (
    <main>
      <HomePage />
      <AboutUs />
    </main>
  )
}

export default App
