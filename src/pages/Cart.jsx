import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { setDelieveryMethod } from '../redux/cartSlice';
const Cart = () => {
  const delievery = [
    { name: 'Самовывоз', value: 'pickup' },
    { name: 'Доставка до транспортной компании: 500 руб.', value: 'tk' },
    { name: 'Доставка по городу Москва: 500 руб.', value: 'moscow' },
    { name: 'Доставка в Подмосковье (+30Р за км): 500 руб.', value: 'undermoscow' },
  ];
  const items = useSelector((state) => state.cart.items);
  const delieveryMethod = useSelector((state) => state.cart.delieveryMethod);
  const dispatch = useDispatch();

  const onChangeDelivery = (item) => {
    const newValue = item;
    setDelieveryMethod(newValue);
    dispatch(setDelieveryMethod(newValue));
  };
  return (
    <section className="products">
      <div className="products__banner">
        <div className="container">
          <h2 className="products__banner-title">Корзина</h2>
        </div>
      </div>
      <div className="products__nav">
        <div className="container">
          <ul className="products__nav-list">
            <li className="products__list-item products__list-item--active">Главная</li>/
            <li className="products__list-item">Продукция</li>/
            <li className="products__list-item">Картриджи на водной основе</li>/
            <li className="products__list-item">Корзина</li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="drawer">
          <div className="drawer__wrap">
            <div className="drawer__items-wrap card-style">
              {items.length === 0 ? (
                <p className="drawer__empty-text">Корзина пустая</p>
              ) : (
                <div>
                  <div className="drawer__items-top">
                    <p>Продукт</p>
                    <p>Цена</p>
                    <p>Количество</p>
                  </div>
                  {items.map((item) => {
                    return <CartItem key={item.id} {...item} />;
                  })}
                </div>
              )}
            </div>
            {items.length === 0 ? (
              ''
            ) : (
              <div className="drawer__delievery card-style">
                <div className="drawer__delievery-top">
                  <p>Доставка</p>
                </div>
                <hr />
                <div className="drawer__delievery-labeles">
                  {delievery.map((item, index) => {
                    return (
                      <label key={index} className="radio">
                        <input
                          type="radio"
                          name="delivery"
                          value={item.value}
                          checked={delieveryMethod.value === item.value}
                          onChange={() => onChangeDelivery(item)}
                        />
                        <span className="radio__custom"></span>
                        {item.name}
                      </label>
                    );
                  })}
                </div>
                <Link to="/order">
                  <button type="submit" className="drawer__delievery-btn button-style">
                    Перейти к оформлению
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
