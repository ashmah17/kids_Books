import React, { useEffect, useState } from 'react'
import profileImg from '../assets/user.svg'
import edit from '../assets/edit.svg'
import userImg from '../assets/user.svg'
import lock from '../assets/lock.svg'
import email from '../assets/email.svg'
import phoneImg from '../assets/phone.svg'
import addressImg from '../assets/address.svg'
import BackButton from './BackButton'

const Profile = () => {
    const [user, setuser] = useState(null);
   useEffect(()=>{
        const storedUser =JSON.parse(localStorage.getItem('loggedUser')) ;
        if(storedUser){
            setuser(storedUser);
        }
   },[])
    
   if(!user){
    return( <h1>Loading......</h1>)
   }

   const details =[
    {title:user.user, img:userImg},
    {title:user.email, img:email},
    {title:user.address, img:addressImg},
    {title:user.phone, img:phoneImg},
    {title:user.password, img:lock},
   ]

  return (
    <div className='w-full h-[100vh]'>
        <BackButton/>
        <div className="flex-col w-full h-[40vh] p-4 bg flex justify-center items-center rounded-bl-full ">
            <div className=" p-2 h-[10rem] relative flex justify-center items-center w-[10rem] rounded-full border border-[.3rem] shadow-2xl ">
                 <img src={profileImg} alt="" className="w-[5rem]" />
                 <span className=" bg-white w-[2.5rem] p-2 absolute h-[2.5rem] shadow-2xl cursor-pointer right-0 bottom-0 rounded-full ">
                    <img src={edit} className='w-10  right-0 bottom-0' />
                 </span>
            </div>
            {user ? (
                <h1 className="text-2xl mt-[1rem] text-gray-100">{user.user}</h1>

            ):
            (
               <h1 className="text-xl">Loading.....</h1>

            )
            }
            <p className="text-gray-300">Parent</p>
        </div>
        
                <div className="w-full p-5">
                   {details.map((value,index)=>(
                     <span key={index} className="flex w-full p-3 shadow m-2 justify-between pr-[3rem]">
                        <img src={value.img} className='w-10' />
                        <h1 className='text-gray-700'>{value.title}</h1>
                     </span>
                   ))

                   }
                </div> 
           
    </div>
  )
}

export default Profile
