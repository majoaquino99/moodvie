import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import logo from '../../assets/icons/logo.svg';
import styles from './Landing.module.css';

const Header = ({classes}) => {
    return(
        <>
        <AppBar className = {classes.Header} position="static">
            <Toolbar variant="dense">      
                <img className= {styles.logo}
                    src={logo} 
                    alt="Logo"
                    height="100"
                    width="150"
                />
            </Toolbar>
        </AppBar>
        </>
        )
};

export default withStyles({
    Header: {
        backgroundColor: 'white',
        fontFamily: 'monospace', 
        color: '#443D67',
        display: 'flex',
        justifyContent: 'center',
        }
    }) (Header);