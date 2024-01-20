"use client";

import { OrderItemType } from "@/types/order";
import styles from "./productItem.module.css";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { orderCartState } from "@/atoms/order";

export default function ProductItem(props: { item: OrderItemType }) {
  const { id, name, event, price } = props.item;
  const [cart, setCart] = useRecoilState(orderCartState);
  const [cost, setCost] = useState(price);
  const [amount, setAmount] = useState(0);

  const increaseAmount = () => {
    if (amount === 999) return;
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === id);
    if (itemIndex >= 0) {
      const newAmount = cart[itemIndex].amount + 1;
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === id) {
          return { ...cartItem, amount: newAmount };
        }
        return cartItem;
      });
      setCart([...newCart]);
      setAmount(newAmount);
      setCost(price * newAmount);
    } else {
      const newCartItem = {
        id: id,
        amount: 1,
        product: props.item,
      };
      setCart([...cart, newCartItem]);
      setAmount(1);
      setCost(price);
    }
  };

  const decreaseAmount = () => {
    if (amount === 0) return;
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === id);
    if (amount > 1) {
      const newAmount = cart[itemIndex].amount - 1;
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === id) {
          return { ...cartItem, amount: newAmount };
        }
        return cartItem;
      });
      setCart([...newCart]);
      setAmount(newAmount);
      setCost(price * newAmount);
    } else {
      const removedCart = cart.filter((cartItem) => cartItem.id !== id);
      setCart([...removedCart]);
      setAmount(0);
      setCost(price);
    }
  };

  return (
    <li className={`${styles.item} ${!!amount && styles.selected}`}>
      <div className={styles.thumb}></div>
      <div className={styles.name_wrapper}>
        <span className={styles.name}>{name}</span>
        {!!event && <span className={styles.event_tag}>이벤트</span>}
      </div>
      <div className={styles.amount_wrapper}>
        <button
          className={styles.amount_button}
          onClick={decreaseAmount}
          type="button"
        >
          -
        </button>
        <span className={styles.amount}>{amount}</span>
        <button
          className={styles.amount_button}
          onClick={increaseAmount}
          type="button"
        >
          +
        </button>
      </div>
      <div className={styles.price}>{cost.toLocaleString("ko-KR")}원</div>
    </li>
  );
}
