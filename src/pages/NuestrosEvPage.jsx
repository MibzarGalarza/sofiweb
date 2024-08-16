import React from 'react';
import NavBar from '../components/NavBar';
import FooterPage from '../components/footer';



const NuestrosEventos = () => {
    const decoracionCARDS = './assets/Erick WEB/decoracion textos.png';
    const bodaHomeImg = './assets/Erick WEB/FOTOS MURANO/servicios adicionales/servicios adicionales/home.jpeg';
    const img7 = './assets/Erick WEB/FOTOS MURANO/gallery4.jpg';
    const PosadaPIZZA = './assets/Erick WEB/FOTOS MURANO/PosadaPIZZA.jpg';


    return (
        <div>
            <div className='relative h-screen w-auto overflow-y-scroll font-serif'>
                <header className='fixed top-0 left-0 right-0 z-50'>
                    <NavBar />
                </header>
                <main>
                    <div className='grid justify-items-center items-center mt-28'>
                        <h1 className='font-bold tracking-widest text-4xl mt-4'>Nuestros Eventos</h1>
                        <img className='object-cover h-8 w-auto mt-5 mb-5' src={decoracionCARDS} alt="" />
                    </div>
                    <div className='grid p-20'>
                        {/* PORTAFOLIO FOTOS */}
                        <div className='grid grid-cols-3 gap-5'>
                            <div className='grid justify-items-start'>
                                <img className='object-cover w-80 aspect-video' src={bodaHomeImg} alt="" />
                                <div className='mt-3 grid justify-items-start'>
                                    <h2>GUSTAVO + CRISTINA</h2>
                                    <h3>25 de mayo del 2024</h3>
                                </div>
                            </div>
                            
                            <div className='grid justify-items-start'>
                                <img className='object-cover w-80 aspect-video' src={PosadaPIZZA} alt="" />
                                <div className='mt-3 grid justify-items-start'>
                                    <h2>POSADA PIZZA HUT</h2>
                                    <h3>25 de Diciembre del 2022</h3>
                                </div>
                            </div>
                            <div className='grid justify-items-start'>
                                <img className='object-cover w-80 aspect-video' src={img7} alt="" />
                                <div className='mt-3 grid justify-items-start'>
                                    <h2>PABLO CABRERA</h2>
                                    <h3>24 de Febrero del 2020</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <FooterPage />
            </div>
        </div>
    );
};

export default NuestrosEventos
