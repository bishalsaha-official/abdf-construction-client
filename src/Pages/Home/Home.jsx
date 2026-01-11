import Banner from './Banner';
import CompanySnapshot from './CompanySnapshot';
import FeaturedProjects from './FeaturedProjects';
import ServicesOverview from './ServicesOverview';
import StatsCounter from './StatsCounter';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CompanySnapshot></CompanySnapshot>
            <ServicesOverview></ServicesOverview>
            <WhyChooseUs></WhyChooseUs>
            <StatsCounter></StatsCounter>
            <FeaturedProjects></FeaturedProjects>
        </div>
    );
};

export default Home;