import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ResultsContainer.module.css';

//import Button from '@material-ui/core/Button';
import logo from '../../assets/images/logo.svg';
import home from '../../assets/icons/home.svg';
import Slider from '../Slider';

function ResultsContainer({testResults}) {
	return (
		<div className={styles.container}>
			<header>
				<img className={styles.logo} src={logo} />
			</header>
			<Slider data={testResults} width='280px' height='420px'/>
			<footer>
				<Link to="/"> <img className={styles.home} src={home} /></Link>
			</footer>
		</div>
	);
}

export default ResultsContainer;
