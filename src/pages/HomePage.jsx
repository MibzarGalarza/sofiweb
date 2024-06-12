import React from 'react'
import Navbar from '../components/NavBar'

const Home = () => {
  return (
    <div className='grid grid-cols-1 bg-gray-700 h-screen w-screen'>
      <Navbar />
      <>
        <div className="bg-red-400 h-fit w-fit">
          <h1 className=''>Esto es una referencia</h1>
        </div>
      </>
    </div>
  )
}

export default Home
