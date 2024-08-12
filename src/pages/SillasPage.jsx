import React from 'react';
import NavBar from '../components/NavBar';
import FooterPage from '../components/footer';

const Mobiliario = () => {
    const decoracionCARDS = 'src/assets/Erick WEB/decoracion textos.png';
    const eventos = 'src/assets/Erick WEB/FOTOS MURANO/eventos.jpg';
    const pdfUrl = '/catalogos/Sillas.pdf';
    const pdfUrl2 = '/catalogos/Catálogo de productos sobre joyería elegante beige y gris.pdf';

    return (
        <div>
            <div className='relative h-auto w-auto font-serif'>
                <header className='fixed top-0 left-0 right-0 z-50'>
                    <NavBar />
                </header>
                <main className='pt-20'>
                    {/* FOTO Y TITULO */}
                    <div className='relative font-serif'>
                        <img src={eventos} className='object-cover w-screen h-[500px]' alt="boda" />
                        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white'>
                            <h1 className='font-bold tracking-widest text-4xl mt-4'>Nuestro Mobiliario</h1>
                        </div>
                    </div>
                    {/* TEXTO */}
                    <div className='grid justify-items-center bg-[#F1F1F1] w-screen h-auto text-center text-xl font-serif p-28'>
                        <p className='w-1/2 text-center'>Tu día especial merece mobiliario único</p>
                        <img className='object-cover h-8 w-auto mt-5 mb-5' src={decoracionCARDS} alt="" />
                    </div>
                    {/* PDF VIEWER */}
                    <h1 className='font-thin text-5xl'>SILLAS</h1>
                    <div className='flex items-center justify-center h-screen w-screen p-20'>
                        <iframe
                            src={pdfUrl}
                            width="100%"
                            height="600px"
                            style={{ border: 'none' }}
                            title="PDF Viewer"
                        />
                    </div>
                    <div className='w-screen h-24'></div>
                    <h1 className='font-thin text-5xl'>PLATOS BASE</h1>
                    <div className='flex items-center justify-center h-screen w-screen p-20'>
                        <iframe
                            src={pdfUrl2}
                            width="100%"
                            height="600px"
                            style={{ border: 'none' }}
                            title="PDF Viewer"
                        />
                    </div>
                </main>
                <FooterPage />
            </div>
        </div>
    );
};

export default Mobiliario;
