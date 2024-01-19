"use client";

import { OrderItemType } from "@/types/order";
import styles from "./productItem.module.css";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { orderCartState } from "@/atoms/order";

export default function ProductItem(props: { item: OrderItemType }) {
  const { id, name, event, price } = props.item;
  const [cart, setCart] = useRecoilState(orderCartState);
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
    } else {
      const newCartItem = {
        id: id,
        amount: 1,
        product: props.item,
      };
      setCart([...cart, newCartItem]);
      setAmount(1);
    }
  };

  const decreaseAmount = () => {
    if (amount === 0) return;
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === id);
    if (itemIndex >= 0) {
      const newAmount = cart[itemIndex].amount - 1;
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === id) {
          return { ...cartItem, amount: newAmount };
        }
        return cartItem;
      });
      setCart([...newCart]);
      setAmount(newAmount);
    } else {
      const removedCart = cart.filter((cartItem) => cartItem.id !== id);
      setCart([...removedCart]);
      setAmount(0);
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
        <button className={styles.amount_button} onClick={decreaseAmount}>
          -
        </button>
        <span className={styles.amount}>{amount}</span>
        <button className={styles.amount_button} onClick={increaseAmount}>
          +
        </button>
      </div>
      <div className={styles.price}>{price.toLocaleString("ko-KR")}원</div>
    </li>
  );
}
