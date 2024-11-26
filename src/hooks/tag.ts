import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

const usePageView = () => {
  useEffect(() => {
    const handlePageView = () => {
      const eventData = {
        event: 'page_view',
        page_path: window.location.pathname,
        page_title: document.title,
      };

      // Log para verificar os dados antes de enviá-los
      console.log(
        'Disparando evento page_view com os seguintes dados:',
        eventData,
      );

      TagManager.dataLayer({
        dataLayer: eventData,
      });

      // Log para verificar se o evento foi enviado ao dataLayer
      console.log('Evento enviado ao dataLayer:', eventData);
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
