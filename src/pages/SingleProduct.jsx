import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import placHolder from "../images/placeholder.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
const SingleProduct = () => {
  const [realData, setRealData] = useState([]);
  const [cartArray, setCartArray] = useState([]);
  const { productId } = useParams();
  const [counter, setCounter] = useState(1);
  const { setCartItems, cartItems, cart, setCart } = useGlobalContext();
  const [isDisabled, setIsDisabled] = useState(
    cart.includes(parseInt(productId)) ? true : false
  );
  const fetchData1 = async (url) => {
    try {
      const { data } = await axios.get(url);
      setRealData(data);
    } catch (e) {
      console.log(e.response);
    }
  };
  function increment() {
    if (!isDisabled) {
      setCounter((prevVal) => prevVal + 1);
    }
  }
  function decrement() {
    if (counter != 1 && !isDisabled) {
      setCounter((prevVal) => prevVal - 1);
    }
  }

  function handleAddToCart() {
    if (cart.includes(realData.id)) {
      setIsDisabled(true);
    } else {
      setCartItems((cart) => {
        return [
          ...cart,
          {
            id: realData.id,
            count: counter,
            img: realData.image,
            title: realData.title,
            price: realData.price,
          },
        ];
      });
      setCart((prevVal) => [...prevVal, realData.id]);
      setIsDisabled(true);
    }
  }

  useEffect(() => {
    fetchData1(`https://fakestoreapi.com/products/${productId}`);
  }, []);
  useEffect(() => {
    if (cart.includes(realData.id)) {
      setIsDisabled(true);
    }
  }, []);

  return (
    <section className="section-product">
      <img
        src={realData.length != 0 ? realData.image : placHolder}
        className="single-img"
        alt="zd"
      />
      <div className="single-product-info">
        <h2>{realData.title}</h2>
        <p>${realData.price}</p>
        <h3>{realData.description}</h3>
        <div className="count-btn-cont">
          <button
            disabled={isDisabled}
            className={isDisabled ? "disabled" : "add_to_cart"}
            onClick={handleAddToCart}
          >
            {isDisabled ? "Item is in cart" : "Add to Cart"}
          </button>
          <div className="counter">
            <button className="decrement" onClick={decrement}>
              -
            </button>
            <h5>{counter}</h5>
            <button className="increment" onClick={increment}>
              +
            </button>
          </div>
        </div>

        <Link to="/products">Back to products</Link>
      </div>
    </section>
  );
};

export default SingleProduct;
