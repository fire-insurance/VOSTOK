import Link from 'next/link';
import ProjectButton from '../components/ProjectButton/ProjectButton';
import styles from '../styles/404.module.scss'

const Page404 = () => {

    return (
        <div className="page-layout">
            <section className="container">
                <div className={styles['info404']}>
                    <div className={styles['decorative-circle']}></div>
                    <h1>404</h1>
                    <h2>Запрошенной вами страницы не существует</h2>
                    <Link href='/'>
                        <a className={styles['link-back']}>
                            Вернуться на главную
                        </a>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Page404;