
import Container from '../../components/ui/Container';
import Banner from './Banner';
import ChatBox from './ChatBox';
import Faq from './Faq';
import Feature from './Feature';


const Home = () => {
    return (
        
           <div>
            <Container>
             <Banner ></Banner>
             <Feature></Feature>
             <Faq></Faq>
           <ChatBox></ChatBox>
           </Container>

           </div>
    );
};

export default Home;