import { useParams } from "react-router";

const ProducstDetail = () => {
  const params = useParams();
  return (
    <section>
      <h1>Prodcut Detail</h1>
      <p>{params.productId}</p>
    </section>
  );
};
export default ProducstDetail;
