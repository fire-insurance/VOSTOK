import classNames from 'classnames';
import ProjectButton from '../ProjectButton/ProjectButton';
import styles from './CallForm.module.scss'
import cn from 'classnames'
import { FC, FormEvent, useState } from 'react';

interface formInterface {
    name: string,
    phone: string,
    question: string
}

const emptyErrors = {
    name: '',
    phone: '',
    question: ''
}

interface CallFormProps {
    source: string
}


const CallForm: FC<CallFormProps> = ({ source }) => {

    const [errors, setErrors] = useState<formInterface>(emptyErrors)
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

    const phonePattern = new RegExp(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/, 'gm')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        for (let pair of formData.entries()) {

            if (pair[1] === '') {
                setErrors(prevState => ({ ...prevState, [pair[0]]: 'Пожалуйста, заполните поле' }))
                setTimeout(() => setErrors(emptyErrors), 3000)
                return;
            }

            if (pair[0] === 'phone' && typeof pair[1] === 'string') {
                if (!phonePattern.test(pair[1])) {
                    setErrors(prevState => ({ ...prevState, [pair[0]]: 'Введите номер телефона в верном формате' }))
                    setTimeout(() => setErrors(emptyErrors), 3000)
                    return;
                }
            }

        }

        setFormSubmitted(true)
        setTimeout(() => setFormSubmitted(false), 3000)

        // @ts-ignore
        sendToTelegram(formData.get('name'), formData.get('phone'), formData.get('question'))
        e.currentTarget.reset()
    }

    const sendToTelegram = (name: string, phone: string, question: string) => {
        const message = `Новая заявка ${source}: %0A%0A● Имя: ${name} %0A%0A● Телефон: ${phone} %0A%0A● Вопрос: ${question}`
        const url = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage?chat_id=${process.env.CHAT_ID}&text=`
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", url + message, true);
        xhttp.send()
    }

    return (
        <div className={cn("container", styles.container)}>
            <section className={styles.callForm}>

                <div className={cn(styles.checkMark, { [styles['checkMark-active']]: formSubmitted })}>
                    <img src='/checkMark.svg' alt="check mark icon" />
                    <span>Отправлено!</span>
                </div>

                <div className={styles.callForm__title}>
                    <h2>Свяжитесь с нами уже сейчас</h2>

                    <div className={styles['separation-line']}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <form action="" onSubmit={handleSubmit} className={styles.callForm__form}>
                    <img className={cn(styles['decorative-circle'], styles['decorative-circle_pink'])} src='/decorative-circle.svg' alt=''></img>
                    <img className={cn(styles['decorative-circle'], styles['decorative-circle_blue'])} src='/decorative-circle.svg' alt=''></img>
                    <img className={cn(styles['decorative-circle'], styles['decorative-circle_skin'])} src='/decorative-circle.svg' alt=''></img>

                    <label className={styles['input-block']}>
                        <p>Ваше имя</p>
                        <input name='name' type="text" className={styles.input} />
                        <p className={cn('project-paragraph',
                            styles['error-text'],
                            { [styles['error-text_active']]: errors.name })}
                        >
                            {errors.name}
                        </p>
                    </label>
                    <label className={styles['input-block']}>
                        <p>Номер телефона</p>
                        <input name='phone' type="text" className={styles.input} />
                        <p className={cn('project-paragraph',
                            styles['error-text'],
                            { [styles['error-text_active']]: errors.phone })}
                        >
                            {errors.phone}
                        </p>
                    </label>
                    <label className={cn(styles['input-block'], styles['input-block_textarea'])}>
                        <p>Ваш вопрос</p>
                        <textarea name='question' className={styles.input} />
                        <p className={cn('project-paragraph',
                            styles['error-text'],
                            { [styles['error-text_active']]: errors.question })}
                        >
                            {errors.question}
                        </p>
                    </label>

                    <ProjectButton text='Заказать звонок' extraClass={styles['callForm__project-button']} type='submit' />
                </form>
            </section>
        </div>
    )
}

export default CallForm;