import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import headerLogo from '../assets/header-logo.svg';
import cartLogo from '../assets/cart-logo.svg';
const Header = () => {
  const [visible, setVisible] = useState(false);
  const items = useSelector((state) => state.cart.items);
  const count = items.reduce((total, item) => total + item.count, 0);
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrap">
            <Link to="/bentsai" className="header__logo">
              <img src={headerLogo} alt="header-logo" />
            </Link>
            <nav className="header__nav">
              <ul className="header__list">
                <li className="header__list-item">
                  <Link to="/products" className="header__list-link">
                    Продукция
                  </Link>
                </li>
                <li className="header__list-item">
                  <Link to="/payment" className="header__list-link">
                    Оплата
                  </Link>
                </li>
                <li className="header__list-item">
                  <Link to="/delievery" className="header__list-link">
                    Доставка
                  </Link>
                </li>
                <li className="header__list-item">
                  <Link to="/contacts" className="header__list-link">
                    Контакты
                  </Link>
                </li>
              </ul>
              <img
                onClick={() => setVisible((currentValue) => !currentValue)}
                className="header__mobile-menu"
                src="./img/mobile/burger-menu.svg"
                alt="burger-menu"
              />
              <div className="header__cart">
                <Link to="/cart">
                  <img className="header__cart-img" src={cartLogo} alt="cart-logo" />
                  <span className="header__cart-count">{count}</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <div
        style={{
          visibility: visible ? 'visible' : 'hidden',
          minHeight: visible ? '100vh' : '0px',
          padding: visible ? '20px' : '0px 20px',
          transition: 'all 0.3s ease', // можно добавить плавность
        }}
        className={`header__mobile card-style ${visible ? 'menu-visible' : ''}`}>
        <div className="header__mobile-wrap">
          <nav className="header__nav-mobile">
            <ul className="header__list-mobile">
              <li className="header__list-item">Продукция</li>
              <li className="header__list-item">Оплата</li>
              <li className="header__list-item">Доставка</li>
              <li className="header__list-item">Контакты</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
