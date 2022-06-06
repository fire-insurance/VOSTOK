import styles from './Services.module.scss'
import cn from 'classnames'
import ProjectButton from '../ProjectButton/ProjectButton'


const Services = () => {

    const services = ['Ведение дел в судах', 'Оформление недвижимости', 'Ведение уголовных дел', 'Ведение гражданских дел',
        'Ведение семейных дел', 'Ведение дел по ДТП', 'Решение жилищных вопросов', 'Ведение арбитражных дел', 'Решение трудовых споров',
        'Ведение дел по наркотикам', 'Сопровождение разводов', 'Раздел имущества супругов', 'Ведение администра- тивных дел',
        'Ведение дел по наследству', 'Решение вопросов по недвижимости', 'Решение земельных вопросов', 'Судебное взыскание задолженности',
        'Защита в сфере оборота наркотиков']

    return (
        <section className={styles.services}>
            <div className={cn('container', styles.services__container)}>

                <div className={styles.services__data}>
                    <div className={styles.services__title}>
                        <span className='watermark-text'>Услуги</span>
                        <h1>Наши услуги</h1>

                        <div className={styles['decorative-circle']}></div>
                    </div>
                    <div className={styles['text-block']}>
                        <div className={styles.text}>
                            <p className='project-paragraph'>
                                Мы готовы предоставить высокоуровневую юридическую помощь по широкому спектру юридических вопросов.
                            </p>
                            <p className='project-paragraph'>
                                Вместе мы сможем решить большинство вопросов и
                                проблем, разрешить жизненные ситуации, которые Вам кажутся
                                сложными и неразрешимыми.
                            </p>
                            <p className='project-paragraph'>
                                Несвоевременное обращение к юристу может привести к
                                тюремному сроку или потере имущества. Не тяните,
                                обращайтесь уже сейчас.
                            </p>
                        </div>

                        <ProjectButton text='Прайс-лист' extraClass={styles['services__project-button']} />
                    </div>
                </div>
                <div className={styles.services__overflow}>
                    <div className={styles['tile-container']}>
                        {services.map((service, index) =>
                            <div key={index} className={cn(styles.service,
                                { [styles['service_color-skin']]: !(index % 3) },
                                { [styles['service_color-gbrown']]: !((index - 1) % 3) },
                                { [styles['service_color-brown']]: !((index - 2) % 3) },
                            )}>
                                {service}
                            </div>
                        )}
                    </div>

                </div>
            </div>


        </section>
    )
}

export default Services