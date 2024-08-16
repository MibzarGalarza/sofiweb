import React from 'react';
import NavBar from '../components/NavBar';
import GalleryPageComp from '../components/galeriaPageComp';
import FooterPage from '../components/footer';

const GaleriaPage = () => {
    const eventos = './assets/Erick WEB/FOTOS MURANO/eventos.jpg';
    const decoracionCARDS = './assets/Erick WEB/decoracion textos.png';

    return (
        <div className="flex flex-col min-h-screen">
            <header className="z-50">
                <NavBar />
            </header>
            <main className="flex-grow">
                {/* FOTO Y TITULO */}
                <div className="relative">
                    <img src={eventos} className="object-cover w-screen h-[500px]" alt="boda" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
                        <h1 className="font-bold tracking-widest text-4xl">GALERIA</h1>
                        <h2 className="tracking-widest text-lg font-extralight mt-4">EVENTOS EXCEPCIONALES</h2>
                    </div>
                </div>

                {/* TEXTO */}
                <div className="grid justify-items-center bg-[#F1F1F1] w-full text-center text-xl p-28">
                    <p className="w-1/2">
                    Explora nuestra galería y déjate llevar por la esencia de Eventos Sofi. Aquí, cada foto cuenta una historia, capturando los momentos únicos y los detalles que hacen de cada evento algo especial. Desde bodas llenas de magia hasta fiestas inolvidables, nuestras imágenes reflejan el cariño y la dedicación que ponemos en cada celebración. ¡Inspírate con lo que podemos crear juntos!</p>
                    <img className="object-cover h-8 w-auto mt-5 mb-5" src={decoracionCARDS} alt="Decoración" />
                </div>

                {/* GALERIA */}
                <GalleryPageComp />
            </main>

            {/* FOOTER */}
            <FooterPage />
        </div>
    );
}

export default GaleriaPage;
