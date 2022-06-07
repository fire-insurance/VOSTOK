import styles from './Contacts.module.scss'
import cn from 'classnames';
import {useState } from 'react';

const Contacts = () => {


    return (
        <section className={cn(styles.contacts, 'container')} id='contacts-section'>
            <div className={styles.contacts__data}>
                <div className={styles.contacts__title}>
                    <h1>Контактная</h1>
                    <h1 className='light'>Информация</h1>
                    <span className='watermark-text'>Контакты</span>
                </div>

                <div className={styles.contacts__text}>
                    <a href='tel: +79141561147' className={styles['contact-single']}>
                        <img src="/phoneIcon.svg" alt="Телефон" />
                        <p className={styles.paragraph}>8 (914) 156 11 47</p>
                    </a>
                    <a className={styles['contact-single']}>
                        <img src="/locationIcon.svg" alt="Адрес" />
                        <p className={styles.paragraph}>г. Хабаровск,  ул. Лейтенанта Шмидта, 30 офис 20/2</p>
                    </a>
                    <a href='mailto: habbara@bk.ru' className={styles['contact-single']}>
                        <img src="/mailIcon.svg" alt="Электронная почта" />
                        <p className={styles.paragraph}>habbara@bk.ru</p>
                    </a>
                </div>
            </div>

            <div className={styles['map-container']}>

                <div id="map" className={styles['contacts__yandex-map']}>
                </div>

                <div className={styles.background}></div>
                <div className={styles.background} id={styles.bg2}></div>

                <div className={styles['decorative-circle']}></div>
            </div>

        </section>
    )
}

export default Contacts;