import React from 'react';
import '../styles/CandidateCard.css';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from '@material-ui/core/CardMedia';

const CandidateCard = (props) => {

    return (
        <Card>
            <CardActionArea>
                {props.candidate.name}
                <CardMedia className='cardImages' image={props.candidate.image} />
            </CardActionArea>
        </Card>
    );
};

export default CandidateCard;