import React, { useEffect } from 'react';
import iconComplete from '../assets/complete-order.svg';
import SoundSucces from '../assets/payment_succes.mp3';

const OrderComplete = () => {
  const playSound = () => {
    const audio = new Audio(SoundSucces); // Укажите путь к вашему аудиофайлу
    audio.play().catch((error) => {
      console.error('Ошибка воспроизведения звука:', error);
    });
  };
  useEffect(() => {
    playSound();
  }, []);
  return (
    <div className="order-complete">
      <div className="order-complete__wrap">
        <img src={iconComplete} alt="" />
        <h2 className="order-complete__title">Заказ успешно был оформлен!</h2>
      </div>
    </div>
  );
};

export default OrderComplete;
