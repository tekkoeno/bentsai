import React from 'react';

const Pagination = ({
  pageCount,
  currentPage,
  handlePageClick,
  handleNextPage,
  handlePrevPage,
}) => {
  return (
    <div className="products__bottom-pagination">
      <div className="products__bottom-pagination-list">
        {/* Отображаем номера страниц */}
        {Array.from({ length: pageCount }, (_, index) => (
          <button
            key={index}
            className={`products__bottom-pagination-list-item ${
              currentPage === index ? 'products__bottom-pagination-list-item--active' : ''
            }`}
            onClick={() => handlePageClick({ selected: index })}>
            {index + 1}
          </button>
        ))}
      </div>

      <div className="products__bottom-pagination-arrows">
        {/* Кнопка "Предыдущая" */}
        <button
          className="products__bottom-pagination-list-item"
          onClick={handlePrevPage}
          disabled={currentPage === 0}>
          <img src="./img/arrow-left.svg" alt="prev" />
        </button>
        {/* Кнопка "Следующая" */}
        <button
          className="products__bottom-pagination-list-item"
          onClick={handleNextPage}
          disabled={currentPage === pageCount - 1}>
          <img src="./img/arrow-right.svg" alt="next" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
