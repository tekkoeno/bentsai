import React from 'react';
import iconClose from '../assets/icon-close.svg';

const Error = ({ productError, onClickClose }) => {
  return (
    <div className="error">
      <div className="error__wrap">
        <img onClick={onClickClose} className="error__img" src={iconClose} alt="icon" />
        <div className="error__info">
          <h2 className="error__info-title">Произошла ошибка!</h2>
          <p className="error__info-text">
            {productError
              ? 'Не удалось загрузить товары, повторите попытку позже или свяжитесь с нами!'
              : ''}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
