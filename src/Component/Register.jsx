import React, { useEffect, useState } from 'react'
import userImg from '../assets/user.svg'
import lock from '../assets/lock.svg'
import phoneImg from '../assets/phone.svg'
import unlock from '../assets/unlock.svg'
import addressImg from '../assets/address.svg'
import { Link, useNavigate} from 'react-router-dom'
import BackButton from './BackButton'
import validator from 'validator'

const Register = () => {
    const [Register, setRegister] = useState([]);
    const [email, setEmail] = useState('')
    const [user, setuser] = useState('')
    const [address, setaddress] = useState('')
    const [phone, setphone] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    
    const details=[
        {title:'Email', img:userImg, type:'text', click:(e)=>setEmail(e.target.value), val:email},
        {title:'Full Name', img:userImg, type:'text', click:(e)=>setuser(e.target.value), val:user},
        {title:'Full Address', img:addressImg, type:'text', click: (e)=>setaddress(e.target.value), value:address},
        {title:'Phone', img:phoneImg, type:'text', click: (e)=>setphone(e.target.value), val:phone},
        {title:'Password', img:lock, type:'password', click: (e)=>setpassword(e.target.value), val:password},
        {title:'confirm Password', img:unlock, type:'password', click: (e)=>setcpassword(e.target.value), val:cpassword}
    ]
    const navigate = useNavigate()
    useEffect(()=>{
        const stored =JSON.parse(localStorage.getItem('book')) || [];
        setRegister(stored)
    },[])

    const handleSubmit =()=>{ 
        if(!email){
            alert('Please provide Email')
        }else if (!validator.isEmail(email)){
            alert('Please Provide correct Email')
        }else if(!user){
            alert('Please provide Full Name')
        }else if(!address){
            alert('Please provide Address')
        
        }else if(!phone){
            alert('Please provide Phone Number')
        
         }else if(!phone){
            alert('Please provide Phone Number')
        
        }else if(!validator.isMobilePhone(phone)){
            alert('Please provide Correct Phone Number')
        
        }else if(!password){
            alert('Please provide Passwod')

        }else if(!validator.isStrongPassword (password)){
            alert('Please provide Strong Password')
        
        }else if(password !== cpassword){
            alert('Please Confirm Password')
        }else{

            const info ={
                email:email,
                user:user,
                address:address,
                phone:phone,
                password:password,
            }
            const stored =JSON.parse(localStorage.getItem('book')) || [];
            const update =[...stored, info]
            localStorage.setItem('book', JSON.stringify(update))
            setRegister(update);
            setEmail('')
            setuser('')
            setaddress('e')
            setphone('')
            setpassword('')
            setcpassword('')   
            alert('Your account has been created successfully!', user);
            navigate('/Dashboard')
        }
      
   }

  return (
    <div className='w-full h-[100vh] flex bg-gray-200 justify-center items-center'>
      <BackButton/>
        <div className="w-[80%]  bg-white rounded-xl p-6 md:w-[80%] md:h-[40%]">
            {details.map((details, index)=>(
                 <span key={index} className="flex relative p-2 w-full justify-center items-center m-2">
                    <span className="absolute left-0 bg p-2 rounded-full">
                        <img src={details.img} className=' w-[2rem]' />
                    </span>
                    <input 
                        type={details.type} 
                        value={details.val} 
                        onChange={details.click}
                        placeholder={details.title} 
                        className="w-[97%] pl-[3rem] outline-none rounded-xl ml-[3%] bg-gray-200 p-3" />
                </span>
            ))
        }       
           <Link to='/Login'>
                <p className="text-[.7rem] text-right text-gray-400 mr-2">Already have an account</p>
           </Link>
            <span className="w-full flex justify-center items-center p-2">
               <button onClick={handleSubmit } className="p-2 rounded-xl text-white w-[100%] bg  cursor-pointer" >Submit</button>
            </span>
        </div>
    </div>
  )
}

export default Register
