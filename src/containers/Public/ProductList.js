import React from "react";
import { ProductItem } from "../../components";

const ProductList = ({ products }) => {
  return (
    <div>
      <div className="bg-gray-100 min-h-[30px] p-5">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-5">Danh Sách Sản Phẩm</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
