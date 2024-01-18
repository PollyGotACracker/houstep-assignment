import styles from "./page.module.css";
import Header from "./_component/Header";
import UserOrder from "./_component/UserOrder";
import Loader from "./_component/Loader";
import ProductItem from "./_component/ProductItem";

export default function OrderPage() {
  return (
    <main>
      <Header />
      {/* <Loader /> */}
      <ul className={styles.product_list}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </ul>
      <UserOrder />
    </main>
  );
}
