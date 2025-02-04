import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "easy-peasy";

import "./index.css";
import App from "./App.jsx";
import AuthContextProviderr from "./context/AuthContext.jsx";
import store from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProviderr>
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
    </AuthContextProviderr>
  </BrowserRouter>
);
