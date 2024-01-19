"use client";

import styles from "./userOrder.module.css";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
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
  const [isOrdered, setIsOrdered] = useRecoilState(isOrderedState);
  const [submitText, setSubmitText] = useState("주문하기");

  const submitOrderHandler = () => {
    if (!!!totalAmount) return;
    setIsOrdered(true);
    setSubmitText("로딩 중...");
    setTimeout(() => {
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
        disabled={!!!totalAmount || isOrdered}
        onClick={submitOrderHandler}
      >
        {submitText}
      </button>
    </div>
  );
}
