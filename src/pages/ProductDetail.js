import { useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();

  return (
    <section>
      <h1>Product detail</h1>
      <div>{params.productId}</div>
    </section>
  );
}

export default ProductDetail;
