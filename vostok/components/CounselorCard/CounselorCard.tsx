import cn from 'classnames';
import { FC, useEffect } from 'react';
import ProjectButton from '../ProjectButton/ProjectButton';
import styles from './CounselorCard.module.scss'

interface CounselorCardProps {
    lastName: string,
    name: string,
    title: string,
    experienceStart: number,
    photo: string,
}

const CounselorCard: FC<CounselorCardProps> = ({ lastName, name, title, experienceStart, photo }) => {

    const getExperience = (start: number) => {
        const currentYear = new Date().getFullYear();
        const yearsPassed = currentYear - start;
        let nounForm: string;

        switch (yearsPassed % 10) {
            case 1: {
                nounForm = ' год стажа'
                break;
            }

            case 2:
            case 3:
            case 4: {
                nounForm = ' года стажа'
                break;
            }
            default: {
                nounForm = ' лет стаж'
            }
        }

        return yearsPassed + nounForm
    }

    return (
        <div className={styles.card}>
            <img src={photo} alt="Адвокат" />
            <div className={styles.card__data}>
                <div className={styles['name-block']}>
                    <span className={styles['name-block__lastName']}>{lastName}</span>
                    <span className={styles['name-block__name']}>{name}</span>
                </div>
                <p className={cn("project-paragraph", styles['data-paragraph'], styles['data-paragraph_border-pink'])}>{title}</p>
                <p className={cn("project-paragraph", styles['data-paragraph'], styles['data-paragraph_border-blue'])}>{getExperience(experienceStart)} юридической работы</p>

                <ProjectButton text='Подробнее' extraClass={styles['card__project-button']} />
            </div>
        </div>
    )
}

export default CounselorCard;