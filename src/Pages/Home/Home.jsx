import React from 'react';
import Banner from './Banner';
import CompanySnapshot from './CompanySnapshot';
import ServicesOverview from './ServicesOverview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CompanySnapshot></CompanySnapshot>
            <ServicesOverview></ServicesOverview>
        </div>
    );
};

export default Home;