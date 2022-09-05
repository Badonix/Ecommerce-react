import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import heroOneImg from "../images/logo.png";
import Item from "../components/Item";
import { useGlobalContext } from "../context";

const Home = () => {
  const { data } = useGlobalContext();
  return (
    <>
      <section className="hero-1">
        <div className="hero-1-content">
          <h1>Your Text Here!</h1>
          <h2>Subtext Here</h2>
          <button>Shop Now</button>
        </div>
        <img src={heroOneImg} alt="image here" />
      </section>
      <section className="popular-section">
        <h2>Popular Products</h2>
        <div className="popular-items-cont">
          {data.map((item) => {
            return (
              <Item
                key={item.id}
                price={"$" + item.price}
                img={item.image}
                title={item.category}
                id={item.id}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Home;
