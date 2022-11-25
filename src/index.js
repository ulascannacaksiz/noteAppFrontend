import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import { BrowserRouter } from "react-router-dom";
import {store} from './stores/index'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <Navbar/>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


