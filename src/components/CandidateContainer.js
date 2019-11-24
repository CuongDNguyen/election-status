import React from 'react';
import CandidateCard from "./CandidateCard";

const CandidateContainer = () => {
    const currentCandidates =
        [
            {
                name: `Andrew Yang`,
                id: `1`,
                image: `./assets/Andrew_Yang.png`
            },
            {
                name: `Bernie Sanders`,
                id: `2`,
                image: `./assets/Bernie_Sanders.jpg`
            },
            {
                name: `Joe Biden`,
                id: `3`,
                image: `./assets/Joe_Biden.png`
            },
            {
                name: `Cory Booker`,
                id: `4`,
                image: `./assets/Cory_Booker.jpg`
            },
            {
                name: `Pete Buttigieg`,
                id: `5`,
                image: `./assets/Pete_Buttigieg.jpg`
            },
            {
                name: `Kamala Harris`,
                id: `6`,
                image: `./assets/Kamala_Harris.png`
            },
            {
                name: `Tulsi Gabbard`,
                id: `7`,
                image: `./assets/Tulsi_Gabbard.jpg`
            },
            {
                name: `Amy Klobuchar`,
                id: `8`,
                image: `./assets/Amy_Klobuchar.jpg`
            },
            {
                name: `Tom Steyer`,
                id: `9`,
                image: `./assets/Tom_Steyer.jpg`
            },
            {
                name: `Elizabeth Warren`,
                id: `10`,
                image: `./assets/Elizabeth_Warren.jpg`
            }];

    return (
        currentCandidates.map(candidate => {
            return <CandidateCard candidate={candidate} key={candidate.id} image={candidate.image}/>
        })
    );
};

export default CandidateContainer;