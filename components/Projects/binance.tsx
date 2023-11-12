import React from 'react'
import styles from './styles.module.scss';
import Link from 'next/link';

export const BinanceProject = () => {
  return (
	<div className={styles.information}>
		<h1 className='text-2xl'>Binance</h1>
		<div className='border-l-2'>
			<p className={styles.information_text}>
				I designed and developed a responsive web page using HTML, CSS, SCSS,
				Tailwind Css and React JS. 
				This project demonstrates my proficiency in front-end web development and 
				my ability to create user-friendly and visually appealing websites that adapt
				to various screen sizes and devices.
				Media queries were implemented to define specific styles for different screen 
				sizes, enabling the pages responsiveness.
			</p>
			<Link href='https://github.com/ArturBaghdanyan/Kiwi_task' target='_blank'>
				View Site
			</Link>
		</div>
</div>
  )
}
