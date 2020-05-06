import React from 'react';
import styles from './SliderContainer.module.css';

function Slider({data, width, height}) {
	const content =  data.map((element, index) => {
		const { title, imgURL } = element;
		return (
			<div key={element.id} className={styles.carouselTile} style={{'width': width, 'height': height}}>
				<img className={styles.img} src={imgURL} onClick={() => { alert('Open movie detail on modal')}} />
			</div>
		);
	});
	return (
		<main className={styles.carousel}>
			<div className={styles.carouselRow}>
				{content}
			</div>
		</main>
	);
}

export default Slider;
