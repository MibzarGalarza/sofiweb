import React from 'react';

const Gallery = () => {
    const decoracionCARDS = 'src/assets/Erick WEB/decoracion textos.png';

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
