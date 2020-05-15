import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import randomSelected from '../../controller/randomSelected';
import Slider from '../Slider/SliderContainer';

import styles from './Landing.module.css';
import Header from './HeaderComponent';
import MoodTest from './MoodTest';
import TimeTest from './TimeTest';
import NoShow from './NoShowTest';

const Landing = () => {
	// const { value, setValue } = useContext(ConfContext)
	// TODO: Using a new state to trigger the data fetching after when the quiz has ended
	const [testEnded, setTestEnded] = useState(false);
	// TODO: Renaming object properties to match back-end format {mood, time, blacklist}
    const [value, setValue] = useState({
        mood: '',
        time: '',
        blacklist: '',
    });
	const [view, setView] = useState(0);
	const [testResult, setTestResult] = useState({});
	const [sliderData, setSliderData] = useState(0);
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
            blacklist: selectedValue,
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
			history.push({
				pathname: '/result',
				state: { value }
			});
		} else {
			randomSelected().then( (response) => {
				setSliderData(response);
			}).catch((error) => {
				console.error(error);
			});
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
