import React from 'react';
import {BiTimeFive} from 'react-icons/bi';
import logo1 from '../../images/logo-1.png';
import logo2 from '../../images/logo-2.png';
import logo3 from '../../images/logo-3.png';
import logo4 from '../../images/logo-4.png';
import logo5 from '../../images/logo-5.png';
import logo6 from '../../images/logo-6.png';
import logo7 from '../../images/logo-7.png'; 
import logo8 from '../../images/logo-8.webp';

function Jobs() {
  return (
    <div>
      <div className='jobsContainer flex items-center justify-center gap-10 flex-wrap py-10'>

        <div className='group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>

          <span className='flex justify-between items-center gap-4'>
            <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>Web Developer</h1>
            <span className='flex items-center text-[#ccc] gap-1'>
              <BiTimeFive/>Now
            </span>
          </span>

          <h6 className='text-[#ccc]'>Canada</h6>

          <p className='text-[#959595] text-[13px] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, blanditiis!</p>

          <div className='company flex items-center gap-2'>
            <img src={logo1} alt='' />
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default Jobs