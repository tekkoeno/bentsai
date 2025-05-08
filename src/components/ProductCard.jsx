import React from 'react';
import { Link } from 'react-router-dom';
import productImg from '../assets/products-item-img.png';

const ProductCard = ({ id, name, price }) => {
  return (
    <div className="products__item-v2 card-style">
      <img className="products__item-v2-img card-style" src={productImg} alt="product-item" />
      <h2 className="products__item-v2-title">{name}</h2>
      <p className="products__item-v2-price">{price} руб.</p>
      <Link to={`/product/${id}`}>
        <button className="products__item-v2-button">Показать</button>
      </Link>
    </div>
  );
};

export default ProductCard;
