import React from 'react'
import NavBar from '../components/NavBar'
import FooterPage from '../components/footer';


const EventosEspeciales = () => {
    const eventos2 = 'src/assets/Erick WEB/FOTOS MURANO/eventos2.jpg';
    const flecha = 'src/assets/Erick WEB/arrow web.png';
    const decoracionCARDS = 'src/assets/Erick WEB/decoracion textos.png';
    const img7 = 'src/assets/Erick WEB/FOTOS MURANO/gallery4.jpg';
    const eventos = 'src/assets/Erick WEB/FOTOS MURANO/eventos.jpg'

    return (
        <div>
            <div className='relative h-screen w-auto overflow-y-scroll font-serif'>
                <header className='fixed top-0 left-0 right-0 z-50'>
                    <NavBar />
                </header>
                <main>
                    {/* FOTO Y TITULO */}
                    <div className='relative font-serif'>
                        <img src={eventos} className='object-cover w-screen h-[500px]' alt="boda" />
                        <div>
                            <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white'>
                                <h1 className='tracking-widest text-xl font-extralight'>NUESTROS SERVICIOS</h1>
                                <h2 className='font-bold tracking-widest text-4xl mt-4'>Eventos Especiales</h2>
                                <a className='flex mt-10 hover:bg-red-400 hover:opacity-75 hover:text-xl hover:text-white hover:p-5 hover:rounded-xl' href="/Servicios">
                                    <img className='rotate-180 w-10 object-contain' src={flecha} alt="" />
                                    <h2 className='uppercase font-bold'>Servicios</h2>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* TEXTO */}
                    <div className='grid justify-items-center bg-[#F1F1F1] w-screen h-3/5 text-center text-xl font-serif p-28'>
                        <p className='w-1/2 text-center'> Desde eventos corporativos hasta reuniones familiares, diseñamos y ejecutamos eventos especiales con profesionalismo y creatividad. Nos adaptamos a tus necesidades para ofrecer experiencias únicas y bien organizadas, que dejarán una impresión duradera en tus invitados.</p>
                        <img className='object-cover h-8 w-auto mt-5 mb-5' src={decoracionCARDS} alt="" />
                    </div>
                    {/* FOTO Y TEXTO */}
                    <div className='flex justify-center items-center p-16 gap-5'>
                        <img className='w-2/5 aspect-video object-cover' src={eventos2} alt="" />
                        <p className='flex w-2/5 text-justify'>En Eventos Sofi, nos dedicamos a hacer que tus eventos especiales sean realmente memorables. Ya sea un evento corporativo, una reunión familiar o cualquier otra ocasión importante, nos ocupamos de cada detalle con profesionalismo y creatividad. Nuestro objetivo es que disfrutes de un evento perfectamente organizado, sin estrés, y que cada momento sea único y significativo para ti y tus invitados. Al elegirnos, garantizas una experiencia excepcional, diseñada a medida para reflejar tus necesidades y deseos. ¡Confía en nosotros para hacer que tu evento especial sea todo un éxito!






</p>
                    </div>
                    {/* PORTAFOLIO */}
                    <div className='grid p-20'>
                        <h1 className='mb-10 flex justify-start'>PORTAFOLIO</h1>
                        <div className='flex justify-between'>
                            <div className='flex justify-between items-center mb-10'>
                                <h1 className='text-2xl font-bold'>Nuestros Eventos Especiales</h1>
                            </div>
                            <div className=''>
                                <a href='/Portafolio' className='border-2 border-black p-2 rounded-l hover:bg-black hover:border-none hover:text-white hover:transition-all'>VER PORTAFOLIO</a>
                            </div>
                        </div>
                        {/* PORTAFOLIO FOTOS */}
                        <div className='grid grid-cols-3 gap-5'>
                            <div className='grid justify-items-start'>
                                <img className='object-cover w-80 aspect-square' src={img7} alt="" />
                                <div className='mt-3 grid justify-items-start'>
                                    <h2>PABLO CABRERA</h2>
                                    <h3>24 de Febrero del 2020</h3>
                                </div>
                            </div>
                            {/* <div className='grid w-fit justify-items-start'>
                                <img className='object-cover w-80 aspect-video' src={bodaHomeImg} alt="" />
                                <div className='mt-3 grid justify-items-start'>
                                    <h2>GUSTAVO + CRISTINA</h2>
                                    <h3>25 de mayo del 2024</h3>
                                </div>
                            </div> */}
                        </div>

                    </div>
                </main>
                <FooterPage />

            </div>
        </div>
    )
}

export default EventosEspeciales
