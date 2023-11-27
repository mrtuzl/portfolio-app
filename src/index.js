import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter  } from 'react-router-dom';
import App from "./App";
import "./App.scss";
import ScrollToTopOnPageChange from "./components/ScrollToTopOnPageChange";


const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
 <React.StrictMode>
    <HashRouter >
    <ScrollToTopOnPageChange/>
       <App />
    </HashRouter >
 </React.StrictMode>
);