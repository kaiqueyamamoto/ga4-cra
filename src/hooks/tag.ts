import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

const usePageView = () => {
  useEffect(() => {
    const handlePageView = () => {
      TagManager.dataLayer({
        dataLayer: {
          event: 'page_view',
          page_path: window.location.pathname,
          page_title: document.title,
        },
      });
    };

    // Disparar o evento na inicialização
    handlePageView();

    // Listener para alterações no histórico (SPA)
    const handlePopState = () => handlePageView();
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
};

export default usePageView;
