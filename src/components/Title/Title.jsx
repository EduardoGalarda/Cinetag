
import styles from "./Title.module.css";

// eslint-disable-next-line react/prop-types
const Title = ({ children }) => {
  return (
    <div className={styles.text}>
        {children}
    </div>
  );
};

export default Title;