import React from "react";
import App from "./App";

import ReactDOM from "react-dom/client";
import ShopProvider from './context/ShopProvider';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ShopProvider>
        <App />
    </ShopProvider>
);