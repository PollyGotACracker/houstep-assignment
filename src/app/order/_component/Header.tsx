import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <Image
        src="/bjchango_small.svg"
        alt="Bjchango Logo"
        width={94}
        height={32}
        priority
      />
    </div>
  );
}
