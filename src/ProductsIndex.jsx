/* eslint-disable react/prop-types */
export function Content() {
  const [products, setProducts] = useState([]); // Initialize products as a React state

  const handleIndexProducts = () => {
    console.log("handleIndexProducts");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data); // Update products state with the response data
      successCallback();
    });
  };
}

export function ProductsIndex(props) {
  return (
    <div>
      <h1>All Products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <h2>{product.price}</h2>
          <h2>{product.description}</h2>
          <button onClick={() => props.onShowProduct(product)}>More info</button>
        </div>
      ))}
      ;
    </div>
  );
}
