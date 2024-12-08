import React from "react";

const ProductItem = ({ product }) => {
  const handleAddToCart = () => {
    alert(`Đã thêm "${product.name}" vào giỏ hàng!`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-medium text-gray-800 mb-2">{product.name}</h3>
      <p className="text-blue-600 font-semibold text-sm mb-4">
        {product.price.toLocaleString()} VND
      </p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Thêm vào giỏ hàng
      </button>
    </div>
  );
};

export default ProductItem;
