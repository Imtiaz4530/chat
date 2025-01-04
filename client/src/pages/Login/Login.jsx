import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.css";
import Loading from "../../common/Loading";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let loading = false;

  const handleSubmit = async (e) => {
    e.preventDefault();
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
