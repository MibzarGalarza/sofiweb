import React from 'react'
import NavBar from "../components/NavBar"
import mapa from "../components/mapa"

const location = () => {
    return (

    <div className='grid h-screen w-auto max-h-screen overflow-y-scroll'> 
      <NavBar/>
      <>
        <main className='mt-24 h-screen w-screen bg-slate-200'>
            <button className='btn bn bg-red-600'>ok</button>
        </main>
      </>
    </div>
    )
}

export default location
