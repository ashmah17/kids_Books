import React, { useEffect, useState } from 'react'
import search from '../assets/search.svg'
import bell from '../assets/bell.svg'
import userImg from '../assets/user.svg'
import { Link } from 'react-router-dom'

const Dashboard = () => { 
  const [user, setuser] = useState(null);


  useEffect(()=>{
    const currentUser = JSON.parse(localStorage.getItem('loggedUser')) || []
    
    if(currentUser){
      console.log(currentUser);
      setuser(currentUser)
    }
     
  },[])    
    
  return (
    <div className='w-full h-[100vh] bg-gray-200 '>
      <div className="w-full  p-4 flex justify-between">
        <span className="  md:w-[60%] bg-gray-100 flex mt-4 border border-gray-300 rounded-xl">
          <img src={search} className='w-[2rem] ml-2' />
          <input type="text" className="w-full text-gray-700 p-[.8rem] bg-gray-100 outline-none rounded-xl" />
        </span>
        <span className="w-[6rem] mt-4 justify-between flex">
          <Link to='/Profile'>
              <img src={userImg} alt="" className="w-10 cursor-pointer" />
          </Link>
         <Link className='relative'>
           <img src={bell} alt="" className="w-10 cursor-pointer" />
            <span className="w-[.8rem] h-[.8rem] rounded-full bg-red-700 absolute right-[.2rem] top-[.1rem]"></span>
         </Link>
        </span>
      </div>
      {user ? (
        <h1 className="text-gray-500 ml-5">Dear {user.user}</h1>
      ) :(
        <h1>Loading.....</h1>
      )
      }

      <div className="">
        
      </div>

    </div>
  )
}

export default Dashboard
