import React from 'react';

import ReactDOM from 'react-dom/client';
import { Router } from "./router";

import AnimatedCursor from "react-animated-cursor";

import ThemeProvider from './Common/Context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(  
  <ThemeProvider>
    <React.StrictMode>
      <AnimatedCursor innerSize={8} outerSize={35}  innerScale={1} outerScale={1.7} outerAlpha={0} hasBlendMode={true} outerStyle={{border: '3px solid var(--subtitle-color)', zIndex: '9999'}} innerStyle={{backgroundColor: 'var(--subtitle-color)'}} />
      <Router />
    </React.StrictMode>
    </ThemeProvider>
);