
import React from "react";
import ReactDom from 'react-dom/client';

ReactDom.createRoot(document.getElementById('head')!).render(
  <React.StrictMode>
    <meta charSet="UTF-8" />
    <link rel="icon" type="image/ico" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SecuroKey</title>
  </React.StrictMode>
)