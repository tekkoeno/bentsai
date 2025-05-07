import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation(); // Хук для отслеживания изменения маршрута

  useEffect(() => {
    window.scrollTo(0, 0); // Сбрасываем скролл в верхнюю часть страницы
  }, [location]); // Запускается каждый раз, когда меняется location (то есть маршрут)

  return null; // Этот компонент не рендерит ничего
};

export default ScrollToTop;
