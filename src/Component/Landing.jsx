import React from 'react'
import children from '../assets/children.svg'
import scroll from '../assets/scroll.svg'
import logo from '../assets/logo.png'
import logoR from '../assets/logo-r.png'
import { Link } from 'react-router-dom'
import {motion, AnimatePresence} from 'framer-motion'

const Landing = () => {
  return (
    <div>
         <div className=" w-full h-[100vh] flex-col flex justify-center items-center" >
         <AnimatePresence >
          <span className=" w-[80%] flex justify-center items-center relative ">
                <h1 className='rounded-tr-xl w-[60%] shadow opacity-60 bg text-9xl z-40 text-white font-bold'>La</h1>
                <motion.h1 
                    initial={{left:'4rem'}}
                    animate={{left: '4.3rem'}}
                    transition={{duration:1,repeat:Infinity, repeatType:'mirror'}}
                    className='text-9xl absolute text font-semibold'>La</motion.h1>
            </span>
          </AnimatePresence>
            <h1 className="text-3xl mt-[1rem] tracking-[.5rem] text font-semibold text-center ">Lala Read</h1>
        
            <p className="text-[.8rem] mt-[3rem] text-center text-gray-500 p-9">
            Discover fun stories with important lessons about kindness, courage, and more.
            Let’s learn, grow, and enjoy the adventure together!    
            </p>
                <img src={scroll} className='w-10' />
         </div>

        <div className="flex flex-col  justify-center items-center">
            <img src={children} className='w-[60%]' />
        </div>

        <div className="flex justify-center flex-col items-center">
            <h1 className="text-2xl text font-semibold">Welcome to lala Read</h1>
            <p className='text-gray-500'>A website to get your kids engage</p>
        </div>
        <div className=" mb-[15rem] flex justify-center items-center m-4">
            <Link to='/Register' className=' w-full m-2'>
                <button className="m-2 p-3 bg rounded-xl w-full text-white cursor-pointer">SignUp</button>
            </Link>
            <Link to='/Login' className='w-full m-2'>
                <button className="m-2 p-3 bg rounded-xl w-full text-white cursor-pointer">SignIn</button>
            </Link>
        </div>
    </div>
  )
}

export default Landing
