import React from "react";
import "./product.css";
import { useStateValue } from "./stateProvider";

function Product({ id, title, image, price, rating }) {
    const [basket, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type : "ADD_TO_BASKET",
            item : {
                id : id,
                title : title,
                image : image,
                price : price,
                rating : rating,
                quantity : 1
            }
        })
    }
  return (
    <div className="product">
      <div className="productInfo">
        <p>{title}</p>
        <p className="productPrice">
          <strong>{new Intl.NumberFormat('en-IN', {style : 'currency', currency : 'INR'}).format(price)}</strong>
        </p>
        <div className="productRating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button className="addtoBasket" onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;