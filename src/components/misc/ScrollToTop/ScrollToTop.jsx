import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { object } from 'prop-types';

export const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 0);
  }, [pathname]);

  return children || null;
};

ScrollToTop.propTypes = {
  children: object,
};
