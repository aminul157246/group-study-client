import banner from '../assets/images/clean banner.jpg'
import Container from '../components/ui/Container';


const Home = () => {
    return (
        
           <Container>
             <div className='flex my-12'>
          <div className='flex-1'>
          <h1 className='text-7xl font-bold mb-4'>Quality Cleaning <br />   <span className='text-yellow-400'>for Your Home</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cum placeat odit dolore modi molestias? Accusamus, libero. Nobis, dolor culpa!</p>
          <div className="divider"></div>
          <div>
          <div className="avatar-group -space-x-6">
  <div className="avatar">
    <div className="w-12">
      <img src="https://media.istockphoto.com/id/1479648645/photo/close-up-portrait-of-a-beautiful-female-creative-specialist-with-curly-hair-smiling-young.webp?b=1&s=170667a&w=0&k=20&c=B5_mI4RTR-X5sJHW6D2mTnNlAfZZe1Dgt3sbbAKsjT4=" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://media.istockphoto.com/id/1479648645/photo/close-up-portrait-of-a-beautiful-female-creative-specialist-with-curly-hair-smiling-young.webp?b=1&s=170667a&w=0&k=20&c=B5_mI4RTR-X5sJHW6D2mTnNlAfZZe1Dgt3sbbAKsjT4=" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://media.istockphoto.com/id/1479648645/photo/close-up-portrait-of-a-beautiful-female-creative-specialist-with-curly-hair-smiling-young.webp?b=1&s=170667a&w=0&k=20&c=B5_mI4RTR-X5sJHW6D2mTnNlAfZZe1Dgt3sbbAKsjT4=" />
    </div>
  </div>
  <div className="avatar placeholder">
    <div className="w-12 bg-neutral-focus text-neutral-content">
      <span>+3</span>
    </div>
  </div>
</div>
          </div>
          <p>Rated 5/5</p>
          </div>
           <div className='flex-1'> 
            <img src={banner} alt="" />
           </div>

        </div>
           </Container>
    );
};

export default Home;