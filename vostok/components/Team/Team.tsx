import styles from "./Team.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import { teamData } from './teamData'
import CounselorCard from "../CounselorCard/CounselorCard";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import cn from "classnames";

const Team = () => {

    return (
        <section className={styles.team}>
            <div className={cn("container", styles.team__container)}>
                <div className={styles['team__text-block']}>
                    <div className={styles.title}>
                        <h1>Команда</h1>
                        <h1 className={styles.title__small}>Профессионалов</h1>
                    </div>

                    <div className={styles.description}>
                        <p className="project-paragraph">
                            Наша команда состоит из преданных делу специалистов юриспруденции.
                        </p>
                        <p className="project-paragraph">
                            Каждый сотрудник обладает высокой квалификацией и большим опытом ведения дел в различных отраслях права.
                        </p>
                        <p className="project-paragraph">
                            Если вам нужно срочно составить договор,
                            иск в суд, или другой документ, то, что для ас
                            неразрешимая проблема — для нас повседневная ситуация.
                        </p>
                    </div>
                </div>
                <div className={styles['slider-container']}>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={50}
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true, el: styles['slider-pagination'] }}
                    >
                        {teamData.map(member => {
                            return <SwiperSlide key={member.lastName}>
                                <CounselorCard
                                    name={member.name}
                                    lastName={member.lastName}
                                    title={member.title}
                                    experienceStart={member.experienceStart}
                                    photo={member.photo}
                                />
                            </SwiperSlide>
                        })}
                    </Swiper>

                    <div className={styles['slider-pagination']}></div>
                </div>

            </div>
        </section>
    )
}

export default Team;