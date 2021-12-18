/* eslint-disable-next-line no-use-before-define */
import React from 'react';
import ReactDOM from 'react-dom';

import { store, persisStore } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import App from './App';
import { Global } from '@emotion/react';
import sprite from './styles/svg-sprite';
import appStyles from './styles/app.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Global styles={appStyles} />
    <div dangerouslySetInnerHTML={{ __html: sprite }} />
    <Provider store={store}>
      <PersistGate persistor={persisStore} loading={null}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  rootElement
);
