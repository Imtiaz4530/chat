/* eslint-disable react/prop-types */
import styles from "./signup.module.css";

const GenderCheckbox = ({ handleCheckboxChange, selectedGender }) => {
  return (
    <div className={styles.genderContainer}>
      <div className={styles.genderControl}>
        <label
          className={`${styles.genderLabel} ${
            selectedGender === "male" ? styles.selected : ""
          }`}
        >
          <span className={styles.genderText}>Male</span>
          <input
            type="checkbox"
            className={styles.genderCheckbox}
            checked={selectedGender === "male"}
            onChange={() => handleCheckboxChange("male")}
          />
        </label>
      </div>
      <div className={styles.genderControl}>
        <label
          className={`${styles.genderLabel} ${
            selectedGender === "female" ? styles.selected : ""
          }`}
        >
          <span className={styles.genderText}>Female</span>
          <input
            type="checkbox"
            className={styles.genderCheckbox}
            checked={selectedGender === "female"}
            onChange={() => handleCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
