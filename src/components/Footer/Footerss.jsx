import React from "react";
import styles from './Footerss.module.scss'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>MyLogo</div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                Home
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                About
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                Services
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.socialIcons}>
          <a href="#" className={styles.socialIcon}>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className={styles.socialIcon}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className={styles.socialIcon}>
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;