import React from 'react';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js';
import {BrowserRouter} from "react-router-dom"
import { createRoot } from 'react-dom/client';



const container = document.getElementById('root');

const root=createRoot(container)
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  
);

