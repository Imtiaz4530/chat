import { Link } from "react-router-dom";
import { useState } from "react";

import GenderCheckbox from "./GenderCheckbox";
import styles from "./signup.module.css";
import Loading from "../../common/Loading";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  let loading = false;

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
              <label className={styles.formLabel}>
                <span className={styles.labelText}>Full Name</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className={styles.input}
                value={inputs.fullName}
                onChange={(e) =>
                  setInputs({ ...inputs, fullName: e.target.value })
                }
              />
            </div>

            <div>
              <label className={styles.formLabel}>
                <span className={styles.labelText}>Username</span>
              </label>
              <input
                type="text"
                placeholder="johndoe"
                className={styles.input}
                value={inputs.username}
                onChange={(e) =>
                  setInputs({ ...inputs, username: e.target.value })
                }
              />
            </div>

            <div>
              <label className={styles.formLabel}>
                <span className={styles.labelText}>Email</span>
              </label>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                className={styles.input}
                value={inputs.email}
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
              />
            </div>

            <div>
              <label className={styles.formLabel}>
                <span className={styles.labelText}>Password</span>
              </label>
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
              <label className={styles.formLabel}>
                <span className={styles.labelText}>Confirm Password</span>
              </label>
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
