import React from 'react';

const CartSummary = ({ cart, onClearCart }) => {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="card shadow-lg p-3 mt-4">
      
      <h3 className="text-center mb-3">Carrito de Compras</h3>

      {cart.length === 0 ? (
        <p className="text-center text-muted">El carrito está vacío.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item) => (
              <li 
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>
                  {item.name} x {item.quantity}
                </span>

                <span className="badge bg-primary rounded-pill">
                  ${item.price * item.quantity}
                </span>
              </li>
            ))}
          </ul>

          <p className="fw-bold">
            Total de artículos: {totalItems}
          </p>

          <p className="fw-bold">
            Total a pagar: ${totalPrice}
          </p>

          <button 
            className="btn btn-danger w-100 mt-2"
            onClick={onClearCart}
          >
            Vaciar Carrito
          </button>
        </>
      )}
    </div>
  );
};

export default CartSummary;
