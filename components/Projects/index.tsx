import styles from './styles.module.scss';
import { PropertyProject } from "./property";
import { TrelloProject } from './trello';
import { GarantProject } from './garant';
import { VueCrudProject } from './vue_crud';
import { PersonalProject } from './personal_project';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { SwiperButtons } from './swiper_click';

const ProjectsList = () => {

  return (
    <>
    <Swiper 
      navigation={true} 
      className={styles.mySwiper}
    >
      <SwiperSlide><PropertyProject /></SwiperSlide>
      <SwiperSlide><TrelloProject /></SwiperSlide>
      <SwiperSlide><GarantProject /></SwiperSlide>
      <SwiperSlide><VueCrudProject /></SwiperSlide>
      <SwiperSlide><PersonalProject /></SwiperSlide> 
      <SwiperButtons />
    </Swiper>
    </>
  )
}
export default ProjectsList;