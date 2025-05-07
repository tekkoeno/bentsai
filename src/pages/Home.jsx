import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import BenefitsItem from '../components/BenefitsItem';

const Home = () => {
  const [banners, setBanners] = useState([]);
  const [benefitItem, setBenefitItem] = useState([]);

  const fetchBenefitsItem = async () => {
    try {
      const { data } = await axios.get('https://dde4c7bcd6cb56a6.mokky.dev/benefits-item');
      setBenefitItem(data);
    } catch (error) {
      alert(error);
    }
  };
  const fetchBanners = async () => {
    try {
      const { data } = await axios.get('https://dde4c7bcd6cb56a6.mokky.dev/banners-slider');
      setBanners(data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchBanners();
    fetchBenefitsItem();
  }, []);
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="main__slider">
            <div className="swiper-container-wrapper">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                slidesPerGroup={1}
                loop={true}
                pagination={{
                  el: '.swiper-pagination',
                  type: 'progressbar',
                  clickable: true,
                }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                className="swiper bannerSwiper">
                {banners.map((item) => {
                  return (
                    <SwiperSlide key={item.id} className="swiper-slide">
                      <div className="slide-content">
                        <img className="banner__swiper-img" src={item.imgUrl} alt="slider-img" />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            <div className="swiper-button-next banner-swiper-button-next"></div>
            <div className="swiper-button-prev banner-swiper-button-prev"></div>
            <div className="swiper-pagination"></div>
          </div>

          <div className="title__block">
            <h1 className="main__title title title-decoration-left">
              Каплеструйные маркираторы Bentsai <span> — область применения</span>
            </h1>
          </div>

          <p className="main__text">
            Каплеструйные маркираторы Bentsai предназначены для нанесения информации (маркировки) на
            различные виды поверхности, в том числе дерево, бумага, пластик, металл, стекло, гибкая
            упаковка и т.д. Позволяют наносить текстовую, цифровую и графическую информацию
            (DATAMATRIX, QR-код, штрих код (EAN-13 и т.д.). Используется технология бесконтактной
            печати TIJ позволяющая сократить расход краски в десятки раз.
          </p>
          <div className="main__cards">
            <div className="main__cards--top">
              <div className="main__card-item card-style">
                <img src="./img/main-cards/main-card-icon-1.svg" alt="main-card-icon" />
                <h3 className="card__item-title">Супер- и гипермаркеты</h3>
              </div>
              <div className="main__card-item card-style">
                <img src="./img/main-cards/main-card-icon-2.svg" alt="main-card-icon" />
                <h3 className="card__item-title">Точки розничных продаж</h3>
              </div>
              <div className="main__card-item card-style">
                <img src="./img/main-cards/main-card-icon-3.svg" alt="main-card-icon" />
                <h3 className="card__item-title">Строительные и ремонтнные компании</h3>
              </div>
            </div>
            <div className="main__cards--center">
              <div className="main__card-item card-style">
                <img src="./img/main-cards/main-card-icon-4.svg" alt="main-card-icon" />
                <h3 className="card__item-title">Рынки продуктовые и промышленные</h3>
              </div>
              <div className="main__card-item card-style">
                <img src="./img/main-cards/main-card-icon-5.svg" alt="main-card-icon" />
                <h3 className="card__item-title">Почтовые, курьерские службы</h3>
              </div>
            </div>
            <div className="main__cards--bottom">
              <div className="main__card-item card-style">
                <img src="./img/main-cards/main-card-icon-6.svg" alt="main-card-icon" />
                <h3 className="card__item-title">Промышленные товары</h3>
              </div>
              <div className="main__card-item card-style">
                <img src="./img/main-cards/main-card-icon-7.svg" alt="main-card-icon" />
                <h3 className="card__item-title">Архивы</h3>
              </div>
              <div className="main__card-item card-style">
                <img src="./img/main-cards/main-card-icon-8.svg" alt="main-card-icon" />
                <h3 className="card__item-title">Супер- и гипермаркеты</h3>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="benefits__work">
        <div className="container">
          <div className="title__block">
            <h2 className="benefits__work-title title title-decoration-center">
              Преимущества работы с нами
            </h2>
          </div>

          <div className="benefits__work-wrap">
            <div className="benefits__work-item card-style">
              <img src="./img/benefits/benefit-logo-1.svg" alt="number-logo" />
              <p>Официальные дистрибьюторы Bentsai</p>
            </div>
            <div className="benefits__work-item card-style">
              <img src="./img/benefits/benefit-logo-2.svg" alt="number-logo" />
              <p>Прямые контакты с производителем продукции Bentsai</p>
            </div>
            <div className="benefits__work-item card-style">
              <img src="./img/benefits/benefit-logo-3.svg" alt="number-logo" />
              <p>В наличии на наших складах с доставкой по России</p>
            </div>
            <div className="benefits__work-item card-style">
              <img src="./img/benefits/benefit-logo-4.svg" alt="number-logo" />
              <p>Весь товар русифицирован</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="container">
          <div className="title__block">
            <h1 className="benefits__title title title-decoration-center">Преимущества</h1>
          </div>

          <div className="benefits__wrap">
            <div className="benefits__item card-style">
              <img src="./img/benefits/benefit-logo-5.svg" alt="" />
              <h2>Производство печатающих головок</h2>
              <p>
                Бенцай — производитель печатающих головок для термоструйной печати параллельно с HP,
                Funai и IUT.
              </p>
            </div>
            <div className="benefits__item card-style">
              <img src="./img/benefits/benefit-logo-6.svg" alt="" />
              <h2>Рецептура и наполнение чернил</h2>
              <p>
                Рецептура и наполнение чернил, которые наилучшим образом соответствуют печатающим
                головкам
              </p>
            </div>
            <div className="benefits__item card-style">
              <img src="./img/benefits/benefit-logo-7.svg" alt="" />
              <h2>Интеграция программного и аппаратного обеспечения</h2>
              <p>
                Разработка программного и аппаратного обеспечения струйных кодирующих принтеров,
                охватывающая весь спектр.
              </p>
            </div>
          </div>
          <div className="benefits__product">
            {benefitItem.map((item, index) => {
              return <BenefitsItem key={index} {...item} />;
            })}
          </div>
        </div>
      </section>

      <blockquote className="blockquote">
        <div className="container">
          <div className="blockquote__wrap">
            <div className="blockquote__info">
              <div className="title__block">
                <h2 className="blockquote__title title title-decoration-left title-decoration-left-mobile">
                  <span>Помочь</span> с выбором?
                </h2>
              </div>

              <p className="blockquote__text">
                Мы знаем все об каплеструйных маркираторах Bentsai! Подскажем какой маркиратор
                оптимально подойдет именно вам. Подробно расскажем о его возможностях и принципе
                работы.
              </p>
              <button className="blockquote__button button-style">Проконсультироваться</button>
            </div>
            <img src="./img/blockquote-img.png" alt="blockquoute-img" />
          </div>
        </div>
      </blockquote>

      <section className="about">
        <div className="container">
          <div className="title__block">
            <h2 className="about__title title title-decoration-center">
              <span>еще немного</span> о нас
            </h2>
          </div>

          <div className="about__wrap">
            <div className="about__item card-style">
              <img className="about__item-img" src="./img/about-icon-1.png" alt="about-icon" />
              <p className="about__item-text">
                Каждая полученная нами партия тщательно проверяется, чтобы исключить брак.
              </p>
            </div>
            <div className="about__item card-style">
              <img className="about__item-img" src="./img/about-icon-2.png" alt="about-icon" />
              <p className="about__item-text">
                Мы работаем только с юр. лицами, все цены уже включают ндс 20%
              </p>
            </div>
            <div className="about__item card-style">
              <img className="about__item-img" src="./img/about-icon-3.png" alt="about-icon" />
              <p className="about__item-text">
                Предоставляем возможность протестировать маркиратор перед покупкой.
              </p>
            </div>
            <div className="about__item card-style">
              <img className="about__item-img" src="./img/about-icon-4.png" alt="about-icon" />
              <p className="about__item-text">При покупке 2х и более штук предоставляем скидки.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="map">
        <div className="container">
          <div className="title__block">
            <h2 className="map__title title title-decoration-center">
              <span>Быстрая доставка</span> по всей России
            </h2>
          </div>
          <iframe
            className="map__item"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.839777662021!2d37.57499095538769!3d55.69842201357936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54c9c0a2dd623%3A0x364bed66ab642655!2z0L_RgC4gNjAt0LvQtdGC0LjRjyDQntC60YLRj9Cx0YDRjywg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2skg!4v1738433991034!5m2!1sru!2skg"
            style={{ border: 'none' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </>
  );
};

export default Home;
