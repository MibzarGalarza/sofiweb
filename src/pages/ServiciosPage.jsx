import React from 'react';
import NavBar from '../components/NavBar';
import CardsServicios from '../components/CardsServicios';

const ServiciosPage = () => {
    const decoracionCARDS = 'src/assets/Erick WEB/decoracion textos.png';

    return (
        <div>
            <NavBar />
            <div className='w-screen mt-28 -pb'>
                <div className='grid justify-items-center items-center text-center font-serif'>
                    <h1 className='uppercase'>Nuestros servicios</h1>
                    <h1 className='text-2xl w-2/3 font-bold tracking-widest '>DESCUBRE COMO NOSOTROS VAMOS A PLANEAR TU PROXIMO EVENTO</h1>
                    <img className='object-cover h-8 w-auto mt-5 mb-5' src={decoracionCARDS} alt="DECORACION" />
                    <h3 className='w-2/3 text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com.
                    </h3>
                </div>
            </div>
            <CardsServicios />
        </div>
    );
};

export default ServiciosPage;
