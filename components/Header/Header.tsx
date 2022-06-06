import styles from "./Header.module.scss"
import Link from "next/link"
import { useState } from "react"
import cn from "classnames"

const Header = () => {

    const [burgerMenuOpened, setBurgerMenuOpened] = useState<boolean>(false)

    const handleBurgerClick = () => {
        setBurgerMenuOpened(burgerMenuOpened => !burgerMenuOpened)
    }

    return (
        <>
            <div className={cn('darkening', { ['darkening_active']: burgerMenuOpened })}
                onClick={handleBurgerClick}
            ></div>
            <header className={cn(styles.header, {[styles['header_burger-opened']]: burgerMenuOpened})}>
                <img className={styles.logo} src='/Лого.svg' alt="логотип коллегии" />
                <nav className={cn(styles.navigation, { [styles.navigation_opened]: burgerMenuOpened })}>
                    <Link href='/'>
                        <a href="" className={styles.navigation__link}>
                            <img src='/HomeIcon.svg' alt="на главную" />
                        </a>
                    </Link>
                    <Link href='/'>
                        <a href="" className={styles.navigation__link}>О нас</a>
                    </Link>
                    <Link href='/'>
                        <a href="" className={styles.navigation__link}>Команда</a>
                    </Link>
                    <Link href='/'>
                        <a href="" className={styles.navigation__link}>Контакты</a>
                    </Link>
                    <Link href='/'>
                        <a href="" className={styles.navigation__link}>Услуги</a>
                    </Link>

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