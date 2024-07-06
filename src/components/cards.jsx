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
    <div className='w-fit p-10 mt-10'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {cardsData.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
}

export default CARDSpaquetes;