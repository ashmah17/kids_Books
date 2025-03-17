import React from 'react'
import children from '../assets/children.svg'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
        <h1 className="text-3xl text-pink-900 font-semibold text-center m-6 ">Lala Read</h1>
        <div className="flex justify-center items-center">
            <img src={children} className='w-[60%]' />
        </div>
        <div className=" flex justify-center flex-col items-center">
            <h1 className="text-2xl text-pink-900 font-semibold">Welcome to lala Read</h1>
            <p className='text-gray-500'>A website to get your kids engage</p>
        </div>
        <div className="flex justify-center items-center m-4">
            <Link to='/Register'>
                <button className="m-2 p-3 bg rounded-xl w-[5rem] text-white cursor-pointer">SignUp</button>
            </Link>
            <Link to='/Login'>
                <button className="m-2 p-3 bg rounded-xl w-[5rem] text-white cursor-pointer">SignIn</button>
            </Link>
        </div>
    </div>
  )
}

export default Landing
