import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const {product,handleAddtoCart}=props;
  const { name, img, seller, price, ratings } =product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings} Stars</p>
      </div>
      <button
        className="btn-cart"
      >
        <p className="btn-text" onClick={()=>handleAddtoCart(product)}>Add to Cart
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </p>
      </button>
    </div>
  );
};

export default Product;
