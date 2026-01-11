import Banner from './Banner';
import CompanySnapshot from './CompanySnapshot';
import FeaturedProjects from './FeaturedProjects';
import SafetyQuality from './SafetyQuality';
import ServicesOverview from './ServicesOverview';
import StatsCounter from './StatsCounter';
import WhyChooseUs from './WhyChooseUs';
import WorkProcess from './WorkProcess';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CompanySnapshot></CompanySnapshot>
            <ServicesOverview></ServicesOverview>
            <WhyChooseUs></WhyChooseUs>
            <StatsCounter></StatsCounter>
            <FeaturedProjects></FeaturedProjects>
            <WorkProcess></WorkProcess>
            <SafetyQuality></SafetyQuality>
        </div>
    );
};

export default Home;