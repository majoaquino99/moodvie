import React, { useEffect, useState } from 'react';

import giveResults from '../controller/mood';

import { ResultsContainer } from '../components/Results';

function Result(props) {
	const [sliderData, setSliderData ] = useState([]);

	useEffect(() => {
		giveResults(props.location.state.value).then( (response) => {
			setSliderData(response);
		}).catch((error) => {
			console.error(error);
		});
	}, []);

	return (
		<ResultsContainer testResults={sliderData} /> // testResults={testResults}
	);
}

export default Result;
