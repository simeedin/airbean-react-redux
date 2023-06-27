import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Menu from './views/Menu/Menu.jsx';
import Navigation from './views/Navigation/Navigation.jsx';
import About from './views/About/About.jsx';
import Status from './views/Status/Status.jsx';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {legacy_createStore} from 'redux';
import {Provider} from 'react-redux';

import cartReducer from './reducers/cartReducer.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/menu',
    element: <Menu/>
  },
  {
    path: '/nav',
    element: <Navigation/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/status',
    element: <Status/>
  }
]);


const store = legacy_createStore(
  cartReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
