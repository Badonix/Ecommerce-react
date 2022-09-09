import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import heroOneImg from "../images/logo.png";
import Item from "../components/Item";
import { useGlobalContext } from "../context";
import { IoMdShirt } from "react-icons/io";
import { GiRing } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";
import Footer from "../components/Footer";
const Home = () => {
  const { data } = useGlobalContext();
  return (
    <>
      <section className="hero-1">
        <div className="hero-1-content">
          <h1>Your Text Here!</h1>
          <h2>Subtext Here</h2>
          <Link to="/products">
            <button>Shop Now</button>
          </Link>
        </div>
        <img src={heroOneImg} alt="image here" />
      </section>
      <section className="popular-section">
        <h2>Popular Products</h2>
        <div className="popular-items-cont">
          {data.slice(0, 6).map((item) => {
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
      <section className="testimonials">
        <div className="testimonial">
          <IoMdShirt className="clothes" />
          <h2>Clothes</h2>
        </div>
        <div className="testimonial">
          <FcElectronics />
          <h2>Electronics</h2>
        </div>
        <div className="testimonial">
          <GiRing className="jewerly" />
          <h2>Jewerly</h2>
        </div>
      </section>
      <section className="popular-section recent-section">
        <h2>New Products</h2>
        <div className="popular-items-cont">
          {data.slice(7, 13).map((item) => {
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
      <section className="newsletter">
        <h2>Subscribe To Our NewsLetter!</h2>
        <div className="form">
          <input type="email" placeholder="Enter your Email!" />
          <button>Subscribe!</button>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Home;
