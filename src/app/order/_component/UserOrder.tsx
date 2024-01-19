"use client";

import styles from "./userOrder.module.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useRouter } from "next/navigation";
import {
  isOrderedState,
  totalAmountSelector,
  totalCostSelector,
} from "@/atoms/order";

export default function UserOrder() {
  const router = useRouter();
  const totalAmount = useRecoilValue(totalAmountSelector);
  const totalCost = useRecoilValue(totalCostSelector);
  const setIsOrdered = useSetRecoilState(isOrderedState);

  const submitOrderHandler = () => {
    if (!!!totalCost) return;
    setTimeout(() => {
      setIsOrdered(true);
      router.push("/complete");
    }, 500);
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
