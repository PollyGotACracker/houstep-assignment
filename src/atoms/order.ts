"use client";

import { atom, selector } from "recoil";
import { OrderCartType } from "@/types/order";

export const orderCartState = atom<OrderCartType[]>({
  key: "orderCartState",
  default: [],
});

export const totalAmountSelector = selector({
  key: "totalAmountSelector",
  get: ({ get }) => {
    const cart = get(orderCartState);
    return cart.reduce((acc, cur) => acc + cur.amount, 0);
  },
});

export const totalCostSelector = selector({
  key: "totalCostSelector",
  get: ({ get }) => {
    const cart = get(orderCartState);
    return cart.reduce((acc, cur) => acc + cur.product.price * cur.amount, 0);
  },
});
