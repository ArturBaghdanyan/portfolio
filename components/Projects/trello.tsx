import React from 'react'
import styles from './styles.module.scss';
import Link from 'next/link';

export const TrelloProject = () => {
  return (
		<div className={styles.information}>
			<h1 className='text-2xl'>Trello</h1>
			<div className='border-l-2'>
				<p className={styles.information_text}>
				A web-based task management application inspired by Trello, built using 
				React.js. This project showcases various React concepts and best practices,
				such as components, state management, and interactions with external APIs.
				Developed sales tracking capabilities, enabling data-driven decisionmaking 
				for the sales team. Integrated API requests (GET, POST, PUT,DELETE) to 
				communicate with the backend server for retrieving, creating, updating, 
				and deleting tasks. Implemented a responsive user interface using Tailwind CSS
				utility classes, ensuring the application works seamlessly across different 
				devices and screen sizes.
				</p>
				<Link href='https://github.com/ArturBaghdanyan/trello' target='_blank'>
					View Site
				</Link>
			</div>
	</div>
  )
}
