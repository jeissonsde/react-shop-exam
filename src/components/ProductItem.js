import React from 'react';

const ProductItem = ({ product, onAddToCart }) => {

  const handleClick = () => {
    onAddToCart(product);
  };

  return (
    <div className="card shadow-sm mb-3" style={{ maxWidth: "320px" }}>
      
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>

        <p className="card-text">
          Precio: <strong>${product.price}</strong>
        </p>

        <button 
          className="btn btn-primary w-100"
          onClick={handleClick}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ProductItem;


