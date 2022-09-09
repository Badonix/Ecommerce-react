import React from "react";
import { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import Footer from "../components/Footer";
function Cart() {
  const { cartItems, setCartItems, setCart } = useGlobalContext();
  const [filteredCart, setFilteredCart] = useState(cartItems);
  const [totalPrice, setTotalPrice] = useState(0);
  function removeItem(id) {
    let filtr = cartItems.filter((it) => it.id !== id);
    setFilteredCart(filtr);
    setCartItems(filtr);
    setCart(filtr);
  }

  useEffect(() => {
    var total = 0;
    filteredCart.forEach((item) => {
      total += Math.round(item.price) * parseInt(item.count);
    });

    setTotalPrice(Math.round(total));
  }, [filteredCart]);
  return (
    <>
      {filteredCart.length > 0 ? (
        <>
          {filteredCart.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <div className="cart-left">
                  <img src={item.img} />
                  <h3>{item.title}</h3>
                </div>
                <div className="right_cart">
                  <div className="counter">
                    <p>Amount: {item.count}</p>
                  </div>
                  <div className="cart-price-amount-cont">
                    <div className="pricee">
                      <h5>Price: </h5>
                      <p className="total-price">
                        {Math.round(item.price * item.count)}$
                      </p>
                    </div>
                  </div>
                  <button
                    className="delete-from-cart"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
          <div className="total-amount">
            <h2 style={{ marginRight: "15px" }}>Total Price: </h2>
            <p>${totalPrice}</p>
          </div>
        </>
      ) : (
        <h1 className="no-items">No Items In Cart :(</h1>
      )}
    </>
  );
}

export default Cart;
