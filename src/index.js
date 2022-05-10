import React from 'react';
import App from './App';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import './index.css'; // import local index.css file.

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);