import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import logo1 from '../../images/logo-1.png';
import logo2 from '../../images/logo-2.png';
import logo3 from '../../images/logo-3.png';
import logo4 from '../../images/logo-4.png';
import logo5 from '../../images/logo-5.png';
import logo6 from '../../images/logo-6.png';
import logo7 from '../../images/logo-7.png';
import logo8 from '../../images/logo-8.webp';


const Data = [
  {
    id: 1,
    image: logo1,
    title: 'Web Developer',
    time: 'Now',
    location: 'Delhi',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, blanditiis!',
    company: 'Novac Linus Co.'
  },
  {
    id: 2,
    image: logo2,
    title: 'UI Developer',
    time: '14Hrs',
    location: 'Jaipur',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, blanditiis!',
    company: 'Liquid Accessments'
  },
  {
    id: 3,
    image: logo3,
    title: 'Software Eng.',
    time: '10Hrs',
    location: 'Bangalore',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, blanditiis!',
    company: 'Huawae'
  },
  {
    id: 4,
    image: logo4,
    title: 'MERN Dev.',
    time: '10Hrs',
    location: 'Noida',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, blanditiis!',
    company: 'web Tech Agency'
  },
  {
    id: 5,
    image: logo5,
    title: 'MEAN Dev.',
    time: '10Hrs',
    location: 'Hydrabad',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, blanditiis!',
    company: 'iSkyler Technology'
  },
  {
    id: 6,
    image: logo6,
    title: 'MEAN Dev.',
    time: '10Hrs',
    location: 'Hydrabad',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, blanditiis!',
    company: 'Durapaid Tech'
  },
  {
    id: 7,
    image: logo7,
    title: 'MEAN Dev.',
    time: '10Hrs',
    location: 'Hydrabad',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, blanditiis!',
    company: 'Adobe Tech'
  },
  {
    id: 8,
    image: logo8,
    title: 'MEAN Dev.',
    time: '10Hrs',
    location: 'Hydrabad',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, blanditiis!',
    company: 'Durapaid Tech'
  },
]
function Jobs() {
  return (
    <div>
      <div className='jobsContainer flex items-center justify-center gap-10 flex-wrap py-10'>

        {
          Data.map(({ id, image, title, time, location, desc, company }) => {
            return (
              <div key={id} className='group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>

                <span className='flex justify-between items-center gap-4'>
                  <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
                  <span className='flex items-center text-[#ccc] gap-1'>
                    <BiTimeFive />{time}
                  </span>
                </span>

                <h6 className='text-[#ccc]'>{location}</h6>

                <p className='text-[#959595] text-[13px] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>{desc}</p>

                <div className='company flex items-center gap-2'>
                  <img src={image} alt='Company Logo' className='w-[20%]' />
                  <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                </div>

                <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>
                  Apply Now
                </button>

              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Jobs