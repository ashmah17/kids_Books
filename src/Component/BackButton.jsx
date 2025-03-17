import React from 'react'
import backBtn from '../assets/back.svg'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
    const navigate =useNavigate();
    const back =()=>{
        navigate(-1)
    }

  return (
    <div className='absolute top-2 left-1'>
      <img 
        onClick={back}
        src={backBtn} 
        className='w-[3rem] cursor-pointer' />
    </div>
  )
}

export default BackButton
