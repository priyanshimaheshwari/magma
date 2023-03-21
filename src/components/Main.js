import React from 'react'
import Left from './Left'
import Right from './Right'
import {AiOutlineArrowLeft,AiOutlineArrowsAlt} from 'react-icons/ai'
import {BiBuildings,BiLoaderCircle} from 'react-icons/bi'
import {GrLocation} from 'react-icons/gr'
import {BsThreeDots} from 'react-icons/bs'

const main = () => {
  return (
    
         <div className='bg-blue-100 h-full w-full flex'>
             <Left />
             <div className='flex flex-col'>
             <button className='flex mt-8 gap-2'>
                 <AiOutlineArrowLeft size={25}/> Back to dashboard
             </button>
             <div className='flex flex-col'>
             <div className=' bg-white h-[24%] w-full rounded-xl mt-4'>
              <div className='p-4 text-4xl'>One Thousand Museum</div>
             </div><div className='bg-white h-[8%] mt-1 rounded-xl w-full'>
            <div className='flex'>
            <div className='pt-2 pl-2'>
             <BiBuildings size={30} /></div><div className='flex flex-col pl-4'><p className='text-gray-600'>Type</p><p className='f'>Residential</p> </div>
            <div className='pt-2 pl-10'>
             <GrLocation size={30} /></div><div className='flex flex-col pl-4'><p className='text-gray-600'>Location</p><p className=''>1000 Biscayne Blvd, Miami, FL 33132, United States</p> </div>
 </div><div className='relative'>
 <div className='absolute flex'><button className=' bg-blue-600 m-4 p-2 rounded-xl text-white flex gap-2'><BiLoaderCircle size={25}/>Enter 3D model</button>
<div className='m-4 pl-[500px]'><div className='flex gap-4  '><div className='bg-gradient-to-r from-white to-blue-200 p-1 rounded-md'>Magma Index: 60%</div><div className='bg-blue-200 rounded-md'><BsThreeDots size={30}/></div></div></div>
</div>
<div className='absolute mt-[300px] ml-[800px] '><div className='relative'><button className='absolute '><AiOutlineArrowsAlt /></button><img className='w-[150px] h-[118px] rounded-md' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjBd8p_SGaTBnhFxlcQjDWL5g6q0sagRxeKzNAOhBjPVtAfZas5k6ZmhYtqh0nqhEMBHM&usqp=CAU' alt='/' /></div></div>
            <img className='w-[950px] h-[450px] mt-4 rounded-xl ' src='https://b386363e680359b5cc19-97ec1140354919029c7985d2568f0e82.ssl.cf1.rackcdn.com/assets/uploads/luxury_buildings/luxury_pic/photo/60656/optimized_66c3f2c04a718247ee27cfddf7d39122.jpg' alt='/' />

</div></div></div></div>
<Right />
    </div>
  )
}

export default main