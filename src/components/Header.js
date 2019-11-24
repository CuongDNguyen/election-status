import React from 'react';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
const Header = () => {

    const candidateTabClick = () => {
        console.log(`candidate`);
    };

    const pollTabClick = () => {
        console.log(`poll`);
    };

    return (
        <div>
            <Tabs value={0}>
                <Tab value={0} label={`Candidates`} onClick={candidateTabClick} />
                <Tab value={1} label={`Polls`} onClick={pollTabClick} />
            </Tabs>
        </div>
    );
};

export default Header;