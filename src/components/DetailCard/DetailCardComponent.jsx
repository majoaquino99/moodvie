import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';
import mockImage from '../../assets/mocking.jpg'


const DetailCard = () => {
    const classes = useStyles();
    const [showOverview, setShowOverwiew] = useState(true);

    return (
        <Container className={classes.root} style={{ backgroundImage: 'url({mockImage})' }}>
            <Card className={classes.container}>
                <img 
                src={mockImage} 
                className={classes.media} 
                alt="Poster" 
                />
                <CardHeader
                title="Moonrise Kingdom"
                subheader="Comedy,Drama | (2012) | 94min."
                />
                <CardContent>
                <CardActions className={classes.buttons}>
                    <Button size="medium" style={{ color: yellow[700] }} onClick={ ()=> setShowOverwiew(true) }>
                    OVERVIEW
                    </Button>
                    <Button size="medium" style={{ color: yellow[700] }} onClick={ ()=> setShowOverwiew(false) }>
                    INFO
                    </Button>
                </CardActions>
                { showOverview ?
                <Typography variant="body1" color="textPrimary" component="p">
                    A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.
                </Typography>
                : null }
                { showOverview ? null :
                <section className={classes.section}>
                    <Typography className={classes.info} color="textSecondary" component="p">
                        Director: Wes Anderson  
                        <br/>
                        Writter: Wes Anderson
                        <br/>
                        Language: English
                    </Typography>
                    <div className={classes.score}>
                        <StarIcon style={{ color: yellow[700] }} fontSize="large"/>
                        <Typography variant="h5">
                            7.8
                        </Typography>
                    </div>
                </section>
                }
                </CardContent>
                <CardActions className={classes.buttons}>
                    <Button size="small" color="secondary" variant="outlined" className={classes.addList}>
                    ADD TO MY LIST
                    </Button>
                    <Button size="small" color="secondary" variant="outlined" className={classes.addList}>
                    GO BACK
                    </Button>
                </CardActions>
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
    buttons: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    section: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '5vw',
    },
    info: {
        fontSize: 15,
    },
    score: {
        display: 'flex',
        flexDirection: 'column ',
        marginLeft: '8vw'
    },
    addList: {
        marginTop: '12vw'
    },
    pos: {
        marginBottom: 20,
    },
    });

export default DetailCard;