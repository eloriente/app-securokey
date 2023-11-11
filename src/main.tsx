import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyled, FontsStyled } from './components/ui';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyled />
    <FontsStyled />
    <App />
  </React.StrictMode>,
)