import styles from './styles.module.scss';
import { PropertyProject } from "./property";
import { TrelloProject } from './trello';
import { BinanceProject } from './binance';
import { VueCrudProject } from './vue_crud';
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
      <SwiperSlide><BinanceProject /></SwiperSlide>
      <SwiperSlide><VueCrudProject /></SwiperSlide> 
      <SwiperButtons />
    </Swiper>
    </>
  )
}
export default ProjectsList;