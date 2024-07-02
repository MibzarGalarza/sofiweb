import React from 'react';
import NavBar from '../components/NavBar';
import CARDSpaquetes from '../components/CARDS';

const Home = () => {
  const bodaHomeImg = 'src/assets/Erick WEB/FOTOS MURANO/servicios adicionales/servicios adicionales/home.jpeg';
  const decoracionCARDS = 'src/assets/Erick WEB/decoracion textos.png';

  return (
    <div className='relative h-screen w-auto overflow-y-scroll'>
      <div className='fixed top-0 left-0 right-0 z-50'>
        <NavBar />
      </div>
      <main>
        {/* FOTO PRINCIPAL */}
        <div className='relative'>
          <img src={bodaHomeImg} className='object-cover w-screen h-screen' alt="boda" />
          <div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
            <h1 className='font-bold tracking-widest text-xl'>LA MEJOR MANERA DE</h1>
            <h2 className='font-bold tracking-widest text-4xl mt-4'>Planear & Producir</h2>
            <h2 className='font-bold tracking-widest text-4xl'>Eventos Excepcionales</h2>
          </div>
        </div>

        {/* CARDS */}
        <div className=' h-1/2 w-screen p-28 '>
          <div className='grid justify-items-center  items-center text-center'>
            <h1>Nuestros servicios</h1>
            <h2>Tu día especial merece un lugar único</h2>
            <img className='object-cover h-8 w-auto' src={decoracionCARDS} alt="DECORACION" />
            <h3 className='w-1/2 text-justify'>
              En Eventos Sofi, nos especializamos en convertir cada evento en una experiencia inolvidable. Somos una empresa dedicada a la renta de mobiliario de alta calidad para todo tipo de eventos, ya sean bodas, cumpleaños, conferencias, fiestas corporativas, o cualquier celebración que imagines. Nuestro objetivo es brindar soluciones integrales y personalizadas para que cada detalle de tu evento sea perfecto.
            </h3>
          </div>
          <CARDSpaquetes />
        </div>

      </main>
    </div>
  );
}

export default Home;
