import React from 'react'
import styles from './styles.module.scss';
import Link from 'next/link';

export const PropertyProject = () => {
  return (
		<div className={styles.projects_fraud}>
			<h1 className='text-2xl'>Property Fraud</h1>
			<div className='border-l-2'>
				<p className={styles.text}>
					Collaborated with a team of developers to create a property-fraud
					application using React with TypeScript and Tailwind CSS.
					Implemented responsive design principles to ensure the application
					adapts seamlessly across various devices and screen sizes.
					Moreover, responsive design was a core focus throughout the project. 
					We employed responsive media queries to tailor the application&#39;s 
					layout and content for various devices and screen sizes.
				</p>
				<Link href='https://github.com/ArturBaghdanyan/property_fraud' target='_blank'>
					View Site
				</Link>
			</div>
	</div>
  )
}
