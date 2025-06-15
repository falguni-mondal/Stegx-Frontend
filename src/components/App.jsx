import React from 'react'
import Navbar from './Navbar/Navbar'
import Routing from './utils/Routing'

const App = () => {
  return (
    <div className='main-container w-full relative'>
      <Navbar />
      <main className='w-full min-h-screen'>
        <Routing />
      </main>
    </div>
  )
}

export default App