import React, { useState } from 'react'
import user from '../assets/user.svg'
import lock from '../assets/lock.svg'
import unlock from '../assets/unlock.svg'
import address from '../assets/address.svg'
import { Link, useNavigate } from 'react-router-dom'
import BackButton from './BackButton'
import validator from 'validator'

const Login = () => {
    const [Luser, setuser] = useState('');
    const [Lpassword, setpassword] = useState('');
    const navigate = useNavigate()

    const handleUser=(e)=>{
        setuser(e.target.value)
    }
    const handlePassword=(e)=>{
        setpassword(e.target.value)
    }
    

    const handleSubmit=()=>{
        const storedInfo =JSON.parse(localStorage.getItem('book')) || [];
        const userFound =storedInfo.find(user => user.email === Luser && user.password === Lpassword);
        if(!Luser){
            alert('Please provide Email')
        }else if (!validator.isEmail(Luser)){
            alert('Please provide correct Email')
        }

        else if(!Lpassword){
            alert('Please provide Password')
        }else if(userFound){
            navigate('/Dashboard');
            localStorage.setItem('loggedUser', JSON.stringify(userFound))
        }else{
            alert('User not found!!!')
        }

        
    }

   return (
     <div className='w-full h-[100vh] flex bg-gray-200 justify-center items-center'>
        <BackButton/>
         <div className="w-[80%] bg-white rounded-xl p-6 md:w-[80%] md:h-[40%]">
                  <span  className="flex relative p-2 w-full justify-center items-center m-2">
                     <span className="absolute left-0 bg p-2 rounded-full">
                         <img src={user} className=' w-[2rem]' />
                     </span>
                     <input
                        onChange={handleUser} 
                        type='text' 
                        placeholder='Email' 
                        className="w-[97%] pl-[3rem] outline-none rounded-xl ml-[3%] bg-gray-200 p-3" />
                 </span>
                  <span  className="flex relative p-2 w-full justify-center items-center m-2">
                     <span className="absolute left-0 bg p-2 rounded-full">
                         <img src={lock} className=' w-[2rem]' />
                     </span>
                     <input
                        onChange={handlePassword} 
                        type='password' 
                        placeholder='Password' 
                        className="w-[97%] pl-[3rem] outline-none rounded-xl ml-[3%] bg-gray-200 p-3" />
                 </span>
           <Link to='/Register'>
                <p className="text-[.8rem] text-gray-400 text-right mr-2">Register?</p>
            </Link>
             <span className="w-full flex justify-center items-center p-2">
                <button onClick={handleSubmit} className="p-2 rounded-xl text-white w-[100%] bg  cursor-pointer" >Submit</button>
             </span>
         </div>
     </div>
   )
}

export default Login
