import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // If navigating to a specific anchor/category section, do not force scroll to top
    if (hash || (pathname === '/catalogo' && search.includes('categoria='))) {
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, search, hash]);

  return null;
}
