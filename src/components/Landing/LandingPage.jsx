import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import giveResultsByMood from '../../controller/mood';
import Slider from '../Slider/SliderContainer';

import styles from './Landing.module.css';
import Header from './HeaderComponent';
import MoodTest from './MoodTest';
import TimeTest from './TimeTest';
import NoShow from './NoShowTest'

import {mockData} from './mockDataInSlider';

const Landing = () => {
	// const { value, setValue } = useContext(ConfContext)
	// TODO: Using a new state to trigger the data fetching after when the quiz has ended
	const [testEnded, setTestEnded] = useState(false);
	// TODO: Renaming object properties to match back-end format {mood, time, not}
    const [value, setValue] = useState({
        mood: '',
        time: '',
        not: '',
    });
	const [view, setView] = useState(0);
	const [testResult, setTestResult] = useState({});
	const [sliderData, setSliderData] = useState(0);
	console.log(sliderData)
	let history = useHistory();

    const selectedAnswerOne = (event) => {
        const selectedValue = event.currentTarget.value;
        setValue({
            ...value,
            mood: selectedValue,
        });
        setView(1);
    }

    const selectedAnswerTwo = (event) => {
        const selectedValue = event.currentTarget.value;
        setValue({
            ...value,
            time: selectedValue,
        })

        setView(2);
    }

    // const history = useHistory();
    const selectedAnswerThree = (event) => {
        const selectedValue = event.currentTarget.value;
        setValue({
            ...value,
            not: selectedValue,
		});
		setTestEnded(true);

		//
	}

    const goBack = () => {
        const aux = view - 1;
        setView(aux);
	};

	useEffect(() => {
		if(testEnded) {
			giveResultsByMood(value).then( (response) => {
				console.log(response);
				//sending data
				history.push("/result");
			}).catch((error) => {
				console.error(error);
			});
		} else {
			//loading data from random
			const data = mockData // aqui va la funcion
			setSliderData(data);
		}
	}, [testEnded]);

    return(
        <>
        {view === 0
        ?
        (<div className= {styles.Container}>
            <Header />
            <MoodTest selectedAnswerOne= {selectedAnswerOne}/>
			<h3> Random suggestion </h3>
			{sliderData ? <Slider data={sliderData} width='125px' height='225px' /> : null}
        </div> )
        : null}
        { view === 1
        ?
        ( <TimeTest selectedAnswerTwo= {selectedAnswerTwo}  handleGoBack= {goBack}/>)
        : null}
        { view === 2
        ?
        ( <NoShow selectedAnswerThree = {selectedAnswerThree}  handleGoBack= {goBack}/>)
        : null}
      </>
    )
};

export default Landing;
