import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import clock from '../../assets/icons/clock.png';

const TimeTest = ({selectedAnswerTwo}) => {
    return(
        <div>
            <legend>How much time do you have?</legend>
            <fieldset>
                <div>
                    <IconButton
                        value= {89}
                        onClick= {selectedAnswerTwo}>
                        Less than 90
                        <img
                            src = {clock}
                            alt = 'Clock'>
                        </img>
                    </IconButton> 
                </div>
                <div>
                    <IconButton
                        value= {90}
                        onClick= {selectedAnswerTwo}>
                        More than 90
                        <img
                            src = {clock}
                            alt = 'Clock'>
                        </img>
                    </IconButton> 
                </div>
            </fieldset>
        </div>
    )

};

export default TimeTest;