import React, { Component } from 'react';
import ProductItem from './ProductItem';
import CartSummary from './CartSummary';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: 'Laptop', price: 800 },
        { id: 2, name: 'Audífonos', price: 50 },
        { id: 3, name: 'Teclado', price: 30 },
        { id: 4, name: 'Mouse', price: 20 },
      ],
      cart: []
    };
  }

  // hijo -> padre
  handleAddToCart = (product) => {
    this.setState((prevState) => {
      const existingItem = prevState.cart.find(
        (item) => item.id === product.id
      );

      let updatedCart;

      if (existingItem) {
        updatedCart = prevState.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [
          ...prevState.cart,
          { ...product, quantity: 1 }
        ];
      }

      return { cart: updatedCart };
    });
  };

  handleClearCart = () => {
    this.setState({ cart: [] });
  };

  render() {
    const { products, cart } = this.state;

    return (
      <div className="container mt-4">

        <h1 className="text-center mb-4">Tienda React</h1>

        <h2 className="mb-3">Productos</h2>

        {/* GRID DE PRODUCTOS */}
        <div className="row">
          {products.map((product) => (
            <div className="col-md-3" key={product.id}>
              <ProductItem
                product={product}
                onAddToCart={this.handleAddToCart}
              />
            </div>
          ))}
        </div>

        <hr className="my-4" />

        {/* CARRITO */}
        <CartSummary cart={cart} onClearCart={this.handleClearCart} />

      </div>
    );
  }
}

export default ProductList;
