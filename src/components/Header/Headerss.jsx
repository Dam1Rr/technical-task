// Header.js
import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="/" className={styles.navLink}>
              Home
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/about" className={styles.navLink}>
              About
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/services" className={styles.navLink}>
              Services
            </a>  
          </li>
          <li className={styles.navItem}>
            <a href="/contact" className={styles.navLink}>
              Contact
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/login" className={styles.navLink}>
              Login
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/register" className={styles.navLink}>
              Register
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
