import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Landing.module.css';
import Header from './HeaderComponent';
import MoodTest from './MoodTest';
import TimeTest from './TimeTest';
import NoShow from './NoShowTest'
import Carrousel from './CarrouselComponent';

const Landing = () => {
    const [value, setValue] = useState({
        mood: '',
        time: '',
        noShow: '',
    });
    const [view, setView] = useState(0);

    const selectedAnswerOne = (event) => {
        const selectedValue = event.currentTarget.value;
        setValue({
            mood: selectedValue,
            time: value.time,
            noShow: value.noShow,
        });
        setView(1);        
    }

    const selectedAnswerTwo = (event) => {
        const selectedValue = event.currentTarget.value;
        setValue({
            mood: value.mood,
            time: selectedValue,
            noShow: value.noShow,
        })
     
        setView(2); 
    }
      /*  const aux = view - 1;
        setView(aux); */

    const history = useHistory();
    const selectedAnswerThree = (event) => {
        const selectedValue = event.currentTarget.value;
        setValue({
            mood: value.mood,
            time: value.time,
            noShow: selectedValue,
        }) 
        history.push('/result');      
        console.log(value);
    }

    return(
        <main className={styles.Container}>
        {view === 0 
        ? 
        (<div>
            <Header />
            <MoodTest selectedAnswerOne= {selectedAnswerOne}/>
            <Carrousel />
        </div> )
        : null}
        { view === 1
        ?
        ( <TimeTest selectedAnswerTwo= {selectedAnswerTwo}/>)
        : null}
        { view === 2
        ?
        ( <NoShow selectedAnswerThree = {selectedAnswerThree}/>)
        : null}  
    </main>     
    )
};

export default Landing;