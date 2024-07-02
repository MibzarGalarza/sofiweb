import React from 'react';
import Card from './card'; // Asegúrate de que la ruta de importación sea correcta

const CARDSpaquetes = () => {
  const cardsData = [
    {
      image: 'src/assets/Erick WEB/FOTOS MURANO/servicios adicionales/servicios adicionales/home.jpeg',
      title: 'Weddings',
      description: 'Discover'
    },
    {
      image: 'src/assets/Erick WEB/FOTOS MURANO/servicios adicionales/servicios adicionales/home.jpeg',
      title: 'Parties',
      description: 'Discover'
    },
    {
      image: 'src/assets/Erick WEB/FOTOS MURANO/servicios adicionales/servicios adicionales/home.jpeg',
      title: 'Special Events',
      description: 'Discover'
    }
  ];

  return (
    <div className='bg-red-400 w-fit p-10'>
      <h1 className='text-center text-white text-2xl mb-6'>Estas son las cards</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {cardsData.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
}

export default CARDSpaquetes;