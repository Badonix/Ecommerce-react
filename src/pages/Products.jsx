import Item from "../components/Item";
import { useGlobalContext } from "../context";
const Products = () => {
  const { data } = useGlobalContext();
  return (
    <>
      <div className="rdasd">
        <section className="popular-section">
          <h2>All Products</h2>
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
      </div>
    </>
  );
};

export default Products;
