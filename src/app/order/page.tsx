import Header from "./_component/Header";
import UserOrder from "./_component/UserOrder";
import ProductItemList from "./_component/ProductItemList";

export default function OrderPage() {
  return (
    <main>
      <Header />
      <ProductItemList />
      <UserOrder />
    </main>
  );
}
