import Banner from './Banner';
import CallToAction from './CallToAction';
import CompanySnapshot from './CompanySnapshot';
import FeaturedProjects from './FeaturedProjects';
import SafetyQuality from './SafetyQuality';
import ServicesOverview from './ServicesOverview';
import StatsCounter from './StatsCounter';
import Testimonials from './Testimonials';
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
            <Testimonials></Testimonials>
            <CallToAction></CallToAction>
        </div>
    );
};

export default Home;