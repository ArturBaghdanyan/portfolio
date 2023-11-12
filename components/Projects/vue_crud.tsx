import React from 'react'
import styles from './styles.module.scss';
import Link from 'next/link';

export const VueCrudProject = () => {
  return (
		<div className={styles.information}>
			<h1 className='text-2xl'>Vue_Crud</h1>
			<div className='border-l-2'>
				<p className={styles.information_text}>
					I designed and developed a CRUD (Create, Read, Update, Delete) 
					application using Vue 3. This project demonstrates my proficiency 
					in Vue.js and front-end web development. The application allows 
					users to perform CRUD operations on a specific dataset or resource, 
					showcasing my skills in managing state, routing, and building 
					interactive user interfaces.
				</p>
				<Link href='https://github.com/ArturBaghdanyan/N-K-task' target='_blank'>
					View Site
				</Link>
			</div>
	</div>
  )
}
