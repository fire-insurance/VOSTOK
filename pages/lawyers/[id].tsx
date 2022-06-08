import { useRouter } from "next/router";
import { teamData, LawyerInterface, emptyLawyer } from "../../components/Team/teamData";
import cn from "classnames";
import styles from '../../styles/Lawyer.module.scss'
import Link from "next/link";
import { useEffect, useState } from "react";
import ProjectButton from "../../components/ProjectButton/ProjectButton";
import MakeModal from "../../components/MakeModal/MakeModal";
import CallForm from "../../components/CallForm/CallForm";


const Lawyer = () => {
    const [lawyer, setLawyer] = useState<LawyerInterface>(emptyLawyer)

    const router = useRouter();

    const [modalOpened, setModalOpened] = useState<boolean>(false)
    const closeModal = () => setModalOpened(false)
    const openModal = () => setModalOpened(true)




    useEffect(() => {
        if (router.isReady) {
            const { query } = router;
            const get_lawyer = teamData.filter(member => member.id === query.id)[0]
            setLawyer(prevState => ({ ...prevState, ...get_lawyer }))
        }
    }, [router.isReady]);


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
        <div className="page-layout">

            <MakeModal
                modalOpened={modalOpened}
                closeModal={closeModal}
                hasBackground={false}
            >
                <CallForm source={`со страницы "${lawyer.lastName}"`} />
            </MakeModal>

            <section className={cn("container", styles['lawyer-container'])}>
                <Link href='/#team-section'>
                    <div className={styles['link-back']}>
                        <img src="/arrow_R.svg" alt="Назад к команде" />
                        <a>Команда</a>
                    </div>
                </Link>

                <div className={styles.lawyer}>
                    <div className={styles.lawyer__main}>
                        <div className={styles['image-container']}>
                            <div className={styles['image-wrapper']}>
                                <img src={lawyer.photo} alt={lawyer.lastName + ' ' + lawyer.name} />
                            </div>
                            <div className={cn(styles['background-circle'], styles['background-circle_gbrown'])}></div>
                            <div className={cn(styles['background-circle'], styles['background-circle_skin'])}></div>
                            <div className={cn(styles['background-circle'], styles['background-circle_pink'])}></div>
                        </div>

                        <div className={styles['data-block']}>
                            <p className={styles.lastName}>{lawyer.lastName}</p>
                            <p className={styles.name}>{lawyer.name}</p>

                            <div className={styles['separation-line']}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>

                            <p className={styles['lawyer-title']}>{lawyer.title}</p>

                            <div className={styles['data-paragraphs']}>
                                {lawyer.dataParagraphs?.map((paragraph, index) =>
                                    <p key={index} className="project-paragraph">{paragraph}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className={styles['lawyer__data-cards']}>
                        <div className={cn(styles['data-card'], styles['data-card_specialization'])}>
                            <div className={styles['data-card__title']}>
                                <div className={styles.borderline}></div>
                                <p>Специализация</p>
                            </div>
                            <div className={styles['specialization-items']}>
                                {lawyer.specialization?.map((item, index) =>
                                    <p key={index} className="project-paragraph">{item}</p>
                                )}
                            </div>
                        </div>

                        {lawyer.lawyerSince ?
                            <div className={cn(styles['data-card'], styles['data-card_years-data'])}>
                                <div className={styles['data-card__title']}>
                                    <div className={styles.borderline}></div>
                                    <p>Статус адвоката</p>
                                </div>
                                {getExperience(lawyer.lawyerSince)}
                            </div>
                            :
                            <></>
                        }
                        <div className={cn(styles['data-card'], styles['data-card_years-data'])}>
                            <div className={styles['data-card__title']}>
                                <div className={styles.borderline}></div>
                                <p>Юридический стаж</p>
                            </div>
                            {getExperience(lawyer.experienceStart)}
                        </div>
                    </div>
                </div>

                <ProjectButton text="Заказать звонок" extraClass={styles['project-button']} onClick={openModal} />
            </section>
        </div>
    )
}

export default Lawyer;