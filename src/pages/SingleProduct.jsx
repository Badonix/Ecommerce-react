import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import placHolder from "../images/placeholder.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
const SingleProduct = () => {
  const [realData, setRealData] = useState([]);
  const { productId } = useParams();
  const fetchData1 = async (url) => {
    try {
      const { data } = await axios.get(url);
      setRealData(data);
    } catch (e) {
      console.log(e.response);
    }
  };
  useEffect(() => {
    fetchData1(`https://fakestoreapi.com/products/${productId}`);
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
        <Link to="/products">Back to products</Link>
      </div>
    </section>
  );
};

export default SingleProduct;
