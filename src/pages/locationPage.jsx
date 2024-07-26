import React from 'react'
import NavBar from '../components/NavBar'

const locationPage = () => {
    const img1 = 'src/assets/Erick WEB/FOTOS MURANO/Parties.jpg';

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
                        <iframe className='w-[600px] h-[450px] border-4 shadow-inner' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5152.026848732072!2d-104.60530224439184!3d24.06513813615278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bb6fa986e319d%3A0x420e602ef8de1607!2sMurano%20Salon!5e0!3m2!1ses!2smx!4v1721198080217!5m2!1ses!2smx" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                </main>
            </div>
        </div>
    )
}

export default locationPage
