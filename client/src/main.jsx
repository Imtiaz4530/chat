import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "easy-peasy";

import "./index.css";
import App from "./App.jsx";
import AuthContextProvider from "./context/authContext.jsx";
import store from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProvider>
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
