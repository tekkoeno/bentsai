import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import OrderComplete from '../components/OrderComplete';
import { clearCart } from '../redux/cartSlice';

const Order = () => {
  const items = useSelector((state) => state.cart.items);
  const delievery = useSelector((state) => state.cart.delieveryMethod);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [orderCompelete, setOrderComplete] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    mail: '',
    inn: '',
    location: '',
    comment: '',
  });

  const handleInputLength =
    formData.name.length < 1 ||
    formData.number.length < 1 ||
    formData.mail.length < 1 ||
    formData.location.length < 1 ||
    formData.inn.length < 1;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onOrderClick = () => {
    setOrderComplete(true);
    document.body.style.overflowY = 'hidden';
    dispatch(clearCart());
    setTimeout(() => {
      navigate('/bentsai');
      document.body.style.overflowY = 'visible';
    }, 4500);
  };

  return (
    <section className="products">
      {orderCompelete && <OrderComplete />}
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
            <li className="products__list-item">Корзина</li>/
            <li className="products__list-item">Оформление заказа</li>
          </ul>
        </div>
      </div>
      <div className="container">
        {!items.length ? (
          <div className="order__empty card-style">
            <p className="drawer__empty-text">Корзина пустая</p>
          </div>
        ) : (
          <div className="order">
            <div className="order__title">
              <span>Оформление</span> заказа
            </div>
            <div className="order__wrap">
              <div className="order__inputs card-style">
                <div
                  className={
                    !formData.name.length ? 'order__input-item input-warning' : 'order__input-item'
                  }>
                  <h3 className="order__input-title">ФИО</h3>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Введите ваше имя, фамилию и отчество"
                  />
                  {!formData.name && (
                    <p className="input-warning__text">
                      Введите ваше ФИО (Пример: Иван Иванович Иван)
                    </p>
                  )}
                </div>
                <div className="order__input-item-duo">
                  <div
                    className={
                      !formData.number.length
                        ? 'order__input-item input-warning'
                        : 'order__input-item'
                    }>
                    <h3 className="order__input-title">Номер телефона</h3>
                    <input
                      name="number"
                      value={formData.number}
                      onChange={handleInputChange}
                      type="number"
                      placeholder="Введите ваш номер телефона"
                    />
                    {!formData.number && (
                      <p class="input-warning__text">Введите ваш номер телефона</p>
                    )}
                  </div>
                  <div
                    className={
                      !formData.mail ? 'order__input-item input-warning' : 'order__input-item'
                    }>
                    <h3 className="order__input-title">E-mail</h3>
                    <input
                      name="mail"
                      value={formData.mail}
                      onChange={handleInputChange}
                      type="email"
                      placeholder="Введите вашу почту"
                    />
                    {!formData.mail && <p class="input-warning__text">Введите вашу почту</p>}
                  </div>
                </div>
                <div
                  className={
                    !formData.inn ? 'order__input-item input-warning' : 'order__input-item'
                  }>
                  <h3 className="order__input-title">ИНН</h3>
                  <input
                    name="inn"
                    value={formData.inn}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Введите ИНН организации или ИП для выставления счета"
                  />
                  {!formData.inn && <p class="input-warning__text">Введите ваше ИНН</p>}
                </div>
                <div
                  className={
                    !formData.location ? 'order__input-item input-warning' : 'order__input-item'
                  }>
                  <h3 className="order__input-title">Адрес доставки</h3>
                  <input
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Введите ваш адрес доставки"
                  />
                  {!formData.location && (
                    <p class="input-warning__text">Введите ваш адрес доставки</p>
                  )}
                </div>
                <div className="order__input-item">
                  <h3 className="order__input-title">Комментарий</h3>
                  <input
                    name="comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Напишите сюда свой комментарий..."
                  />
                </div>
              </div>
              <div className="drawer__delievery card-style">
                <div className="drawer__delievery-top">
                  <p>Детали заказа</p>
                </div>
                <hr />
                <div className="details__order-wrap">
                  {items.map((item) => {
                    return (
                      <div key={item.id} className="details__order-item">
                        <img src="./img/drawer-img-item.png" alt="" />
                        <h3>
                          {item.name}.{' '}
                          <span style={{ color: '#0166b4' }}>Кол-во: {item.count}</span>
                        </h3>
                      </div>
                    );
                  })}
                </div>
                <hr />
                <div className="drawer__delievery-labeles">
                  <p>
                    Выбранный способ доставки: <span>{delievery.name}</span>
                  </p>
                </div>
                <hr />
                <p className="order__details-rights">
                  Ваши личные данные будут использоваться для обработки ваших заказов, упрощения
                  вашей работы с сайтом и для других целей, описанных в нашей{' '}
                  <span>privacy policy</span>.
                </p>
                <button
                  onClick={onOrderClick}
                  disabled={handleInputLength}
                  className="order__details-btn button-style">
                  Оформить заказ
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Order;
