import React from 'react'
import NavBar from '../components/NavBar'
import FooterPage from '../components/footer';


const locationPage = () => {
    const img1 = './assets/Erick WEB/FOTOS MURANO/Parties.jpg';

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
                                <h2 className='font-bold tracking-widest text-4xl mt-4'>VISÍTANOS</h2>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center p-10'>
                        <iframe className='w-[600px] h-[450px] border-4 shadow-inner' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.0853484943605!2d-104.63392192457995!3d24.028055278481975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bb7be95d24e51%3A0xbb9314753bcde4e3!2sEventos%20Sofi!5e0!3m2!1ses!2smx!4v1723707357741!5m2!1ses!2smx" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                </main>
                
                <FooterPage />
            </div>
        </div>
    )
}

export default locationPage
