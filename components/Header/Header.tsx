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
        <div className="page-layout">
            <div className={cn('darkening', { ['darkening_active']: burgerMenuOpened })}
                onClick={handleBurgerClick}
            ></div>
            <header className={cn(styles.header, { [styles['header_burger-opened']]: burgerMenuOpened })}>
                <Link href='/#title-section' >
                    <img className={styles.logo} src='/Лого.svg' alt="логотип коллегии" />
                </Link>
                <nav className={cn(styles.navigation, { [styles.navigation_opened]: burgerMenuOpened })}>
                    <div onClick={handleLinkClick}>
                        <Link href='/#title-section' >
                            <img src='/HomeIcon.svg' alt="на главную" />
                        </Link>
                    </div>
                    <Link href="/#about-section">
                        <a className={styles.navigation__link} onClick={handleLinkClick}>О нас</a>
                    </Link>
                    <Link href="/#team-section">
                        <a className={styles.navigation__link} onClick={handleLinkClick}>Команда</a>
                    </Link>
                    <Link href="/#services-section">
                        <a className={styles.navigation__link} onClick={handleLinkClick}>Услуги</a>
                    </Link>
                    <Link href="/#contacts-section" >
                        <a className={styles.navigation__link} onClick={handleLinkClick}>Контакты</a>
                    </Link>

                </nav>
                <div className={cn(styles.burger, { [styles.burger_opened]: burgerMenuOpened })} onClick={handleBurgerClick}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </header>
        </div>

    )
}

export default Header;