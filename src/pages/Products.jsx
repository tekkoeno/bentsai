import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Error from '../components/Error';
import Pagination from '../components/Pagination';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isProductError, setIsProductError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const offset = currentPage * itemsPerPage;
  const currentItems = products.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get('https://dde4c7bcd6cb56a6.mokky.dev/products');
      setProducts(data);
    } catch (error) {
      setIsProductError(true);
    }
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
    window.scrollTo(0, 0);
  };

  const handleNextPage = () => {
    if (currentPage < pageCount - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // Переход на предыдущую страницу
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setIsProductError(false);
    }, 5000);
  }, [isProductError]);

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
            <Link to="/">
              <li className="products__list-item ">Главная</li>
            </Link>
            /
            <Link to="/products">
              <li className="products__list-item products__list-item--active">Продукция</li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="products__wrap-v2">
          {isProductError && (
            <Error onClickClose={() => setIsProductError(false)} productError={isProductError} />
          )}
          <div className="products__item-wrap">
            {currentItems.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>

          <div className="products__wrap-bottom">
            <Pagination
              pageCount={pageCount}
              currentPage={currentPage}
              handlePageClick={handlePageClick}
              handleNextPage={handleNextPage}
              handlePrevPage={handlePrevPage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
