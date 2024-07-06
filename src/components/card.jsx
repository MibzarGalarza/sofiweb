import React from 'react';

const Card = ({ image, title, description }) => (
  <a href={title} className="relative overflow-hidden bg-white shadow-lg rounded-lg">
    <img src={image} className="object-cover w-full h-96" alt={title} />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2">{description}</p>
    </div>
  </a>
);

export default Card;