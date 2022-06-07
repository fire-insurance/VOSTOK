import styles from "./Footer.module.scss"

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__main}>
                <div className={styles['logo-block']}>
                    <img className={styles.logo} src='/Лого.svg' alt="логотип коллегии" />
                    <p className={styles['logo-caption']}>Коллегия адвокатов г. Хабаровск</p>
                </div>
                <nav className={styles.navigation}>
                    <a href="#title-section" className={styles.navigation__link}>Главная</a>
                    <a href="#about-section" className={styles.navigation__link}>О нас</a>
                    <a href="#team-section" className={styles.navigation__link}>Команда</a>
                    <a href="#contacts-section" className={styles.navigation__link}>Контакты</a>
                    <a href="#services-section" className={styles.navigation__link}>Услуги</a>
                </nav>
            </div>

            <div className={styles.footer__credits}>
                <p>
                    Дизайн и разработка сайта — <a href="https://fire-insurance.github.io/" className={styles['credit-link']}>fire-insurance</a>
                </p>
                <p>
                    © 2022
                </p>
            </div>
        </footer>
    )
}

export default Footer;