import React from 'react'
import NavBar from '../components/NavBar'
import Gallery from '../components/galeriaHomePage';
import GalleryPageComp from '../components/galeriaPageComp';

const GaleriaPage = () => {
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
                                <h1 className='font-bold tracking-widest text-4xl'>GALERIA</h1>
                                <h2 className='tracking-widest text-lg font-extralight mt-4'>EVENTOS EXCEPCIONALES</h2>
                            </div>
                        </div>
                    </div>
                    {/* TEXTO */}
                    <div className='grid justify-items-center bg-[#F1F1F1] w-screen h-3/5 text-center text-xl font-serif p-28'>
                        <p className='w-1/2 text-center'> Aliquam commodo velit at pretium viverra. Donec sed pulvinar massa. Curabitur sollicitudin nisl et condimentum suscipit. Phasellus lacinia interdum lorem, quis egestas nibh scelerisque vitae.</p>
                        <img className='object-cover h-8 w-auto mt-5 mb-5' src={decoracionCARDS} alt="" />
                    </div>
                    <GalleryPageComp/>

                </main>
            </div>
        </div>
    )
}

export default GaleriaPage
