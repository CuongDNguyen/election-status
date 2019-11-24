import React from 'react';
import Header from "../components/Header";
import CandidateContainer from "../components/CandidateContainer"
import Footer from "../components/Footer";

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <CandidateContainer />
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default Home;