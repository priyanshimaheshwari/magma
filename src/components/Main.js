import React from 'react'
import Left from './Left'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {BiBuildings} from 'react-icons/bi'
import {GrLocation} from 'react-icons/gr'

const main = () => {
  return (
    
         <div className='bg-blue-200 h-screen w-full flex'>
             <Left />
             <div className='flex flex-col'>
             <div className='flex mt-8 gap-2'>
                 <AiOutlineArrowLeft size={25}/> Back to dashboard
             </div>
             <div className='flex flex-col'>
             <div className=' bg-white h-[150px] w-[950px] rounded-xl mt-4'>
                 <div className='p-4 text-4xl'>One Thousand Museum</div>
                 </div><div className='bg-white h-[50px] mt-1 rounded-xl w-full'>
                     <div className='flex'>
                         <div className='pt-2 pl-2'>
                             <BiBuildings size={30} /></div><div className='flex flex-col pl-4'><p className='text-gray-600'>Type</p><p className='f'>Residential</p> </div>
                             <div className='pt-2 pl-10'>
                             <GrLocation size={30} /></div><div className='flex flex-col pl-4'><p className='text-gray-600'>Location</p><p className=''>1000 Biscayne Blvd, Miami, FL 33132, United States</p> </div>
                             </div>
                             <img className='w-[950px] h-[400px] mt-4 rounded-xl' src='https://b386363e680359b5cc19-97ec1140354919029c7985d2568f0e82.ssl.cf1.rackcdn.com/assets/uploads/luxury_buildings/luxury_pic/photo/60656/optimized_66c3f2c04a718247ee27cfddf7d39122.jpg' alt='/' />
                                 </div></div></div>
    </div>
  )
}

export default main