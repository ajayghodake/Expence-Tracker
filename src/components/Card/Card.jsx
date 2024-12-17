import styles from "./Card.module.css";
import Button from "../Button/Button";

export default function Card({
  title,
  amount,
  btnText,
  btnType,
  handleClick,
  success = true,
}) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>
        {`${title}: `}
        <span className={success ? styles.success : styles.failure}>
        {`₹${amount}`}
        </span>
      </h3>
      <Button handleClick={handleClick} style={btnType}>
        {btnText}
      </Button>
    </div>
  );
}

