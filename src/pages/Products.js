import { Link } from "react-router-dom";
import styles from "./Products.module.css";

const Products = () => {
  return (
    <section>
      <h1>The Products </h1>
      <ul className={styles.products}>
        <li>
          <Link to="/products/books">Books</Link>
        </li>
        <li>
          <Link to="/products/phones">Mobile Phones</Link>
        </li>
        <li>
          <Link to="/products/toys">Toys</Link>
        </li>
        <li>
          <Link to="/products/grocery">Grocery</Link>
        </li>
        <li>
          <Link to="/products/tvs">TVs</Link>
        </li>
      </ul>
    </section>
  );
};
export default Products;
