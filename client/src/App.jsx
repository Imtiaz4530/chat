import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Chat from "./pages/Chat/ChatBox";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import { useStoreActions } from "easy-peasy";

const App = () => {
  const initializeSocket = useStoreActions(
    (actions) => actions.socket.initializeSocket
  );

  const { token, user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      initializeSocket(user);
    }
  }, [user, initializeSocket]);

  return (
    <div>
      <Routes>
        <Route path="/" element={token ? <Chat /> : <Navigate to="/login" />} />
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={token ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default App;
