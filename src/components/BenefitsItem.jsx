import React from 'react';
import { Link } from 'react-router-dom';

const BenefitsItem = ({
  id,
  name,
  materials_1_item,
  materials_2_item,
  materials_3_item,
  materials_4_item,
  materials_text,
  properties_1_title,
  properties_1_text,
  properties_2_title,
  properties_2_text,
  properties_3_title,
  properties_3_text,
  properties_4_title,
  properties_4_text,
  properties_5_title,
  properties_5_text,
  properties_6_title,
  properties_6_text,
}) => {
  return (
    <div className="benefits__product-item">
      <div className="benefits__product-img-block">
        <img
          className="benefits__product-img"
          src="./img/benefits/benefit-product-1.png"
          alt="benefit-product1"
        />
        <div className="product__item-materials product__item-materials--mobile">
          <h2 className="item__materials-title">Материалы:</h2>
          <p className="item__materials-text">{materials_text}</p>
          <div className="item__materials-list">
            <p>
              <img src="./img/benefits/benefit-material-icon-1.svg" alt="material-icon" />{' '}
              {materials_1_item},
            </p>
            <p>
              <img src="./img/benefits/benefit-material-icon-2.svg" alt="material-icon" />{' '}
              {materials_2_item}
            </p>
            <p>
              <img src="./img/benefits/benefit-material-icon-3.svg" alt="material-icon" />
              {materials_3_item},
            </p>
            <p>
              <img src="./img/benefits/benefit-material-icon-4.svg" alt="material-icon" />
              {materials_4_item}
            </p>
          </div>
        </div>
      </div>
      <div className="product__item-info">
        <h2 className="product__item-title">{name}</h2>
        <div className="product__item-feature">
          <div className="item__feature-block">
            <h2 className="item__feature-title">
              <img src="./img/benefits/benefit-feature-icon-1.svg" alt="benefit-feature-icon-1" />
              {properties_1_title}
            </h2>
            <p className="item__feature-text">{properties_1_text}</p>
          </div>
          <div className="item__feature-block">
            <h2 className="item__feature-title">
              <img src="./img/benefits/benefit-feature-icon-2.svg" alt="benefit-feature-icon-1" />
              {properties_2_title}
            </h2>
            <p className="item__feature-text">{properties_2_text}</p>
          </div>
          <div className="item__feature-block">
            <h2 className="item__feature-title">
              <img src="./img/benefits/benefit-feature-icon-3.svg" alt="benefit-feature-icon-1" />
              {properties_3_title}
            </h2>
            <p className="item__feature-text">{properties_3_text}</p>
          </div>
          <div className="item__feature-block">
            <h2 className="item__feature-title">
              <img src="./img/benefits/benefit-feature-icon-4.svg" alt="benefit-feature-icon-1" />
              {properties_4_title}
            </h2>
            <p className="item__feature-text">{properties_4_text}</p>
          </div>
          <div className="item__feature-block">
            <h2 className="item__feature-title">
              <img src="./img/benefits/benefit-feature-icon-5.svg" alt="benefit-feature-icon-1" />
              {properties_5_title}
            </h2>
            <p className="item__feature-text">{properties_5_text}</p>
          </div>
          <div className="item__feature-block">
            <h2 className="item__feature-title">
              <img src="./img/benefits/benefit-feature-icon-6.svg" alt="benefit-feature-icon-1" />
              {properties_6_title}
            </h2>
            <p className="item__feature-text">{properties_6_text}</p>
          </div>
        </div>
        <img src="./img/underline.svg" alt="underline" className="product__item-underline" />
        <div className="product__item-materials">
          <h2 className="item__materials-title">Материалы:</h2>
          <p className="item__materials-text">{materials_text}</p>
          <div className="item__materials-list">
            <p>
              <img src="./img/benefits/benefit-material-icon-1.svg" alt="material-icon" />{' '}
              {materials_1_item}
            </p>
            <p>
              <img src="./img/benefits/benefit-material-icon-2.svg" alt="material-icon" />{' '}
              {materials_2_item}
            </p>
            <p>
              <img src="./img/benefits/benefit-material-icon-3.svg" alt="material-icon" />
              {materials_3_item}
            </p>
            <p>
              <img src="./img/benefits/benefit-material-icon-4.svg" alt="material-icon" />
              {materials_4_item}
            </p>
          </div>
        </div>
        <Link to="/products">
          <button className="benefits__button button-style">Заказать товар</button>
        </Link>
      </div>
    </div>
  );
};

export default BenefitsItem;
