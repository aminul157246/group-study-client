import bg from "../assets/images/login.webp"
const Background = () => {
    return (
        <>
        <div
          className="relative h-[60vh] md:h-[60vh] lg:h-[70vh]" 
          style={{
            backgroundImage: `url(${bg})`, 
          }}
        >
          <div
            className="absolute inset-0 bg-black opacity-60" 
          ></div>
         
        </div>
      </>
  
    );
};

export default Background;