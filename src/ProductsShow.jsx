/* eslint-disable react/prop-types */
export function ProductsShow(props) {
  return (
    <div>
      <h1>Product Information</h1>
      <p> Name: {props.product.name}</p>
      <p> Price: {props.product.price}</p>
      <p> Description: {props.product.description}</p>
    </div>
  );
}
