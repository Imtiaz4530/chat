import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

import GenderCheckbox from "./GenderCheckbox";
import styles from "./signup.module.css";
import Loading from "../../common/Loading";
import axiosInstance from "../../api/axiosInstance";
import { AuthContext } from "../../context/AuthContext";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { setToken, setUser, setShowLogin } = useContext(AuthContext);

  let loading = false;

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { name, email, username, gender, password, confirmPassword } =
        inputs;

      const res = await axiosInstance.post("/api/auth/register", {
        name,
        username,
        email,
        gender,
        password,
        confirmPassword,
      });

      if (res?.data?.success) {
        setToken(res?.data?.user?.token);
        setUser(res?.data?.user);

        localStorage.setItem("talkoToken", res?.data?.user?.token);
        localStorage.setItem("talkoUser", JSON.stringify(res?.data?.user));
        setShowLogin(false);
      }
    } catch (e) {
      console.log(e);
      toast.error(e?.response?.data?.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.registerContainer}>
        <div className={styles.registerCard}>
          <h1 className={styles.registerTitle}>
            Register <span className={styles.highlight}> TALKO</span>
          </h1>

          <form onSubmit={handleSubmit}>
            <div>
              {/* <label className={styles.formLabel}>
                <span className={styles.labelText}>Full Name</span>
              </label> */}
              <input
                type="text"
                placeholder="Full Name"
                className={styles.input}
                value={inputs.name}
                onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              />
            </div>

            <div>
              {/* <label className={styles.formLabel}>
                <span className={styles.labelText}>Username</span>
              </label> */}
              <input
                type="text"
                placeholder="Username"
                className={styles.input}
                value={inputs.username}
                onChange={(e) =>
                  setInputs({ ...inputs, username: e.target.value })
                }
              />
            </div>

            <div>
              {/* <label className={styles.formLabel}>
                <span className={styles.labelText}>Email</span>
              </label> */}
              <input
                type="email"
                placeholder="Email"
                className={styles.input}
                value={inputs.email}
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
              />
            </div>

            <div>
              {/* <label className={styles.formLabel}>
                <span className={styles.labelText}>Password</span>
              </label> */}
              <input
                type="password"
                placeholder="Enter Password"
                className={styles.input}
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
            </div>

            <div>
              {/* <label className={styles.formLabel}>
                <span className={styles.labelText}>Confirm Password</span>
              </label> */}
              <input
                type="password"
                placeholder="Confirm Password"
                className={styles.input}
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
              />
            </div>

            <GenderCheckbox
              handleCheckboxChange={handleCheckboxChange}
              selectedGender={inputs.gender}
            />

            <Link className={styles.link} to="/login">
              Already have an account?
            </Link>

            <div>
              <button className={styles.button} disabled={loading}>
                {loading ? <Loading /> : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
