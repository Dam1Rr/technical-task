import React from 'react';
import styles from './Home.module.scss'
import Header from '../../components/Header/Headerss';
const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
        </nav>
      </header>
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1>дарова заходи на наш сайт</h1>
            <p> что будет именно тутт решит ayaseuno...</p>
            <button className={styles.ctaButton}>Learn More</button>
          </div>
          <div className={styles.heroImage}>
            {/* Изображение для героя */}
          </div>
        </section>
        <section className={styles.featuredSection}>
          <h2>что будет именно тутт решит ayaseuno...</h2>
          {/* Блок с выделенными товарами */}
        </section>
        <section className={styles.newsletterSection}>
          <h2>что будет именно тутт решит ayaseuno...</h2>
          {/* Блок для подписки на рассылку */}
        </section>
      </main>
      <footer className={styles.footer}>
        {/* Подвал страницы */}
      </footer>
      <p>Алиноооуу не посчиттай что этот сайт говнокод </p>
      <p>это просто прототип сайта а так реальный сайт совсем по другому будет выглядеьь под твои критерии</p>
      <p>ну коненчо если ты не против</p>
    </div>
  );
};

export default Home;