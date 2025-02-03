import React, { FC } from "react";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import { SwiperButtons } from "./swiper_click";
import { IProject } from "../../types/project-type";

import styles from "./styles.module.scss";
import "swiper/css";

type IProjectType = {
  project: IProject[];
};

const Projects: FC<IProjectType> = ({ project }) => {
  return (
    <Swiper navigation={true} className={styles.mySwiper}>
      {project.map((i) => (
        <SwiperSlide key={i.id}>
          <div className={`${styles.information} max-[500px]:text-start`}>
            <h1 className={styles.information_title}>{i.title}</h1>
            <div className={styles.information_column}>
              <p className={styles.information_column_text}>{i.description}</p>
              {i.items?.map((item) => (
                <ul key={item.id}>
                  <li>
                    <b>{item.title}</b>
                    {item.description}
                  </li>
                </ul>
              ))}
              {i.site && (
                <p className={styles.information_column_text}>
                  <Link href={i.site} target="_blank">
                    View Site: {i.site}
                  </Link>
                </p>
              )}
              <Link href={i.link} target="_blank">
                View Code: {i.link}
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <SwiperButtons />
    </Swiper>
  );
};

export default Projects;
