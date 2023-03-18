import React from 'react'
import {BiBuildings,
} from 'react-icons/bi'
import {BsFillBellFill} from 'react-icons/bs'
import {IoIosContact} from 'react-icons/io'
import {AiOutlineWallet,AiOutlineSetting,AiOutlineArrowLeft} from 'react-icons/ai'

const Left = () => {
  return (
    <div className='bg-blue-200 h-screen w-1/6 mt-[4px]'>
<div>
    <div className='flex'>
        <img className='h-[60px] pt-8 pl-[30px] w-[50px] text-xl'
         src='https://png.pngtree.com/template/20191111/ourmid/pngtree-mv-vm-letter-vector-logo-image_332121.jpg' alt='/' /><p className='pt-[32px] pl-4'>MAGMA</p>
        
    </div>
</div>
<div className='pt-8 pl-10'>
    <button 
    className='flex text-gray-500 hover:bg-white text-black rounded-xl w-[100px] p-1'><BiBuildings size={25} color='gray'/>
        Buildings</button>
        <button 
    className='flex text-gray-500 hover:bg-white text-black rounded-xl w-[150px] mt-4 p-1'><BsFillBellFill size={25} color='gray'/>
        Activity
        <span className='bg-blue-700  text-white rounded-xl pl-1 pr-1 ml-10'>18</span></button>
        <button 
    className='flex text-gray-500 hover:bg-white text-black rounded-xl w-[100px] mt-4 p-1'><IoIosContact size={25} color='gray'/>
        Contacts</button>
        <button 
    className='flex text-gray-500 hover:bg-white text-black rounded-xl w-[100px] mt-4 p-1'><AiOutlineWallet size={25} color='gray'/>
        Wallet</button>
        <button 
    className='flex text-gray-500 hover:bg-white text-black rounded-xl w-[100px] mt-4 p-1'><AiOutlineSetting size={25} color='gray'/>
        Settings</button>
   </div>
</div>
  )
}

export default Left