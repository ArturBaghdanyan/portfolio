import React from 'react'
import styles from './styles.module.scss';
import Link from 'next/link';

export const GarantProject = () => {
  return (
	<div className={styles.information}>
		<h1 className='text-2xl'>Garant Logistics</h1>
		<div className='border-l-2 ml-2'>
			<p className={styles.information_text}>
			Collaborating closely with UI/UX designers, I&#39;ve brought their vision to life by creating a responsive web design using HTML, CSS, SCSS, and JavaScript. This project showcases my ability to translate design concepts into functional and visually appealing web pages.
			This project not only highlights my technical skills but also underscores my collaborative approach in working alongside designers to realize their creative vision. Together, we&#39;ve created a web page that harmonizes aesthetics and functionality, leaving a lasting impression on visitors.
			</p>
			<Link href='https://github.com/ArturBaghdanyan/garant_logistics' target='_blank'>
				View Site
			</Link>
		</div>
</div>
  )
}
