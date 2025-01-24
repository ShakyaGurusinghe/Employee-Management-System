/* eslint-disable no-unused-vars */
import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/footer';

function App() {
  const [count, setCount] = useState(0)

  return <>
    <Navbar/>
    <h1>Main Content</h1>
    <Footer/>
  </>;
}

export default App;
