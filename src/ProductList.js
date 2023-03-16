import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Products = [
  { id: 1, name: "salt", price: 15 },
  { id: 2, name: "sugar", price: 45 },
  { id: 3, name: "milk", price: 60 },
  { id: 4, name: "onion", price: 30 },
  { id: 5, name: "potato", price: 20 },
];

const ProductList = () => {
  const select = useSelector((state) => state.cartReducer.items);
  console.log("select", select);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_ITEMS", payload: product });
  };

  const handleRemoveItems = (product_id) => {
    dispatch({ type: "REMOVE_ITEMS" , payload: product_id});
  };

  return (
    <>
      <div>
        <ul>
          {Products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => handleAddToCart(product)}>
                Add-TO-CART
              </button>
              <button onClick={() => handleRemoveItems(product.id)}>
                REMOVE-ITEMS
              </button>
            </li>
          ))}
          <br></br>
          <br></br>
          <br></br>
          {select.map((add) => (
            <li>
              {add.name}-${add.price}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ProductList;
