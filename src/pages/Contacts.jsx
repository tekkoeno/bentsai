import React from 'react';

const Contacts = () => {
  return (
    <section className="products">
      <div className="products__banner">
        <div className="container">
          <h2 className="products__banner-title">Контакты</h2>
        </div>
      </div>
      <div className="products__nav">
        <div className="container">
          <ul className="products__nav-list">
            <li className="products__list-item products__list-item--active">Главная</li>/
            <li className="products__list-item">Контакты</li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="contacts">
          <h1 className="contacts__title">Контакты</h1>
          <div className="contacts__wrap">
            <div className="contacts__info">
              <div className="contacts__info-item">
                <h3>Адрес</h3>
                <p>г. Москва, ул. Вавилова 9Ас2</p>
              </div>
              <div className="contacts__info-item">
                <h3>Email:</h3>
                <p>zakaz@bentsai.ru</p>
              </div>
              <div className="contacts__info-item">
                <h3>Телефон</h3>
                <p>+7 (977) 890-20-10</p>
              </div>
              <div className="contacts__info-item">
                <span>
                  Отдел продаж Интернет-магазина <br />
                  (центральный офис, г. Москва, время Московское):
                </span>
              </div>
              <div className="contacts__info-item">
                <h3>Понедельник — Пятница: с 10:00 до 17:00</h3>
              </div>
            </div>
            <iframe
              className="contacts__map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.839777662021!2d37.57499095538769!3d55.69842201357936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54c9c0a2dd623%3A0x364bed66ab642655!2z0L_RgC4gNjAt0LvQtdGC0LjRjyDQntC60YLRj9Cx0YDRjywg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2skg!4v1738433991034!5m2!1sru!2skg"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
