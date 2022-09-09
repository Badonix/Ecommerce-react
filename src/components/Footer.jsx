import logo from "../images/logo.png";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsTelephoneFill,
} from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="nagdi-footeri">
      <div className="top-footer">
        <div className="footer-clm">
          <h3>Working hours</h3>
          <p>Mon-Fri 09:00 - 21:00</p>
          <p>Sat-Sun 11:00 - 18:00</p>
        </div>
        <div className="footer-clm">
          <h3>Contact</h3>
          <div className="phone">
            <BsTelephoneFill />
            <p>555 55 55 55</p>
          </div>
          <div className="emaill">
            <AiOutlineMail />
            <p>badonix2020@proton.me</p>
          </div>
        </div>
        <div className="footer-clm">
          <h3>Socials</h3>
          <a href="https://www.facebook.com/Nick.Danela" target="_blank">
            <BsFacebook />
          </a>
          <a href="https://github.com/Badonix" target="_blank">
            <BsGithub />
          </a>
          <a href="https://instagram.com" target="_blank">
            <BsInstagram />
          </a>
          <a href="https://twitter.com" target="_blank">
            <BsTwitter />
          </a>
        </div>
        <div className="footer-clm">
          <h3>Address</h3>
          <div className="address">
            <FaMapMarkerAlt />
            <p>Tbilisi, Wavwavadze ave N2</p>
          </div>
          <div className="address">
            <FaMapMarkerAlt />
            <p>Batumi, Agmashenbeli ave N12</p>
          </div>
        </div>
      </div>
      <p>© 2022 BADONIX etc.</p>
    </footer>
  );
};
export default Footer;
