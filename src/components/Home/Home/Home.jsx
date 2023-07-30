import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Tools from '../Tools/Tools';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Reviews from '../Reviews/Reviews';
import OverView from '../OverView/OverView';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <OverView></OverView>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;