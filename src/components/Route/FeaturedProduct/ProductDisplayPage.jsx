import React, { useEffect } from "react";

const ProductDisplayPage = () => {
  // Sample product data
  const product = {
    name: "Example Product",
    price: "$19.99",
    description: "This is a sample product description.",
    imageUrl:
      "https://img.freepik.com/free-vector/gift-card-template_23-2147503047.jpg?w=2000",
  };

  return (
    <div className="product-display">
      <div className="text-white">
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDisplayPage;
