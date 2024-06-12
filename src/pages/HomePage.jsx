import React from 'react'
import NavBar from '../components/NavBar'
import CARDSpaquetes from '../components/cards'

const Home = () => {

  const bodaHomeImg = 'src/assets/Erick WEB/FOTOS MURANO/servicios adicionales/servicios adicionales/home.jpeg'
  const decoracionCARDS = 'src/assets/Erick WEB/decoracion textos.png'

  return (
    <div className='grid h-screen w-auto max-h-screen overflow-y-auto'>
      <NavBar/>
      <>
        <main className=''>
          {/* FOTO PRINCIPAL */}
          <div>
            <div className="relative">
            <h1 className='absolute text-red-700 text-7xl top-1/2 left-1/2 transform -translate-x-1/2 translate-y-52'>El erick se la come</h1>
            </div>
            <img src={bodaHomeImg} className='object-cover w-screen' alt="boda" />
          </div>

          {/* CARDS */}
          <div className='h-screen w-screen p-28'>
            <h1>Nuestros servicios</h1>
            <h2>Tu dia especial merece un lugar unico</h2>
            <img className='h-40 w-auto' src={decoracionCARDS} alt="DECORACION" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iste nesciunt quis facilis eum veniam perspiciatis libero natus qui, reprehenderit totam corrupti repellat dicta, quam tempora itaque quo corporis earum!</p>
            <CARDSpaquetes/>
          </div>
        </main>
      </>
    </div>
  )
}

export default Home
