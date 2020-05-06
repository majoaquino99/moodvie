import React, { useState } from 'react';
import styles from './Landing.module.css';
import Header from './HeaderComponent';
import MoodTest from './MoodTest';
import TimeTest from './TimeTest';
import NoShow from './NoShowTest'

const Landing = () => {
    // const { value, setValue } = useContext(ConfContext)
    const [value, setValue] = useState({
        feeling: '',
        RUNTIME: '',
        NO_SHOW: '',
    });
    console.log(value);
    const [view, setView] = useState(0);

    const selectedAnswerOne = (event) => {
        const selectedValue = event.currentTarget.value;
        setValue({
            ...value,
            feeling: selectedValue,
        });
        setView(1);        
    }

    const selectedAnswerTwo = (event) => {
        const selectedValue = event.currentTarget.value;
        setValue({
            ...value,
            RUNTIME: selectedValue,
        })
     
        setView(2); 
    }
      /*  const aux = view - 1;
        setView(aux); */

    // const history = useHistory();
    const selectedAnswerThree = (event) => {
        const selectedValue = event.currentTarget.value;
        setValue({
            ...value,
            NO_SHOW: selectedValue,
        }) 
        // history.push('/result');      
    }
    const goBack = () => {
        const aux = view - 1;
        setView(aux);
    };

    return(
        <>
        {view === 0 
        ? 
        (<div className= {styles.Container}>
            <Header />
            <MoodTest selectedAnswerOne= {selectedAnswerOne}/>
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