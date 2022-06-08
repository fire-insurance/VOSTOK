import styles from "./Header.module.scss"
import Link from "next/link"
import { useState } from "react"
import cn from "classnames"

const Header = () => {

    const [burgerMenuOpened, setBurgerMenuOpened] = useState<boolean>(false)

    const handleBurgerClick = () => {
        setBurgerMenuOpened(burgerMenuOpened => !burgerMenuOpened)
    }

    const handleLinkClick = () => {
        if (burgerMenuOpened)
            setBurgerMenuOpened(false)
    }

    return (
        <>
            <div className={cn('darkening', { ['darkening_active']: burgerMenuOpened })}
                onClick={handleBurgerClick}
            ></div>
            <header className={cn(styles.header, { [styles['header_burger-opened']]: burgerMenuOpened })}>
                <img className={styles.logo} src='/Лого.svg' alt="логотип коллегии" />
                <nav className={cn(styles.navigation, { [styles.navigation_opened]: burgerMenuOpened })}>
                    <div onClick={handleLinkClick}>
                        <Link href='/#title-section' >
                            <a className={styles.navigation__link}>
                                <img src='/HomeIcon.svg' alt="на главную" />
                            </a>
                        </Link>
                    </div>

                    <a href="#about-section" className={styles.navigation__link} onClick={handleLinkClick}>О нас</a>
                    <a href="#team-section" className={styles.navigation__link} onClick={handleLinkClick}>Команда</a>
                    <a href="#services-section" className={styles.navigation__link} onClick={handleLinkClick}>Услуги</a>
                    <a href="#contacts-section" className={styles.navigation__link} onClick={handleLinkClick}>Контакты</a>

                </nav>
                <div className={cn(styles.burger, { [styles.burger_opened]: burgerMenuOpened })} onClick={handleBurgerClick}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </header>
        </>

    )
}

export default Header;