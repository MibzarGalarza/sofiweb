import React from 'react';
import NavBar from '../components/NavBar';
import PdfDownloader from '../components/PDFdownloader';
import FooterPage from '../components/footer';


const Mobiliario = () => {
    const decoracionCARDS = 'src/assets/Erick WEB/decoracion textos.png';
    const eventos = 'src/assets/Erick WEB/FOTOS MURANO/eventos.jpg';
    const pdfUrl = 'public/catalogos/Sillas.pdf';
    const pdfUrl2 = 'public/catalogos/Catálogo de productos sobre joyería elegante beige y gris.pdf';
    // const workerUrl = '/pdf.worker.js'; // Ruta al worker de PDF.js descargado

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
                                <h1 className='font-bold tracking-widest text-4xl mt-4'>Nuestro Mobiliario</h1>
                            </div>
                        </div>
                    </div>
                    {/* TEXTO */}
                    <div className='grid justify-items-center bg-[#F1F1F1] w-screen h-3/5 text-center text-xl font-serif p-28'>
                        <p className='w-1/2 text-center'>Tu día especial merece mobiliario único</p>
                        <img className='object-cover h-8 w-auto mt-5 mb-5' src={decoracionCARDS} alt="" />
                    </div>
                    {/* <PdfViewer pdfUrl={pdfUrl} /> */}
                    <div className='flex items-center justify-center gap-10 h-fit w-screen p-20'>
                        <PdfDownloader
                            pdfUrl={pdfUrl}
                            pdfUrl2={pdfUrl2}
                            buttonText1="VER O DESCARGAR SILLAS"
                            buttonText2="VER O DESCARGAR PLATOS"
                        />
                    </div>
                </main>
                <FooterPage />
            </div>
        </div>
    );
};

export default Mobiliario
