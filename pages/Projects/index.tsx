import styles from './styles.module.scss';
import { useState } from "react";
import { projectsList } from "../data/data";
import { projectsListType } from "../types/projectsList";
import { PropertyProject } from "./property";
import { TrelloProject } from './trello';
import { BinanceProject } from './binance';
import { VueCrudProject } from './vue_crud';

const ProjectsList = () => {
  const [isOpenProperty, setIsOpenProperty] = useState(false);
  const [isOpenTrello, setIsOpenTrello] = useState(false);
  const [isOpenBinance, setIsOpenBinance] = useState(false);
  const [isOpenVue, setIsOpenVue] = useState(false);
  
  const onCardAction = (key: string) => {
    switch (key) {
      case 'property':
        setIsOpenProperty(!isOpenProperty);
        break;
      case 'trello':
        setIsOpenTrello(!isOpenTrello);
        break;
      case 'binance':
        setIsOpenBinance(!isOpenBinance);
        break;
      case 'vue_crud':
        setIsOpenVue(!isOpenVue);
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.projects}>
        <div className={styles.projects_list}>
          <h1 className='text-2xl'>Projects</h1>
          <div className={styles.projects_list_names}>
            {projectsList.map((item: projectsListType) => (
              <button 
                key={item.id} 
                onClick={() => onCardAction(item.key)}
              >
                {item.text}
              </button>
            ))}
          </div>
        </div>
      </div>
      {isOpenProperty && <PropertyProject />}
      {isOpenTrello && <TrelloProject />}
      {isOpenBinance && <BinanceProject />}
      {isOpenVue && <VueCrudProject />}
    </div>
  )
}
export default ProjectsList;