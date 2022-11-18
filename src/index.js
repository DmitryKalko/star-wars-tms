import React from "react";
//import ReactDOM from "react-dom"; // старая версия
import ReactDOM from 'react-dom/client';  // новая версия
import App from "./components/App";
import { HashRouter, BrowserRouter } from 'react-router-dom';

// ReactDOM.render(   // старый способ до React 18
//     <HashRouter>
//         <App />
//     </HashRouter>,
//     document.getElementById("root")
// );


// новый способ на React 18  - create-react-app использует его
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
);

// все работает но почему-то на странице карточка товара предлагает всегда одних и тех же