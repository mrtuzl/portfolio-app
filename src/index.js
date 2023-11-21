import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter  } from 'react-router-dom';
import App from "./App";
import "./App.scss";



const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
 <React.StrictMode>
    <HashRouter >
       <App />
    </HashRouter >
 </React.StrictMode>
);