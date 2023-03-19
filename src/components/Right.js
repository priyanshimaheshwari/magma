import React from 'react'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {CgProfile} from 'react-icons/cg'
import {BsArrowUpRight} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
import messages from '../assets/messages.png'

const Right = () => {
  return (
    <div>
        <div className='flex ml-[240px] '>
            <button><span title='Profile'><CgProfile size={50}/></span></button>
            <button className='mt-2 '><RiArrowDropDownLine size={20}/></button>
        </div>
        <div className='bg-gradient-to-r from-blue-900  via-blue-500  to-blue-300   m-4 w-[300px] h-[250px] rounded-xl'>
        <div className='flex'>
        <img className='h-[50px] pt-8 pl-[30px] w-[50px] '
         src='https://png.pngtree.com/template/20191111/ourmid/pngtree-mv-vm-letter-vector-logo-image_332121.jpg' alt='/' /><p className='pt-[30px] pl-4 text-white'>Building wallet</p>
         <button className='bg-blue-200 ml-16 mt-8 rounded '><BsArrowUpRight size={20} color="white"/></button>
     </div>
     <div className='mt-12 ml-6 text-3xl text-white'>15.4598 MGM</div>
     <div className='ml-6 text-xl text-white mt-2'>= 0.03 ETH</div>
     <div className='ml-6  text-white mt-10'>0x78D9b24dfBFA7...350a53F3a072f52</div>
        </div>
        <div className='bg-white m-4 w-[300px] h-[380px] rounded-xl'><div className='flex'><div className='font-bold m-4'>Messages</div>
        <div className='mt-4 ml-[90px]'>See all</div>
        <button className='mt-2 ml-2 '><BsArrowUpRight size={15}/></button></div>
        <div className='flex'>
        <div className='bg-blue-200 rounded-md flex items-center mt-2 ml-6 '>
    <AiOutlineSearch size={25} color="gay"/>
    <input
      className='bg-transparent m-2  w-full focus:outline-none'
      type='text'
      placeholder='Search'
    /></div>
    
        </div>
        <img className='mt-1' src={messages} alt='/' /></div>
    </div>
  )
}

export default Right