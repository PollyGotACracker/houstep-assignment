"use client";

import { useRecoilValue } from "recoil";
import styles from "./userOrder.module.css";
import { totalAmountSelector, totalCostSelector } from "@/atoms/order";

export default function UserOrder() {
  const totalAmount = useRecoilValue(totalAmountSelector);
  const totalCost = useRecoilValue(totalCostSelector);

  const submitOrderHandler = () => {
    if (!!!totalCost) return;
  };

  return (
    <div className={styles.user_order}>
      <p className={styles.order_info}>총 수량 : {totalAmount}개</p>
      <p className={styles.order_info}>
        총 가격 : {totalCost.toLocaleString("ko-KR")}원
      </p>
      <button
        className={styles.order_button}
        disabled={!!!totalCost}
        onClick={submitOrderHandler}
      >
        주문하기
      </button>
    </div>
  );
}
