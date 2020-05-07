import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import clockLess from '../../assets/icons/clockLess.svg';
import clockMore from '../../assets/icons/clockMore.svg';
import styles from './TimeTest.module.css';
import back from '../../assets/icons/back.svg'

const TimeTest = ({selectedAnswerTwo, handleGoBack}) => {
    return(
        <div className= {styles.timeContainer}>
            <IconButton 
                className= {styles.goBackButton}
                onClick={handleGoBack}>
                <img 
                    src = {back} 
                    alt= 'Back'
                    height='40'
                    width='40'
                /></IconButton>
            <legend>How much time do you have?</legend>
            <fieldset>
                <div>
                    <IconButton
                        value= {90}
                        onClick= {selectedAnswerTwo}>
                        <img                      
                            src = {clockLess}
                            alt = 'Less than 90 min'
                            height="150"
                            width="150"
                        />
                    </IconButton> 
                </div>
                <div>
                    <IconButton
                        value= {300}
                        onClick= {selectedAnswerTwo}>
                        <img
                            src = {clockMore}
                            alt = 'More than 90 min'
                            height="150"
                            width="150">
                        </img>
                    </IconButton> 
                </div>
            </fieldset>
        </div>
    )
};

export default TimeTest;