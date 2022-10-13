import { Link } from "react-router-dom";

function Product() {
  return (
    <section>
      <h1>Product page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A book</Link>
        </li>
        <li>
          <Link to="/products/p2">A dog</Link>
        </li>
        <li>
          <Link to="/products/p3">A lemon</Link>
        </li>
      </ul>
    </section>
  );
}

export default Product;
