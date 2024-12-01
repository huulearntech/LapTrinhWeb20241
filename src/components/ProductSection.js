import React from 'react';

import hanoiImage from '../assets/images/hanoi.webp';
import hoianImage from '../assets/images/hoian.jpg';
import dalatImage from '../assets/images/dalat.jpg';
import saigonImage from '../assets/images/saigon.jpg';
import danangImage from '../assets/images/danang.webp';

const products = [
  {
    id: 1,
    name: 'Ha Noi',
    image: hanoiImage,
    link: '/products/hanoi'
  },
  {
    id: 2,
    name: 'Hoi An',
    image: hoianImage,
    link: '/products/hanoi'
  },
  {
    id: 3,
    name: 'Da Lat',
    image: dalatImage,
    link: '/products/hanoi'
  },
  {
    id: 4,
    name: 'Sai Gon',
    image: saigonImage,
    link: '/products/hanoi'
  },
  {
    id: 5,
    name: 'Da Nang',
    image: danangImage,
    link: '/products/hanoi'
  },
  // Add more products as needed
];

const ProductSection = () => {
  return (
    <section className="px-8 py-12 bg-gradient-to-r from-blue-100 to-blue-300">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800">Explore Our Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <a key={product.id} href={product.link} className="relative rounded-lg overflow-hidden shadow-lg group hover:scale-[1.02] hover:shadow-blue-400" style={{ aspectRatio: '1.618' }}>
            <img src={product.image} alt={product.name} className="w-full h-full object-cover transition duration-300" />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white transition-opacity duration-300">
              <h2 className="text-2xl font-bold">{product.name}</h2>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;