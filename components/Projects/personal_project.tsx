import React from 'react'
import styles from './styles.module.scss';
import Link from 'next/link';

export const PersonalProject = () => {
  return (
	<div className={styles.information}>
		<h1 className='text-2xl'>Personal Website</h1>
		<div className='border-l-2 ml-2'>
			<p className={styles.information_text}>
				I have been working on a personal website project that showcases my skills 
				and projects. The website is built using a combination of HTML, CSS, SCSS, 
				and JavaScript. It is designed to be fully responsive, ensuring a seamless 
				experience across various devices and screen sizes.
				Additionally, I have implemented a light and dark mode feature, allowing 
				users to switch between themes based on their preferences.
				This project not only highlights my technical abilities but also 
				demonstrates my commitment to creating user-friendly and accessible web 
				applications.
			</p>
			<Link href='https://github.com/ArturBaghdanyan/personal_website' target='_blank'>
				View Site
			</Link>
		</div>
</div>
  )
}
