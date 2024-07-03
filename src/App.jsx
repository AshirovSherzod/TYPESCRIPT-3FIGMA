import { useState } from 'react'
import Header from './components/layout/header'
import Hero from './components/hero'
import Explore from './components/explore'
import FindJob from './components/findjob'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Header />
      <Hero />
      <Explore />
      <FindJob />
    </main>
  )
}

export default App
