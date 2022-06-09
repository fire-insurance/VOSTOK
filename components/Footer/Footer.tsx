import Link from "next/link";
import styles from "./Footer.module.scss"

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__main}>
                <div className={styles['logo-block']}>
                    <Link href='/#title-section' >
                        <img className={styles.logo} src='/Лого.svg' alt="логотип коллегии" />
                    </Link>
                    <p className={styles['logo-caption']}>Коллегия адвокатов г. Хабаровск</p>
                </div>
                <nav className={styles.navigation}>
                    <Link href="/#title-section">
                        <a className={styles.navigation__link}>Главная</a>
                    </Link>
                    <Link href="/#about-section">
                        <a className={styles.navigation__link}>О нас</a>
                    </Link>
                    <Link href="/#team-section">
                        <a className={styles.navigation__link}>Команда</a>
                    </Link>
                    <Link href="/#services-section">
                        <a className={styles.navigation__link}>Услуги</a>
                    </Link>
                    <Link href="/#contacts-section" >
                        <a className={styles.navigation__link}>Контакты</a>
                    </Link>
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