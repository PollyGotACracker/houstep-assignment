"use client";

import styles from "./productItemList.module.css";
import { useEffect, useState } from "react";
import { getOrderItems } from "@/services/order";
import { OrderItemType } from "@/types/order";
import Loader from "./Loader";
import ProductItem from "./ProductItem";

export default function ProductItemList() {
  const [items, setItems] = useState<OrderItemType[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getOrderItems();
      setItems(data);
    };
    fetchData();
  }, [getOrderItems]);

  return (
    <>
      {!!items.length ? (
        <ul className={styles.product_list}>
          {items.map((item: OrderItemType) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <Loader />
      )}
    </>
  );
}
