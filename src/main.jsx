import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ContextGlobal } from './Components/utils/global.context';
import { ContextProvider } from "./Components/utils/global.context";  // Ajusta la ruta según sea necesario
import { Context } from './Components/utils/global.contextnico';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ContextProvider> */}
      {/* <ContextGlobal> */}
      {/* <App /> */}
      {/* </ContextGlobal> */}
      {/* </ContextProvider> */}
      {/* tengo entendido que quiere que dejemos <browser><context><app> pero no logre que ande asi */}
      <Context>
        <App />
      </Context>   
    </BrowserRouter>
  </React.StrictMode>
);


