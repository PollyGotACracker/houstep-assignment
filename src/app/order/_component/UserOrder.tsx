"use client";

import styles from "./userOrder.module.css";

export default function UserOrder() {
  return (
    <div className={styles.user_order}>
      <p className={styles.order_info}>총 수량 : 0원</p>
      <p className={styles.order_info}>총 가격 : 0원</p>
      <button className={styles.order_button}>주문하기</button>
    </div>
  );
}
