import styles from "./TitleBlock.module.scss"
import ProjectButton from "../ProjectButton/ProjectButton";
import TypeWriter from "../TypeWriter/TypeWriter";
import cn from "classnames";
import MakeModal from "../MakeModal/MakeModal";
import CallForm from "../CallForm/CallForm";
import { useState } from "react";

const TitleBlock = () => {

    const [modalOpened, setModalOpened] = useState<boolean>(false)
    const closeModal = () => setModalOpened(false)
    const openModal = () => setModalOpened(true)

    return (
        <div className={styles['home']} id='title-section'>

            <MakeModal
                modalOpened={modalOpened}
                closeModal={closeModal}
                hasBackground={false}
            >
                <CallForm source={'с главной страницы'}/>
            </MakeModal>

            <div className={styles['home__decorative-circle']}></div>
            <div className={styles['home__text-block']}>
                <div className={styles['title-text']}>
                    <h1 className={styles['title-text__static']}>Юридическая</h1>
                    <TypeWriter words={['Защита', 'Консультация', 'Помощь']} textClass={cn(styles['title-text__dynamic'], 'light')} />
                </div>

                <p className={cn(styles['extra-text'], 'project-paragraph')}>
                    Наши специалисты будут бороться за ваши права до
                    достижения желаемого вами результата в рамках закона.
                </p>

                <ProjectButton text="Заказать звонок" extraClass={styles['project-button']} onClick={openModal}></ProjectButton>
            </div>

            <img className={styles['home__main-image']} src="/MainPageIcon.svg" alt="" />
        </div>
    )

}

export default TitleBlock;