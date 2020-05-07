import React, { useState } from 'react';
import styles from './SliderContainer.module.css';

import DetailCard from '../DetailCard/DetailCardComponent';

function Slider({data, width, height}) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [movieData, setMovieData] = useState({});

	const openModal = (element) => {
		setMovieData(element);
		setIsModalOpen(true);
	}

	const closeModal = () => {
		setMovieData({});
		setIsModalOpen(false);
	}

	const content =  data.map((element, index) => {
		const { title, imgURL } = element;

		return (
			<div key={element.id} className={styles.carouselTile} style={{'width': width, 'height': height}}>
				<img className={styles.img} src={imgURL} onClick={() => { openModal(element)}} />
			</div>
		);
	});
	return (
		<main className={styles.carousel}>
			<div className={styles.carouselRow}>
				{content}
			</div>
			{isModalOpen && (
				<div className={styles.overlay} onClick={()=>{setIsModalOpen(false)}}>
					<DetailCard movieData={movieData}/>
				</div >
			)}
		</main>
	);
}

export default Slider;
