import Header from "./_component/Header";
import UserOrder from "./_component/UserOrder";
import Loader from "./_component/Loader";

export default function OrderPage() {
  return (
    <main>
      <Header />
      <Loader />
      <UserOrder />
    </main>
  );
}
