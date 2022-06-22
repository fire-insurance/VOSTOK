import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import styles from './CounselorCard.module.scss'

interface CounselorCardProps {
    id: string,
    lastName: string,
    name: string,
    title: string,
    experienceStart: number,
    photo: string,
}

const CounselorCard: FC<CounselorCardProps> = ({ id, lastName, name, title, experienceStart, photo }) => {

    const getExperience = (start: number) => {
        const currentYear = new Date().getFullYear();
        const yearsPassed = currentYear - start;
        let nounForm: string;

        switch (yearsPassed % 10) {
            case 1: {
                nounForm = ' год'
                break;
            }

            case 2:
            case 3:
            case 4: {
                nounForm = ' года'
                break;
            }
            default: {
                nounForm = ' лет'
            }
        }

        if (yearsPassed > 10 && yearsPassed < 20) {
            nounForm = ' лет'
        }

        return <p className={styles['years-paragraph']}>
            <span className={styles['years-paragraph__years']}>{yearsPassed}</span>
            <span className={styles['years-paragraph__noun']}>{nounForm}</span>
        </p>
    }

    return (
        <div className={styles.card}>
            <div className={styles['card__image-container']}>
                <div className={styles.portrait}>
                    <img src={photo} alt="Адвокат"/>
                </div>

            </div>
            <div className={styles.card__data}>
                <div className={styles['name-block']}>
                    <span className={styles['name-block__lastName']}>{lastName}</span>
                    <span className={styles['name-block__name']}>{name}</span>
                </div>
                <div className={styles.perks}>
                    <p className={cn("project-paragraph", styles['data-paragraph'], styles['data-paragraph_border-pink'])}>{title}</p>
                    <p className={cn("project-paragraph", styles['data-paragraph'], styles['data-paragraph_border-blue'])}>{getExperience(experienceStart)} юридической работы</p>
                </div>
                <Link href={`/lawyers/${id}`}>
                    <a className={styles['card__project-button']}>Подробнее</a>
                </Link>

            </div>
        </div>
    )
}

export default CounselorCard;
