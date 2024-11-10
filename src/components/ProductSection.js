import React from 'react';

const products = [
  {
    id: 1,
    name: 'Product 1',
    image: 'https://via.placeholder.com/150',
    description: 'This is a great product.',
  },
  {
    id: 2,
    name: 'Product 2',
    image: 'https://via.placeholder.com/150',
    description: 'This is another great product.',
  },
  {
    id: 3,
    name: 'Product 3',
    image: 'https://via.placeholder.com/150',
    description: 'You will love this product.',
  },
  {
    id: 4,
    name: 'Product 4',
    image: 'https://via.placeholder.com/150',
    description: 'This product is very popular.',
  },
  // Add more products as needed
];

const ProductSection = () => {
  return (
    <section className="px-12 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white border rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;

