
import Container from '../../components/ui/Container';
import Banner from './Banner';
import Faq from './Faq';
import Feature from './Feature';


const Home = () => {
    return (
        
           <Container>
             <Banner></Banner>
             <Feature></Feature>
             <Faq></Faq>
           </Container>
    );
};

export default Home;