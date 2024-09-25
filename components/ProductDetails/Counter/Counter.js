import React from "react";
import styles from "../../../styles/CounterStyles.module.css";

function Counter({ quantity, updateQuantity }) {
  const increment = () => {
    updateQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      updateQuantity(quantity - 1);
    }
  };

  return (
    <div className={styles.counter}>
      <button className={styles.btn} onClick={decrement}>
        -
      </button>
      <span className={styles.count}>{quantity}</span>
      <button className={styles.btn} onClick={increment}>
        +
      </button>
    </div>
  );
}

export default Counter;
