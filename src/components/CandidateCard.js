import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    card: {
        maxWidth: 150,
    },
    media: {
        height: 1000,
    },
});

const CandidateCard = (props) => {
    const classes = useStyles();

    return (
        <Card>
            <CardActionArea>
                {props.candidate.name}
                <CardMedia className={classes.media} image={props.candidate.image} />
            </CardActionArea>
        </Card>
    );
};

export default CandidateCard;