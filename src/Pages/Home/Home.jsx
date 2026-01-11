import React from 'react';
import Banner from './Banner';
import CompanySnapshot from './CompanySnapshot';
import ServicesOverview from './ServicesOverview';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CompanySnapshot></CompanySnapshot>
            <ServicesOverview></ServicesOverview>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;