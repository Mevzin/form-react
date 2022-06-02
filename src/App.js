import React from 'react';

import { ToastContainer } from 'react-toastify';
import GlobalStyle from './globalStyle';
import Home from './pages/home';

import "react-toastify/ReactToastify.min.css";

const App = () => {
  return (
    <>
      <ToastContainer/>
      <GlobalStyle />
      <Home />
    </>
  );
};

export default App;