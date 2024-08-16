import React from 'react';

const Gallery = () => {
    const decoracionCARDS = './assets/Erick WEB/decoracion textos.png';

    const img1 = './assets/Erick WEB/FOTOS MURANO/Parties.jpg';
    const img2 = './assets/Erick WEB/FOTOS MURANO/gallery5.jpg';
    const img3 = './assets/Erick WEB/FOTOS MURANO/gallery6.jpg';
    const img4 = './assets/Erick WEB/FOTOS MURANO/gellery1.jpeg';
    const img5 = './assets/Erick WEB/FOTOS MURANO/gallery9.jpg';
    const img6 = './assets/Erick WEB/FOTOS MURANO/gallery8.jpg';
    const img7 = './assets/Erick WEB/FOTOS MURANO/gallery4.jpg';
    const img8 = './assets/Erick WEB/FOTOS MURANO/gallery12.jpeg';
    const img9 = './assets/Erick WEB/FOTOS MURANO/gallery7.jpg';
    const img10 = './assets/Erick WEB/FOTOS MURANO/servicios adicionales/servicios adicionales/gallery11.jpeg';
    const img11 = './assets/Erick WEB/FOTOS MURANO/servicios adicionales/servicios adicionales/gallery10.jpeg';
    const img12 = './assets/Erick WEB/FOTOS MURANO/gellery2.jpeg';

    return (
        <div className="w-screen font-serif p-16">
            <div className="grid grid-cols-3 gap-2">
                <div className="flex flex-col gap-5">
                    <img className="w-full -mb-3 aspect-auto object-cover" src={img1} />
                    <img className="w-full -mb-3 aspect-video object-cover" src={img4} />
                    <img className="w-full -mb-3 aspect-auto object-cover" src={img7} />
                    <img className='w-full -mb-3 aspect-square object-cover' src={img10} />
                </div>
                <div className="flex flex-col gap-5">
                    <img className="w-full -mb-3 aspect-video object-cover" src={img2} />
                    <img className="w-full -mb-3 aspect-auto object-cover" src={img5} />
                    <img className="w-full -mb-3 aspect-video object-cover" src={img8} />
                    <img className='w-full -mb-3 aspect-auto object-cover' src={img11} />
                </div>
                <div className="flex flex-col gap-5">
                    <img className="w-full -mb-3 aspect-auto object-cover" src={img3} />
                    <img className="w-full -mb-3 aspect-video object-cover" src={img6} />
                    <img className="w-full -mb-3 aspect-square object-cover" src={img9} />
                    <img className='w-full -mb-3 aspect-auto object-cover' src={img12} />
                </div>
            </div>
        </div>
    );
}

export default Gallery;