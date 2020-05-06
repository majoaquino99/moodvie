import React from 'react';
import stressed from '../../assets/icons/stressed.png';
import chilling from '../../assets/icons/chilling.png';
import bored from '../../assets/icons/bored.png';
import insomnia from '../../assets/icons/insomnia.png';
import lowmood from '../../assets/icons/lowmood.png';
import IconButton from '../../../node_modules/@material-ui/core/IconButton';
import styles from './MoodTest.module.css';


const MoodTest = ({selectedAnswerOne}) => {
    return(
        <div className = {styles.moodContainer}>
            <legend>How are you feeling?</legend> 
            <fieldset>  
                      
                <div>
                    <label htmlFor = 'Stressed'>Stressed</label>
                    <IconButton
                    name = 'Stressed'
                    value = 'STRESSED'
                    onClick = {selectedAnswerOne}
                > 
                        <img 
                            className = {styles.emoji}                        
                        src = {stressed}
                        alt = 'Stressed emoji'
                        /> 
                    </IconButton>
                    <label htmlFor = 'chilling'>Chilling</label>
                    <IconButton
                        name = 'chilling'
                        value = 'JUST_CHILLING'
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
                    value = 'BOREDOM'
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
                    value= 'INSOMIA'
                    onClick = {selectedAnswerOne}>
                        <img 
                            className = {styles.emoji}                        
                            src = {insomnia}
                            alt = 'Insomnia emoji'
                        />  
                    </IconButton>
                    <label htmlFor = 'lowmood'>Low mood</label>
                    <IconButton
                        name = 'lowmood'
                        value = 'LOW_MOOD'
                        onClick = {selectedAnswerOne}>
                        <img 
                            className = {styles.emoji}                        
                            src = {lowmood}
                            alt = 'lowmood emoji'
                        />
                    </IconButton>
                </div>                    
            </fieldset>
        </div>
    )
};

export default MoodTest;