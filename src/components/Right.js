import React from 'react'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {CgProfile} from 'react-icons/cg'

const Right = () => {
  return (
    <div>
        <div className='flex ml-[240px] '>
            <button><span title='Profile'><CgProfile size={50}/></span></button>
            <button className='mt-2 '><RiArrowDropDownLine size={20}/></button>
        </div>
    </div>
  )
}

export default Right