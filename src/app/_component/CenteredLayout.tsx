import styles from "./centeredLayout.module.css";

export default function CenteredLayout({
  children,
  backgroundColor = "inherit",
  gap = "inherit",
}: {
  children: React.ReactNode;
  backgroundColor?: string;
  gap?: string;
}) {
  return (
    <main
      className={styles.center}
      style={{ background: backgroundColor, gap: gap }}
    >
      {children}
    </main>
  );
}
