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
import { useEffect, useRef, useState } from "react";

const Team = () => {

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
        <section className={styles.team} id='team-section'>
            <div className={cn("container", styles.team__container)}>
                <div className={styles['team__text-block']}>

                    <h2 className={cn(styles.title, { ['intersecting']: isIntersecting })}>
                        <div className={'text-animation'}>
                            <span className={'text-animation__text'}>Команда</span>
                            <div className={cn('text-animation__cover', 'text-animation__cover_left')}></div>
                        </div>
                        <div className={'text-animation'}>
                            <span className={cn(styles.title__small, 'text-animation__text')}>Профессионалов</span>
                            <div className={cn('text-animation__cover', 'text-animation__cover_right')}></div>
                        </div>
                        <div className={styles['decorative-circle']}></div>

                    </h2>

                    <div className={styles.description} ref={sectionRef}>
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