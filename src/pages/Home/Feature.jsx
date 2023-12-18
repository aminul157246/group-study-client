import img1 from '../../assets/images/phillosophy.jpg'
import img2 from '../../assets/images/ielts.jpg'
import img3 from '../../assets/images/gmat.jpg'
import img4 from '../../assets/images/mba.jpg'
import { useEffect, useState } from 'react';
import YoutubeFresh from './YoutubeFresh';


const Feature = () => {


    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false); 
      }, 1000); 
  
      // Clean up the timer on unmount or when isLoading changes
      return () => clearTimeout(timer);
    }, []);
  


    return (
         <div>
            
               
                <div className='my-12'>
        <h2 className='text-3xl text-center mb-4'>Our <span className='text-[#F2184F]'>Courses</span></h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>

{isLoading ? <YoutubeFresh/> : 
            <div className='flex-col lg:flex justify-center items-center  gap-4'>
                <div className='flex-1'>
                    <img className='rounded-lg'  src={img1} alt="" />
                </div>
                <div className='flex-1 space-y-2'> 
                    <h2 className='text-2xl font-bold'>Philosophy</h2>
                    <p>The study of the fundamental nature of knowledge, reality, and existence, especially when considered as an academic discipline.</p>
                    <button className='text-xl px-4 py-2 rounded-e-lg text-white bg-[#F2184F]'>Course Fee : 3400$</button>
                </div>
            </div>


    }

{isLoading ? <YoutubeFresh/> : 
            <div className='flex-col lg:flex justify-center items-center gap-4'>
                <div className='flex-1'>
                    <img className='rounded-lg' src={img2} alt="" />
                </div>
                <div className='flex-1 space-y-2'> 
                    <h2 className='text-2xl font-bold'>IELTS</h2>
                    <p>The study of the fundamental nature of knowledge, reality, and existence, especially when considered as an academic discipline.</p>
                    <button className='text-xl px-4 py-2 rounded-e-lg text-white bg-[#F2184F]'>Course Fee : 3400$</button>
                </div>
            </div>
}




{isLoading ? <YoutubeFresh/> : 
            <div className='flex-col  lg:flex justify-center items-center gap-4'>
                <div className='flex-1'>
                    <img className='rounded-lg' src={img3} alt="" />
                </div>
                <div className='flex-1 space-y-2'> 
                    <h2 className='text-2xl font-bold'>Regular MBA</h2>
                    <p>The study of the fundamental nature of knowledge, reality, and existence, especially when considered as an academic discipline.</p>
                    <button className='text-xl px-4 py-2 rounded-e-lg text-white bg-[#F2184F]'>Course Fee : 3400$</button>
                </div>
            </div>


}
{isLoading ? <YoutubeFresh/> : 
            <div className='flex-col lg:flex justify-center items-center gap-4'>
                <div className='flex-1'>
                    <img className='rounded-lg' src={img4} alt="" />
                </div>
                <div className='flex-1 space-y-2'> 
                    <h2 className='text-2xl font-bold'>GMAT</h2>
                    <p>The study of the fundamental nature of knowledge, reality, and existence, especially when considered as an academic discipline.</p>
                    <button className='text-xl px-4 py-2 rounded-e-lg text-white bg-[#F2184F]'>Course Fee : 3400$</button>
                </div>
            </div>
}
        </div>
        
        </div>
            
         </div>
    );
};

export default Feature;