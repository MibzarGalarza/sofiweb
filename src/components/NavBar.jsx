import React from 'react';
import { useHistory } from 'react-router-dom';

const NavBar = () => {
  const logoSOFI = "./assets/Erick WEB/logosofi.png";
  const history = useHistory();

  return (
    <header className='absolute top-0 flex justify-center items-center p-5 h-24 bg-opacity-15 bg-[#D9D9D9] w-screen'>
      <nav className='flex items-center space-x-4 text-black text-xl font-serif'>
        <a className='bg-white bg-opacity-40 p-2 text-base rounded-2xl' onClick={() => history.push('/Servicios')}>SERVICIOS</a>
        <a className='bg-white bg-opacity-40 p-2 text-base rounded-2xl' onClick={() => history.push('/Portafolio')}>PORTAFOLIO</a>
        <a className='bg-white bg-opacity-40 p-2 text-base rounded-2xl' onClick={() => history.push('/Galeria')}>GALERIA</a>
        <a onClick={() => history.push('/')} className=''>
          <img className='h-20 w-auto' src={logoSOFI} alt="LOGOTIPO" />
        </a>
        <a className='bg-white bg-opacity-40 p-2 text-base rounded-2xl' onClick={() => history.push('/Mobiliario')}>MOBILIARIO</a>
        <a className='bg-white bg-opacity-40 p-2 text-base rounded-2xl' onClick={() => history.push('/Contacto')}>CONTACTO</a>
        <a className='bg-white bg-opacity-40 p-2 text-base rounded-2xl' onClick={() => history.push('/Ubicacion')}>VISÍTANOS</a>
      </nav>
    </header>
  );
};

export default NavBar;
