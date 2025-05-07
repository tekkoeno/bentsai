import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrap">
          <div className="footer__top">
            <div className="footer__top-item">
              <h3 className="footer__top-item-title">Прямые поставки в РФ из Китая</h3>
              <p className="footer__top-item-text">
                Наша компания продает только оригинальную продукцию китайского производителя Zhuhai
                Bentsai Printing Technology Co.,Ltd. Поставляем товар только юридическим лицами и
                индивидуальным предпринимателями с полным пакетом бухгалтерских документов.
              </p>
            </div>
            <div className="footer__top-item">
              <h3 className="footer__top-item-title">Время работы</h3>
              <p className="footer__top-item-text">
                Отдела продаж Интернет-магазина (центральный офис, г. Москва, время Московское):
              </p>
              <ul className="footer__top-item-list">
                <li>
                  <span>Пн — Пт:</span>с 10:00 до 17:00
                </li>
                <li>
                  <span>Сб-Вс:</span>Закрыто
                </li>
              </ul>
            </div>
            <div className="footer__top-item">
              <h3 className="footer__top-item-title">Контакты</h3>
              <p className="footer__top-item-info">
                <b>Адрес:</b> г. Москва, ул. Вавилова 9Ас2
              </p>
              <p className="footer__top-item-info">
                <b>Email:</b> zakaz@bentsai.ru
              </p>
              <p className="footer__top-item-info">
                <b>Телефон:</b> +7(977)890-20-10
              </p>
            </div>
          </div>
          <div className="footer__bottom">
            <h2 className="footer__bottom-logo">Bentsai 2021</h2>
            <nav className="footer__nav">
              <ul className="footer__nav-list">
                <li className="footer__list-item">
                  <Link to="/products">Продукция</Link>
                </li>
                <li className="footer__list-item">
                  <Link to="/payment">Оплата</Link>
                </li>
                <li className="footer__list-item">
                  <Link to="/delievery">Доставка</Link>
                </li>
                <li className="footer__list-item">
                  <Link to="/contacts">Контакты</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
