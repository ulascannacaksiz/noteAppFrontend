import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { store } from "./stores/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
