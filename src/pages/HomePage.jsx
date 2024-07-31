import React from 'react';
import NavBar from '../components/NavBar';
import CARDSpaquetes from '../components/CARDS';
import Gallery from '../components/galeriaHomePage';
import FooterPage from '../components/footer';

const Home = () => {
  const bodaHomeImg = 'src/assets/Erick WEB/FOTOS MURANO/servicios adicionales/servicios adicionales/home.jpeg';
  const decoracionCARDS = 'src/assets/Erick WEB/decoracion textos.png';
  const aboutUSimg = 'src/assets/Erick WEB/FOTOS MURANO/servicios adicionales/PAGES/aboutUSimg.jpeg';
  const startTodayIMG = 'src/assets/Erick WEB/FOTOS MURANO/pilares.jpeg';

  return (
    <div>
      <div className='relative h-screen w-auto overflow-y-scroll'>
        <div className='fixed top-0 left-0 right-0 z-50'>
          <NavBar />
        </div>
        <main>
          {/* FOTO PRINCIPAL */}
          <div className='relative font-serif'>
            <img src={bodaHomeImg} className='object-cover w-screen h-screen' alt="boda" />
            <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white'>
              <h1 className='font-bold tracking-widest text-xl'>LA MEJOR MANERA DE</h1>
              <h2 className='font-bold tracking-widest text-4xl mt-4'>Planear & Producir</h2>
              <h2 className='font-bold tracking-widest text-4xl'>Eventos Excepcionales</h2>
            </div>
          </div>

          {/* CARDS */}
          <div className='contact w-screen p-28'>
            <div className='grid justify-items-center items-center text-center mb-24 font-serif'>
              <h1>Nuestros servicios</h1>
              <h2>Tu día especial merece un lugar único</h2>
              <img className='object-cover h-8 w-auto mt-5 mb-5' src={decoracionCARDS} alt="DECORACION" />
              <h3 className='w-1/2 text-justify'>
                En Eventos Sofi, nos especializamos en convertir cada evento en una experiencia inolvidable. Somos una empresa dedicada a la renta de mobiliario de alta calidad para todo tipo de eventos, ya sean bodas, cumpleaños, conferencias, fiestas corporativas, o cualquier celebración que imagines. Nuestro objetivo es brindar soluciones integrales y personalizadas para que cada detalle de tu evento sea perfecto.
              </h3>
            </div>
            <CARDSpaquetes />
          </div>

          {/* despues de cards */}
          <div className='bg-[#F1F1F1] w-screen h-1/2 -mt-24 p-28'>
            <div className='grid justify-items-center items-center text-center text-xl font-serif'>
              <p className='mb-5'>Ariana Anderson & Steve Anderson</p>
              <p className='w-1/2 text-center'> Aliquam commodo velit at pretium viverra. Donec sed pulvinar massa. Curabitur sollicitudin nisl et condimentum suscipit. Phasellus lacinia interdum lorem, quis egestas nibh scelerisque vitae.</p>
            </div>
          </div>

          {/* ABOUT US */}
          <div className='flex w-screen h-1/2 gap-10 p-20'>
            <div className='basis-1/2 grid justify-items-center items-center'>
              <div className=''>
                <h1 className='font-serif font-extralight tracking-widest text-2xl text-left'>ABOUT US</h1>
                <h2 className='leading-10 text-3xl text-left tracking-widest mt-5 mb-5'>Sorprender a tus invitados nunca ha sido tan espectacular.</h2>
                <p className='font-serif text-sm text-start'>Nullam suscipit tempor interdum. Aenean magna odio, vulputate eget erat nec, vulputate sagittis libero. Praesent in leo risus. Nunc viverra faucibus mauris nec ultrices. In hac habitasse platea dictumst.</p>
                <div className='mt-10'>
                  <a href="/Conocenos" className='border border-black rounded-md p-2 hover:bg-black hover:border-none hover:text-white hover:transition-all'>Conocenos</a>
                </div>
              </div>
            </div>
            <div className='basis-2/3'>
              <img src={aboutUSimg} alt="ABOUT US" />
            </div>
          </div>

          {/* START TODAY */}
          <div className='relative font-serif'>
            <img src={startTodayIMG} alt="PILARES" className='w-[1462px] h-[388px] object-cover' />
            <div className='absolute inset-60 flex flex-col justify-center items-center text-white'>
              <h2 className='text-xl'>START TODAY</h2>
              <h1 className='text-4xl'>Would you like to live a delightful tailored experience?</h1>
              <div className='mt-10'>
                <a href="#" className='text-white border opacity-45 p-8 pt-1 pb-1 rounded-md border-black bg-black hover:bg-white hover:border-white hover:text-black hover:transition-all'>BOOK NOW</a>
              </div>
            </div>
          </div>

          {/* GALLERY */}
          <div className="grid justify-items-center items-center text-center mt-10">
            <h1 className="">NUESTRA GALERÍA</h1>
            <img className='object-cover h-8 w-auto mt-5 mb-5' src={decoracionCARDS} alt="DECORACION" />
            <p className="w-1/2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
            </p>
          </div>
          <Gallery />
        </main>
        <FooterPage />
      </div>
    </div>
  );
}

export default Home;
