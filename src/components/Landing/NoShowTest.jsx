import React from 'react';
import IconButton from '../../../node_modules/@material-ui/core/IconButton';
import musical from '../../assets/icons/musical.svg';
import romance from '../../assets/icons/romance.svg';
import thriller from '../../assets/icons/thriller.svg';
import action from '../../assets/icons/action.svg';
import styles from './NoShow.module.css';


const NoShow = ({selectedAnswerThree, handleGoBack}) => {
    return(
        <div className={styles.noShowContainer}>
            <button 
                className = {styles.goBackButton}
                onClick = {handleGoBack}>Go back</button>
            <legend>Please don´t show anything with</legend>
            <fieldset >
                <div>
                <label htmlFor = 'thriller'>Thriller</label>
                    <IconButton
                        name = 'thriller'
                        value = 'thriller'
                        onClick = {selectedAnswerThree}>
                        <img                      
                            src = {thriller}
                            alt = 'thriller emoji'
                            height="87"
                            width="100"
                        />
                    </IconButton>             
                </div>
                <div>
                     <label htmlFor = 'romance'>Romance</label>
                    <IconButton
                        name = 'romance'
                        value='romance'
                        onClick= {selectedAnswerThree}>
                            <img 
                                src={romance} 
                                alt="romance"
                                height="87"
                                width="100" />
                    </IconButton>                  
                </div>
                <div>
                    <label htmlFor = 'action'>Action</label>
                    <IconButton
                        name = 'action'
                        value='action'
                        onClick= {selectedAnswerThree}>
                            <img 
                                src={action} 
                                alt="action"
                                height="87"
                                width="100" />
                    </IconButton>                     
                </div>
                <div>
                <label htmlFor = 'musical'>Musical</label>
                    <IconButton
                        name = 'musical'
                        value='musical'
                        onClick= {selectedAnswerThree}>
                            <img 
                                src={musical} 
                                alt="musical"
                                height="87"
                                width="100" />
                    </IconButton>                    
                </div>
            </fieldset>
        </div>
    )

};

export default NoShow;