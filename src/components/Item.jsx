import { Link } from "react-router-dom";
const Item = ({ img, title, price, id }) => {
  return (
    <article className="item">
      <Link to={`/products/${id}`}>
        <img className="item-img" src={img} />
      </Link>
      <footer>
        <div className="item-desc">
          <h3>{title}</h3>
          <h4>{price}</h4>
        </div>
        <Link to={`/products/${id}`}>
          <button>View</button>
        </Link>
      </footer>
    </article>
  );
};
export default Item;
