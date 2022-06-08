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
        <section className={styles.team} id='team-section'>
            <div className={cn("container", styles.team__container)}>
                <div className={styles['team__text-block']}>
                    <div className={styles.title}>
                        <h1>Команда</h1>
                        <h1 className={styles.title__small}>Профессионалов</h1>
                        <div className={styles['decorative-circle']}></div>

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
                            иск в суд, или другой документ, то, что для вас
                            неразрешимая проблема — для нас повседневная ситуация.
                        </p>

                    </div>
                </div>
                <div className={styles['slider-container']}>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={100}
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true, el: '.slider-pagination', dynamicBullets: true }}

                        breakpoints={{
                            450: {
                                slidesPerView: 1.15,
                                spaceBetween: 20
                            },

                            550: {
                                slidesPerView: 1.5,
                                spaceBetween: 40
                            },

                            768: {
                                slidesPerView: 1.4,
                                spaceBetween: 70
                            },
                            1100: {
                                slidesPerView: 1.8,
                                spaceBetween: 70
                            },
                            1400: {
                                slidesPerView: 1
                            }
                        }}
                    >
                        {teamData.map(member => {
                            return <SwiperSlide key={member.id}>
                                <CounselorCard
                                    id={member.id}
                                    name={member.name}
                                    lastName={member.lastName}
                                    title={member.title}
                                    experienceStart={member.experienceStart}
                                    photo={member.photo}
                                />
                            </SwiperSlide>
                        })}
                    </Swiper>
                    <div className="slider-pagination" id={styles['team-pagination']}></div>
                </div>

            </div>
        </section>
    )
}

export default Team;