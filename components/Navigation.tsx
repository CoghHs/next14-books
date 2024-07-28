"use client";

import Link from "next/link";
import styles from "../styles/navigation.module.css";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link
            href="/"
            className={path === "/" ? styles.activeLink : styles.inactiveLink}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about-us"
            className={
              path === "/about-us" ? styles.activeLink : styles.inactiveLink
            }
          >
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
