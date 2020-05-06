import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';

const DetailCard = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Card className={classes.container}>
            {/*<img 
            src={mockImage} 
            className={classes.media} 
            alt="Poster" 
            />*/}
                <CardHeader
                title="Moonrise Kingdom"
                subheader="(2012) | Comedy, Drama | 94min."
                />
                <CardContent>
                <Typography variant="body2" color="textPrimary" component="p">
                    A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.
                </Typography>
                <section className={classes.section}>
                <Typography className={classes.info} color="textSecondary" component="p">
                    Director: Wes Anderson  
                    <br/>
                    Writter: Wes Anderson, Roman Coppola
                    <br/>
                    Language: English
                </Typography>
                <div className={classes.score}>
                    <StarIcon style={{ color: yellow[700] }}/>
                    <Typography variant="h6">
                        7.8
                    </Typography>
                </div>
                </section>
                </CardContent>
            </Card>
        </Container>
    );
}

const useStyles = makeStyles({
    root: {
        minWidth: 'auto',
        minHeight: '100vh',
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center'
        },
    container: {
        minWidth: 275,
        minHeight: '55vh',
        borderRadius: '3vw',
        boxShadow: '1px 4px 12px -3px rgba(51,51,51,0.8)',
        textAlign: 'center',
        margin: '0px 0px 0px 10px',
        paddingTop: '20vw',
        display: 'flex',
        flexFlow: 'column',
        alignSelf: 'flex-end',
        alignItems: 'center'
    },
    media: {
        width: '45vw',
        height: '65vw',
        borderRadius: '7vw',
        boxShadow: '1px 2px 8px -3px rgba(51,51,51,0.8)',
        position: 'absolute',
        top: '15vw'
    },
    title: {
        fontSize: 14,
    },
    section: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '10vw'
    },
    score: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
    },
    info: {
        textAlign: 'left',
        fontSize: 10
    },
    pos: {
        marginBottom: 20,
    },
    });

export default DetailCard;