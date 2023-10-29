import styles from './styles.module.scss';
import { useState } from "react";
import { projectsList } from "../data/data";
import { projectsListType } from "../types/projectsList";
import { PropertyProject } from "./property";


const ProjectsList= () => {
  const [openProject, setOpenProject] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.projects}>
        {openProject && <PropertyProject />}

        <div className={styles.projects_list}>
          <h1 className='text-2xl'>Projects</h1>
          <div className={styles.projects_list_names}>
            {projectsList.map((item: projectsListType) => (
              <button 
                key={item.id} 
                onClick={() => setOpenProject(!openProject)}
              >
                {item.text}
              </button>
            ))}
          </div>
        </div>
      </div>
        <br />
      {/* <div className='text-red-500 fixed bottom-2 right-2'>
        <Link href="/">Come back initial page</Link>
      </div> */}
    </div>
  )
}
export default ProjectsList;