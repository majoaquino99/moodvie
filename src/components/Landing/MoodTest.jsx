import React from 'react';
import lowmood from '../../assets/icons/lowmood.png';
import chilling from '../../assets/icons/chilling.png';
import bored from '../../assets/icons/bored.png';
import insomnia from '../../assets/icons/insomnia.png';
import sad from '../../assets/icons/sad.png';
import IconButton from '../../../node_modules/@material-ui/core/IconButton';
import styles from './MoodTest.module.css';


const MoodTest = ({selectedAnswerOne}) => {
    return(
        <div>
            <legend>How are you feeling?</legend> 
            <fieldset className = {styles.moodContainer}>  
                      
                <div>
                    <label htmlFor = 'lowMood'>Low Mood</label>
                    <IconButton
                    name = 'lowMood'
                    value = 'lowMood'
                    onClick = {selectedAnswerOne}
                > 
                        <img 
                            className = {styles.emoji}                        
                        src = {lowmood}
                        alt = 'Lowmood emoji'
                        /> 
                    </IconButton>
                    <label htmlFor = 'chilling'>Chilling</label>
                    <IconButton
                        name = 'chilling'
                        value = 'chilling'
                        onClick = {selectedAnswerOne}
                        >
                        <img 
                            className = {styles.emoji}                        
                        src = {chilling}
                        alt = 'Chilling emoji'
                        />
                    </IconButton>
                </div>
                <div>
                    <label htmlFor = 'bored'>Bored</label>
                    <IconButton
                    name = 'bored'
                    value = 'bored'
                    onClick = {selectedAnswerOne}>                   
                        <img 
                            className = {styles.emoji}                        
                            src = {bored}
                            alt = 'Bored emoji'
                        />
                    </IconButton>                
                </div>
                <div>
                    <label htmlFor = 'insomnia'>Insomnia</label>
                    <IconButton
                    name = 'insomnia'
                    value= 'insomnia'
                    onClick = {selectedAnswerOne}>
                        <img 
                            className = {styles.emoji}                        
                            src = {insomnia}
                            alt = 'Insomnia emoji'
                        />  
                    </IconButton>
                    <label htmlFor = 'sad'>Sad</label>
                    <IconButton
                        name = 'sad'
                        value = 'sad'
                        onClick = {selectedAnswerOne}>
                        <img 
                            className = {styles.emoji}                        
                            src = {sad}
                            alt = 'Sad emoji'
                        />
                    </IconButton>
                </div>                    
            </fieldset>
        </div>
    )
};

export default MoodTest;