import React from 'react';
import Card from './card'; 

const CARDSpaquetes = () => {
  const cardsData = [
    {
      image: './assets/Erick WEB/FOTOS MURANO/servicios adicionales/servicios adicionales/home.jpeg',
      title: 'Bodas',
      description: 'Discover'
    },
    {
      image: './assets/Erick WEB/FOTOS MURANO/Parties.jpg',
      title: 'Fiestas',
      description: 'Discover'
    },
    {
      image: './assets/Erick WEB/FOTOS MURANO/eventos.jpg',
      title: 'Especiales',
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