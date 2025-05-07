import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, price }) => {
  return (
    <div className="products__item-v2 card-style">
      <img
        className="products__item-v2-img card-style"
        src="../img/product_v2-item-img.png"
        alt="product-item"
      />
      <h2 className="products__item-v2-title">{name}</h2>
      <p className="products__item-v2-price">{price} руб.</p>
      <Link to={`/product/${id}`}>
        <button className="products__item-v2-button">Показать</button>
      </Link>
    </div>
  );
};

export default ProductCard;
