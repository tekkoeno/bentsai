import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, decreaseCount, increaseCount } from '../redux/cartSlice';
const CartItem = ({ id, name, price, count }) => {
  const dispatch = useDispatch();
  return (
    <div className="drawer__item">
      <div className="drawer__item-wrap">
        <div className="drawer__item-info">
          <img src="./img/drawer-img-item.png" alt="drawer" />
          <h2 className="drawer__item-title">{name}</h2>
        </div>
        <p className="drawer__item-price">{price * count} руб.</p>
        <div className="drawer__item-add card__item-info-add">
          <div className="card__item-info-count drawer__item-info-count">
            <span
              onClick={() => dispatch(decreaseCount(id))}
              className="action__button drawer-action__button button-style">
              -
            </span>
            <p>{count} шт</p>
            <span
              onClick={() => dispatch(increaseCount(id))}
              className="action__button drawer-action__button button-style">
              +
            </span>
          </div>
        </div>
      </div>
      <p onClick={() => dispatch(removeFromCart(id))} className="card__item-info-delete">
        Удалить товар
      </p>
    </div>
  );
};

export default CartItem;
