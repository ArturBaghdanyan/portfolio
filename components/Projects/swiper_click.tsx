import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useSwiper } from "swiper/react";

import styles from "./styles.module.scss";

export const SwiperButtons = () => {
  const swiper = useSwiper();

  return (
    <div className={styles.click}>
      <button onClick={() => swiper.slidePrev()}>
        <FaChevronLeft />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <FaChevronRight />
      </button>
    </div>
  );
};
