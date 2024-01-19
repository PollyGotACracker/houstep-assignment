import styles from "./page.module.css";
import Header from "./_component/Header";
import UserOrder from "./_component/UserOrder";
import Loader from "./_component/Loader";
import ProductItem from "./_component/ProductItem";
import { getOrderItems } from "@/services/order";
import { OrderItemType } from "@/types/order";

export default async function OrderPage() {
  const data = await getOrderItems();

  return (
    <main>
      <Header />
      {/* <Loader /> */}
      <ul className={styles.product_list}>
        {data &&
          data.map((item: OrderItemType) => (
            <ProductItem key={item.id} item={item} />
          ))}
      </ul>
      <UserOrder />
    </main>
  );
}
