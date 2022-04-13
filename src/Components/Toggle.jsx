import { useState } from "react";
import styles from "./Toggle.module.css";

export default function Toggle() {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <div className={styles.toggle_wrapper}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        className={styles.switch_input}
        id={`switch-input`}
      />
      <label htmlFor={`switch-input`} className={styles.switch_label}>
        <div className={styles.toggle_ball}></div>
        <div className={styles.toggle_container}>
          <span>기본</span>
          <span>상세</span>
        </div>
      </label>
    </div>
  );
}
