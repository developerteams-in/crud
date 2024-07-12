import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Navbar from './components/navbar'
import Home from './components/home'
import Footer from './components/footer'

export function App() {

  return (
  <>
<div>
  <Navbar/>
  <Home/>
  <Footer/>
</div>
  </>
  )
}
