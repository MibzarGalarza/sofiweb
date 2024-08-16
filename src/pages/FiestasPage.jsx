import React from 'react'
import NavBar from '../components/NavBar'
import FooterPage from '../components/footer';


const FiestasPage = () => {
    const img1 = 'src/assets/Erick WEB/FOTOS MURANO/Parties.jpg';
    const flecha = 'src/assets/Erick WEB/arrow web.png';
    const decoracionCARDS = 'src/assets/Erick WEB/decoracion textos.png';
    const PosadaPIZZA = 'src/assets/Erick WEB/FOTOS MURANO/PosadaPIZZA.jpg';
    const IMGfiesta = 'src/assets/Erick WEB/FOTOS MURANO/FiestasIMG.jpg'

    return (
        <div>
            <div className='relative h-screen w-auto overflow-y-scroll font-serif'>
                <header className='fixed top-0 left-0 right-0 z-50'>
                    <NavBar />
                </header>
                <main>
                    {/* FOTO Y TITULO */}
                    <div className='relative font-serif'>
                        <img src={img1} className='object-cover w-screen h-[500px]' alt="boda" />
                        <div>
                            <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white'>
                                <h1 className='tracking-widest text-xl font-extralight'>NUESTROS SERVICIOS</h1>
                                <h2 className='font-bold tracking-widest text-4xl mt-4'>Fiestas</h2>
                                <a className='flex mt-10 hover:bg-red-400 hover:opacity-75 hover:text-xl hover:text-white hover:p-5 hover:rounded-xl' href="/Servicios">
                                    <img className='rotate-180 w-10 object-contain' src={flecha} alt="" />
                                    <h2 className='uppercase font-bold'>Servicios</h2>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* TEXTO */}
                    <div className='grid justify-items-center bg-[#F1F1F1] w-screen h-3/5 text-center text-xl font-serif p-28'>
                        <p className='w-1/2 text-center'> Ya sea un cumpleaños, aniversario, o cualquier motivo para celebrar, organizamos fiestas inolvidables que capturan la esencia de tu ocasión. Nos ocupamos de todo, desde la temática hasta la ambientación, para que tú solo te preocupes por disfrutar.</p>
                        <img className='object-cover h-8 w-auto mt-5 mb-5' src={decoracionCARDS} alt="" />
                    </div>
                    {/* FOTO Y TEXTO */}
                    <div className='flex justify-center items-center p-16 gap-5'>
                        <img className='w-2/5 aspect-video object-cover' src={IMGfiesta} alt="" />
                        <p className='flex w-2/5 text-justify'>En Eventos Sofi, hacemos que tus fiestas sean inolvidables. Nos especializamos en crear celebraciones únicas, cuidando cada detalle para que refleje tu personalidad y estilo. Desde la planificación hasta la ejecución, nos encargamos de todo, permitiéndote disfrutar al máximo de tu evento sin estrés. Al elegirnos, garantizas una fiesta bien organizada, llena de diversión y momentos especiales que tus invitados recordarán siempre. ¡Haz de tu próxima celebración un evento extraordinario con Eventos Sofi!</p>
                    </div>
                    {/* PORTAFOLIO */}
                    <div className='grid p-20'>
                        <h1 className='mb-10 flex justify-start'>PORTAFOLIO</h1>
                        <div className='flex justify-between'>
                            <div className='flex justify-between items-center mb-10'>
                                <h1 className='text-2xl font-bold'>Nuestras Fiestas</h1>
                            </div>
                            <div className=''>
                                <a href='/Portafolio' className='border-2 border-black p-2 rounded-l hover:bg-black hover:border-none hover:text-white hover:transition-all'>VER PORTAFOLIO</a>
                            </div>
                        </div>
                        {/* PORTAFOLIO FOTOS */}
                        <div className='grid grid-cols-3 gap-5'>
                            <div className='grid justify-items-start'>
                                <img className='object-cover w-80 aspect-video' src={PosadaPIZZA} alt="" />
                                <div className='mt-3 grid justify-items-start'>
                                    <h2>POSADA PIZZA HUT</h2>
                                    <h3>25 de Diciembre del 2022</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
                <FooterPage />
            </div>
        </div>
    )
}

export default FiestasPage
