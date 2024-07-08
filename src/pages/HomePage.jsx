import React from 'react';
import NavBar from '../components/NavBar';
import CARDSpaquetes from '../components/CARDS';

const Home = () => {
  const bodaHomeImg = 'src/assets/Erick WEB/FOTOS MURANO/servicios adicionales/servicios adicionales/home.jpeg';
  const decoracionCARDS = 'src/assets/Erick WEB/decoracion textos.png';
  const aboutUSimg = 'src/assets/Erick WEB/FOTOS MURANO/servicios adicionales/PAGES/aboutUSimg.jpeg';
  const startTodayIMG = 'src/assets/Erick WEB/FOTOS MURANO/pilares.jpeg'
  const img1 = 'src/assets/Erick WEB/FOTOS MURANO/Parties.jpg';
  const img2 = 'src/assets/Erick WEB/FOTOS MURANO/gallery5.jpg';
  const img3 = 'src/assets/Erick WEB/FOTOS MURANO/gallery6.jpg';
  const img4 = 'src/assets/Erick WEB/FOTOS MURANO/gellery1.jpeg';
  const img5 = 'src/assets/Erick WEB/FOTOS MURANO/gallery9.jpg';
  const img6 = 'src/assets/Erick WEB/FOTOS MURANO/gallery8.jpg';
  const img7 = 'src/assets/Erick WEB/FOTOS MURANO/gallery4.jpg';
  const img8 = 'src/assets/Erick WEB/FOTOS MURANO/gallery12.jpeg';
  const img9 = 'src/assets/Erick WEB/FOTOS MURANO/gallery7.jpg';
  const img10 = 'src/assets/Erick WEB/FOTOS MURANO/servicios adicionales/servicios adicionales/gallery11.jpeg';
  const img11 = 'src/assets/Erick WEB/FOTOS MURANO/servicios adicionales/servicios adicionales/gallery10.jpeg';
  const img12 = 'src/assets/Erick WEB/FOTOS MURANO/gellery2.jpeg';


  return (
    <div className='relative h-screen w-auto overflow-y-scroll'>
      <div className='fixed top-0 left-0 right-0 z-50'>
        <NavBar />
      </div>
      <main>
        {/* FOTO PRINCIPAL */}
        <div className='relative font-serif'>
          <img src={bodaHomeImg} className='object-cover w-screen h-screen' alt="boda" />
          <div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
            <h1 className='font-bold tracking-widest text-xl'>LA MEJOR MANERA DE</h1>
            <h2 className='font-bold tracking-widest text-4xl mt-4'>Planear & Producir</h2>
            <h2 className='font-bold tracking-widest text-4xl'>Eventos Excepcionales</h2>
          </div>
        </div>

        {/* CARDS */}
        <div className='w-screen p-28'>
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

        {/* GALERIA DE FOTOS */}
        <div className='w-screen h-screen font-serif p-16'>
          <div className='grid justify-items-center items-center text-center mb-24'>
            <h1 className=''>NUESTRA GALERÍA</h1>
            <img src={decoracionCARDS} className='object-cover h-8 w-auto mt-5 mb-5' alt="DECORACION" />
            <p className='w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
          </div>
          <div className='grid grid-cols-3 gap-2'>
            {/* COLUMNA 1 */}
            <div className="flex flex-col gap-5 h-screen ">
              <img className="w-full -mb-3 aspect-auto object-cover" src={img1} />
              <img className="w-full -mb-3 aspect-video object-cover" src={img4} />
              <img className="w-full -mb-3 aspect-auto object-cover" src={img7} />
              <img className='w-full -mb-3 aspect-square object-cover' src={img10} />
            </div>

            {/* COLUMNA 2 */}
            <div className="flex flex-col gap-5 h-screen ">
              <img className="w-full -mb-3 aspect-videp object-cover" src={img2} />
              <img className="w-full -mb-3 aspect-auto object-cover" src={img5} />
              <img className="w-full -mb-3 aspect-video object-cover" src={img8} />
              <img className='w-full -mb-3 aspect-auto object-cover' src={img11} />
            </div>

            {/* COLUMNA 3 */}
            <div className="flex flex-col gap-5 h-screen ">
              <img className="w-full -mb-3 aspect-auto object-cover" src={img3} />
              <img className="w-full -mb-3 aspect-video object-cover" src={img6} />
              <img className="w-full -mb-3 aspect-square object-cover" src={img9} />
              <img className='w-full -mb-3 aspect-auto object-cover' src={img12} />
            </div>
          </div>
        </div>
        
      </main>
    </div>
  );
}

export default Home;
