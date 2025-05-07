import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increaseCount, decreaseCount } from '../redux/cartSlice';
import ProductCard from './ProductCard';
const ProductItem = () => {
  const { id } = useParams();
  const [productsSlider, setProductsSlider] = useState([]);
  const [product, setProduct] = useState(null);
  const [localCount, setLocalCount] = useState(1);
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(`https://dde4c7bcd6cb56a6.mokky.dev/products/${id}`);
      setProduct(data);
    } catch (error) {
      alert(error);
    }
  };
  const fetchProductsSlider = async () => {
    try {
      const { data } = await axios.get('https://dde4c7bcd6cb56a6.mokky.dev/products');
      setProductsSlider(data);
    } catch (error) {
      alert(error);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addToCart({
          product: product,
          count: localCount,
        }),
      );
    }
  };
  const handleIncreaseCount = () => {
    setLocalCount((prev) => prev + 1);
  };
  const handleDecreaseCount = () => {
    setLocalCount((prev) => (prev > 1 ? prev - 1 : 1));
  };
  useEffect(() => {
    fetchProduct();
    fetchProductsSlider();
  }, [id]);

  if (!product) return <p>Загрузка...</p>;
  return (
    <section className="products">
      <div className="products__banner">
        <div className="container">
          <h2 className="products__banner-title">Продукция</h2>
        </div>
      </div>
      <div className="products__nav">
        <div className="container">
          <ul className="products__nav-list">
            <li className="products__list-item products__list-item--active">Главная</li>/
            <li className="products__list-item">Продукция</li>/
            <li className="products__list-item">Картриджи на водной основе</li>/
            <li className="products__list-item">
              Картридж EB21C для маркиратора Bentsai B30/B40/B80 [Синий, на водной основе]
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="card__wrap">
            <div className="card__item">
              <img
                className="card__item-img card-style"
                src="../img/card-item-img.png"
                alt="card-item-img"
              />
              <div className="card__item-info">
                <h2 className="card__item-info-title">{product.name}</h2>
                <div className="card__item-info-text">
                  <p>Данный картридж обладает следующими отличительным характеристиками:</p>
                  <ul>
                    {product.properties.map((item) => {
                      return <li>{item}</li>;
                    })}
                  </ul>
                  <p>Материалы для печати: {product.materials}</p>
                  <p>{product.sertificate}</p>
                </div>
                <div className="card__item-info-price">{product.price} руб.</div>
                <div className="card__item-info-add">
                  <button onClick={handleAddToCart} className="card__item-info-btn button-style">
                    Добавить в корзину
                  </button>
                  <div className="card__item-info-count">
                    <span onClick={handleDecreaseCount} className="action__button button-style">
                      -
                    </span>
                    <p>{localCount} шт</p>
                    <span onClick={handleIncreaseCount} className="action__button button-style">
                      +
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <img className="card__underline" src="../img/underline.svg" alt="underline" />
            <div className="card__description">
              <h3 className="card__description-title">Описание</h3>
              <p className="card__description-text">{product.descr}</p>
            </div>
            <img className="card__underline" src="../img/underline.svg" alt="underline" />
            <div className="card__slider">
              <h2 className="card__slider-title">Смотрите также</h2>
              <div className="card__slider-wrap">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={20}
                  slidesPerView={3}
                  slidesPerGroup={1}
                  loop={true}
                  pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                  }}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1400: {
                      slidesPerView: 3,
                    },
                  }}
                  className="swiper productSwiper">
                  {productsSlider.map((item) => {
                    return (
                      <SwiperSlide key={item.id}>
                        <ProductCard {...item} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>

                <div className="swiper-button-next product-swiper-button-next"></div>
                <div className="swiper-button-prev product-swiper-button-prev"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductItem;
