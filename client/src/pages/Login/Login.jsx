import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import styles from "./login.module.css";
import Loading from "../../common/Loading";
import axiosInstance from "../../api/axiosInstance";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const { setToken, setUser, setShowLogin } = useContext(AuthContext);

  let loading = false;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/auth/login", {
        identifier,
        password,
      });

      if (res?.data?.success) {
        setToken(res.data.user.token);
        setUser(res.data.user);

        localStorage.setItem("talkoToken", res.data.user.token);
        setShowLogin(false);
      }
    } catch (e) {
      console.log(e);
      toast.error(e?.response?.data?.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <h1 className={styles.loginTitle}>
            Login
            <span className={styles.highlight}> TALKO</span>
          </h1>

          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Username or Email"
                className={styles.formInput}
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Enter Password"
                className={styles.formInput}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Link to="/register" className={styles.signupLink}>
              {"Don't"} have an account?
            </Link>

            <div>
              <button
                className={styles.loginButton}
                disabled={loading}
                style={{ padding: loading ? "0px" : "0.5rem" }}
              >
                {loading ? <Loading /> : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
