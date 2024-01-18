import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import CenteredLayout from "./_component/CenteredLayout";

export default function Home() {
  return (
    <CenteredLayout backgroundColor="#000" gap="41px">
      <Image
        src="/bjchango_big.svg"
        alt="Bjchango Logo"
        width={150}
        height={51}
        priority
      />
      <Link className={styles.order_link} href="/order">
        주문하러 가기
      </Link>
    </CenteredLayout>
  );
}
