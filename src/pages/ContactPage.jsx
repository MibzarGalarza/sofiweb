import React from 'react'
import NavBar from '../components/NavBar'
import ContactForm from '../components/ContactForm';
import FooterPage from '../components/footer';


const Contacto = () => {
    const decoracionCARDS = 'src/assets/Erick WEB/decoracion textos.png';
    const eventos = 'src/assets/Erick WEB/FOTOS MURANO/eventos.jpg'

    return (
        <div className='overflow-y-scroll'>
            <div className='relative h-screen w-auto font-serif'>
                <header className='fixed top-0 left-0 right-0 z-50'>
                    <NavBar />
                </header>
                <main>
                    {/* FOTO Y TITULO */}
                    <div className='relative font-serif'>
                        <img src={eventos} className='object-cover w-screen h-[500px]' alt="boda" />
                        <div>
                            <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white'>
                                <h1 className='tracking-widest text-xl font-extralight'>CONTÁCTANOS</h1>
                                <h2 className='font-bold tracking-widest text-4xl mt-4 mb-10'>Planeemos tu evento</h2>
                                <p>Por favor llena la siguiente informacion o llama al 618-160-6935 y haznos saber tus planes.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-screen h-screen -mt-44 bg-white'>
                        <div class="grid relative grid-cols-6 mt-8">
                            <div class="h-screen col-start-2 col-span-4">
                                <div className='bg-white rounded-2xl grid justify-items-center items-center'>
                                    <img src={decoracionCARDS} className='object-cover h-8 w-auto mt-5 mb-5' alt="" />
                                    <ContactForm/>
                                    <img src={decoracionCARDS} className='object-cover h-8 w-auto -mt-28' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </main>
                <FooterPage />
            </div>
        </div>
    )
}

export default Contacto
