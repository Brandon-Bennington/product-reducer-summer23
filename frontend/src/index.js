// src/index.js
import { configureStore } from '@reduxjs/toolkit';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import productReducer from './reducers/productReducer';

const store = configureStore({
  reducer: {
    products: productReducer
  }
});

const root = document.getElementById('root');

if (root !== null) {
  const appRoot = createRoot(root);
  appRoot.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
