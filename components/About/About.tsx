import styles from './About.module.scss'
import cn from 'classnames';
import Image from 'next/image';
import teamPicture from '../../public/Общая фотография.png'
const About = () => {

    return (
        <div className={styles.about} id='about-section'>
            <h1 className={styles.about__title}>
                <span>Тот, кто </span>
                <span> не борется —</span>
                <span className='light'>уже проиграл!</span>
            </h1>
            <div className={styles.photo}>
                <Image src={teamPicture} alt="Общая фотография сотрудников коллегии" />
            </div>

            <div className={styles['decorative-circle']}></div>

            <section className={styles['about__questions']}>

                <div className={styles['question-single']}>
                    <span className={styles['question-mark']}>?</span>
                    <p className='project-paragraph'>
                        Не знаете, как подготовиться к судебному процессу
                        и защитить свои права?
                    </p>
                </div>

                <div className={styles['question-single']}>
                    <span className={styles['question-mark']}>?</span>
                    <p className='project-paragraph'>
                        Запутались в законах и не знаете, как грамотно
                        сформулировать претензию, иск, жалобу, заявление?
                    </p>
                </div>

                <div className={styles['question-single']}>
                    <span className={styles['question-mark']}>?</span>
                    <p className='project-paragraph'>
                        Нет времени и возможности представлять
                        интересы в суде и в государственных органах?
                    </p>
                </div>

                <div className={styles['call-to-action']}>
                    <div className={styles['separation-line']}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <p className={cn(styles['call-to-action__text'], 'project-paragraph')}>
                        Обращайтесь к адвокатам и правовым специалистам
                        коллегии адвокатов «ВОСТОК», и получите ответы на все
                        ваши вопросы.
                    </p>
                </div>
            </section>

            <section className={styles['about__guarantees']}>
                <img className={styles['dec-half-circle']} src="/dec_half_circle.svg" alt="" />
                <h2>Мы гарантируем</h2>

                <div className={styles["guarantee-card"]}>
                    <img className={styles['guarantee-card__image']} src="/cheapIcon.svg" alt="" />
                    <div className={styles['guarantee-card__data']}>
                        <p className={cn(styles["guarantee-card__title"], 'project-paragraph')}>Доступность</p>
                        <div className={styles['separation-line']}></div>
                        <p className={cn(styles["guarantee-card__text"], 'project-paragraph')}>Цены на наши услуги крайне демократичны</p>
                    </div>
                </div>
                <div className={styles["guarantee-card"]}>
                    <img className={styles['guarantee-card__image']} src="/rapidIcon.svg" alt="" />
                    <div className={styles['guarantee-card__data']}>
                        <p className={cn(styles["guarantee-card__title"], 'project-paragraph')}>Оперативность</p>
                        <div className={styles['separation-line']}></div>
                        <p className={cn(styles["guarantee-card__text"], 'project-paragraph')}>Свяжемся с вами в кратчайшие сроки</p>
                    </div>
                </div>
                <div className={styles["guarantee-card"]}>
                    <img className={styles['guarantee-card__image']} src="/eyeIcon.svg" alt="" />
                    <div className={styles['guarantee-card__data']}>
                        <p className={cn(styles["guarantee-card__title"], 'project-paragraph')}>Прозрачность</p>
                        <div className={styles['separation-line']}></div>
                        <p className={cn(styles["guarantee-card__text"], 'project-paragraph')}>Полная честность и искренность</p>
                    </div>
                </div>
                <div className={styles["guarantee-card"]}>
                    <img className={styles['guarantee-card__image']} src="/lockIcon.svg" alt="" />
                    <div className={styles['guarantee-card__data']}>
                        <p className={cn(styles["guarantee-card__title"], 'project-paragraph')}>Конфеденциальность</p>
                        <div className={styles['separation-line']}></div>
                        <p className={cn(styles["guarantee-card__text"], 'project-paragraph')}>Безусловное соблю&shy;дение адвокатской тайны </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;