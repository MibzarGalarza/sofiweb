import React from 'react';
import NavBar from '../components/NavBar';
import CardsServicios from '../components/CardsServicios';
import FooterPage from '../components/footer';


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
                    Ofrecemos una variedad de servicios para hacer de tu evento un momento inolvidable. Desde bodas únicas y cuidadosamente diseñadas, hasta fiestas memorables para cualquier ocasión. También nos especializamos en eventos especiales, ya sean corporativos o familiares, asegurando que cada detalle refleje tu visión con profesionalismo y creatividad. ¡Déjanos ayudarte a crear recuerdos que perduren!
                    </h3>
                </div>
            </div>
            <CardsServicios />
            <FooterPage />
        </div>
    );
};

export default ServiciosPage;
