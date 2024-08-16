import React from 'react';

const NavBar = () => {
  const logoSOFI = new URL('./assets/Erick WEB/logosofi.png', import.meta.env.BASE_URL).href;

  return (
    <header className='absolute top-0 flex justify-center items-center p-5 h-24 bg-opacity-15 bg-[#D9D9D9] w-screen'>
      <nav className='flex items-center space-x-4 text-black text-xl font-serif'>
        <a className='bg-white bg-opacity-40 p-2 text-base rounded-2xl' href={`${import.meta.env.BASE_URL}/Servicios`}>SERVICIOS</a>
        <a className='bg-white bg-opacity-40 p-2 text-base rounded-2xl' href={`${import.meta.env.BASE_URL}/Portafolio`}>PORTAFOLIO</a>
        <a className='bg-white bg-opacity-40 p-2 text-base rounded-2xl' href={`${import.meta.env.BASE_URL}/Galeria`}>GALERIA</a>
        <a href={`${import.meta.env.BASE_URL}/`} className=''>
          <img className='h-20 w-auto' src={logoSOFI} alt="LOGOTIPO" />
        </a>
        <a className='bg-white bg-opacity-40 p-2 text-base rounded-2xl' href={`${import.meta.env.BASE_URL}/Mobiliario`}>MOBILIARIO</a>
        <a className='bg-white bg-opacity-40 p-2 text-base rounded-2xl' href={`${import.meta.env.BASE_URL}/Contacto`}>CONTACTO</a>
        <a className='bg-white bg-opacity-40 p-2 text-base rounded-2xl' href={`${import.meta.env.BASE_URL}/Ubicacion`}>VISÍTANOS</a>
      </nav>
    </header>
  );
};

export default NavBar;


