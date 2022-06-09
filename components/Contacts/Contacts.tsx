import styles from './Contacts.module.scss'
import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';

const Contacts = () => {

    // Инициализация карт при повторной загрузке компонента
    let myMap
    useEffect(() => {
        // @ts-ignore
        if (window.ymaps) {
            // @ts-ignore
            window.ymaps?.ready(init_ymaps);
        }

    }, [])
    function init_ymaps() {
        // @ts-ignore
        myMap = new window.ymaps.Map('map', {
            center: [48.48956188, 135.06344215],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        });

        // @ts-ignore

        let myGeoObject = new window.ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [48.48953019, 135.06340984]
            }
        });

        myMap.geoObjects.add(myGeoObject);
    }

    const sectionRef = useRef<HTMLDivElement | null>(null)
    const [isIntersecting, setIsIntersecting] = useState<boolean>(false)

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setIsIntersecting(entry.isIntersecting)
        })

        if (sectionRef && sectionRef.current)
            observer.observe(sectionRef.current)
    }, [])

    return (
        <section className={cn(styles.contacts, 'container')} id='contacts-section'>
            <div className={styles.contacts__data} ref={sectionRef}>

                <h1 className={cn(styles.contacts__title, { ['intersecting']: isIntersecting })}>
                    <div className={'text-animation'}>
                        <span className={'text-animation__text'}>Контактная</span>
                        <div className={cn('text-animation__cover', 'text-animation__cover_left')}></div>
                    </div>
                    <div className={'text-animation'}>
                        <span className={cn('light', 'text-animation__text')}>Информация</span>
                        <div className={cn('text-animation__cover', 'text-animation__cover_right')}></div>
                    </div>
                    <div className={styles['decorative-circle']}></div>

                    <span className='watermark-text'>Контакты</span>
                </h1>

                <div className={styles.contacts__text} >
                    <a href='tel: +79141561147' className={styles['contact-single']}>
                        <img src="/phoneIcon.svg" alt="Телефон" />
                        <p className={styles.paragraph}>8 (914) 156 11 47</p>
                    </a>
                    <div className={styles['contact-single']}>
                        <img src="/locationIcon.svg" alt="Адрес" />
                        <p className={styles.paragraph}>г. Хабаровск,  ул. Лейтенанта Шмидта, 30 офис 20/2</p>
                    </div>
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