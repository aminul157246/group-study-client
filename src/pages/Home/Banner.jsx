import banner1 from '../../assets/images/banner1.webp'
import banner2 from '../../assets/images/banner2.jpg'
import banner3 from '../../assets/images/banner3.jpg'
import banner4 from '../../assets/images/banner4.jpg'

const Banner = () => {
  return (
     
    <div className='dark:text-white '>
      <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">

        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner1})` }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-white">
            <div >
              <h1 className="mb-5 text-2xl lg:text-5xl font-bold">Welcome to <br /> <span className='text-[#F2184F]'> EduHub</span> </h1>
              <p className="mb-5  lg:text-xl">EduPoint is the international leader in teaching student to write effectively, <br /> learn from each other and think for themselves</p>
              <div className="flex gap-4">
                <button className="btn bg-[#F2184F] border-none  text-white  ">Read More</button>
                <button className="btn bg-[#F2184F] border-none  text-white ">Purchase Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">

        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner2})` }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-white">
            <div >
              <h1 className="mb-5 text-5xl font-bold">Welcome to <br /> <span className='text-[#F2184F]'> EduHub</span> </h1>
              <p className="mb-5 text-xl">EduPoint is the international leader in teaching student to write effectively, <br /> learn from each other and think for themselves</p>
              <div className="flex gap-4">
                <button className="btn bg-[#F2184F] border-none  text-white  ">Read More</button>
                <button className="btn bg-[#F2184F] border-none  text-white ">Purchase Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">

        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner3})` }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-white">
            <div >
              <h1 className="mb-5 text-5xl font-bold">Welcome to <br /> <span className='text-[#F2184F]'> EduHub</span> </h1>
              <p className="mb-5 text-xl">EduPoint is the international leader in teaching student to write effectively, <br /> learn from each other and think for themselves</p>
              <div className="flex gap-4">
                <button className="btn bg-[#F2184F] border-none  text-white  ">Read More</button>
                <button className="btn bg-[#F2184F] border-none  text-white ">Purchase Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">

        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner4})` }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-white">
            <div >
              <h1 className="mb-5 text-5xl font-bold">Welcome to <br /> <span className='text-[#F2184F]'> EduHub</span> </h1>
              <p className="mb-5 text-xl">EduPoint is the international leader in teaching student to write effectively, <br /> learn from each other and think for themselves</p>
              <div className="flex gap-4">
                <button className="btn bg-[#F2184F] border-none  text-white  ">Read More</button>
                <button className="btn bg-[#F2184F] border-none  text-white ">Purchase Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Banner;