"use client";

import { OrderItemType } from "@/types/order";
import styles from "./productItem.module.css";

export default function ProductItem(props: { item: OrderItemType }) {
  const { name, event, price } = props.item;

  return (
    <li className={`${styles.item} ${styles.selected}`}>
      <div className={styles.thumb}></div>
      <div className={styles.name_wrapper}>
        <span className={styles.name}>{name}</span>
        {!!event && <span className={styles.event_tag}>이벤트</span>}
      </div>
      <div className={styles.amount_wrapper}>
        <button className={styles.amount_button}>-</button>
        <span className={styles.amount}>1</span>
        <button className={styles.amount_button}>+</button>
      </div>
      <div className={styles.price}>{price.toLocaleString("ko-KR")}원</div>
    </li>
  );
}
