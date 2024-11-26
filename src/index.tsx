import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TagManager from 'react-gtm-module';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const tagManagerArgs = {
  gtmId: 'GTM-5Q4TWLLR', // Substitua pelo seu GTM ID
};
TagManager.initialize(tagManagerArgs);

const render = (Component: React.FC) => {
  root.render(
    <React.StrictMode>
      <Component />
    </React.StrictMode>,
  );
};

render(App);
