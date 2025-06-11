import styles from "../../styles/about.module.css";

export default function AboutUsLayOut({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.space}>
      {children}
      &copy; The New York Times Best Seller Explorer
    </div>
  );
}
