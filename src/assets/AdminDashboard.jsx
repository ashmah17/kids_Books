import React, { useEffect, useState } from 'react'
import add from '../assets/add.svg'
import bell from '../assets/bell.svg'
import userImg from '../assets/user.svg'
import trash from '../assets/trash.svg'
import amina from '../assets/pics/amina.webp'

const AdminDashboard = () => {
    const [Title, setTitle] = useState('')
    const [Storie, setStorie] = useState('')
    const [Lesson, setLesson] = useState('')
    const [Reference, setReference] = useState('')
    const [Author, setAuthor] = useState('')
    const [Image, setImage] = useState(null)
    const [StoreStorie, setStoreStorie] = useState([]);

    const handleTitle =(e)=>{
        setTitle(e.target.value)
    }
    const handleStorie =(e)=>{
        setStorie(e.target.value)
    }
    const handleLesson =(e)=>{
        setLesson(e.target.value)
    }
    const handleReference =(e)=>{
        setReference(e.target.value)
    }
    const handleAuthor =(e)=>{
        setAuthor(e.target.value)
    }
    const handleImageChange=(e)=>{
       const img = e.target.files[0]
       if(img){
        const reader = new FileReader();
        reader.onload =(e)=>setImage(e.target.result);
        reader.readAsDataURL(img)
       }
    }
    useEffect(()=>{
        const existingStory = JSON.parse(localStorage.getItem('kidsBooks')) || [];
        setStoreStorie(existingStory)
    },[])
    const handleSubmit =(e)=>{
       if(!Title){
        alert('Please provide Title')
       }else if(!Storie){
        alert('Please provide Story')
       }else if(!Lesson){
        alert('Please provide Lesson')
       }else if(!Reference){
        alert('Please provide Reference')
       }else if(!Author){
        alert('Please provide Author Name')
       }else if(!Image){
        alert('Please Provide Image')
       }else{
        const StoryDetails = {
            title:Title,
            story:Storie,
            lesson:Lesson,
            reference:Reference,
            author:Author,
            image:Image
           }
           const existingStory = JSON.parse(localStorage.getItem('kidsBooks')) || [];
           const spread = [...existingStory, StoryDetails]
           localStorage.setItem('kidsBooks', JSON.stringify(spread));
           setStoreStorie(spread);
           setTitle('');
           setStorie('');
           setLesson('');
           setReference('');
           setAuthor('')
           setImage('')
           alert('saved')
       }
    }
    const handleDelete =(index)=>{
        const stored = StoreStorie.filter((_, i)=> i !== index);
        localStorage.setItem('kidsBooks', JSON.stringify(stored))
        setStoreStorie(stored);
        alert('deleted')
    }
    

    const story =[
        {title: 'Aisha was a kind-hearted and loving girl who lived with her family in a small, peaceful town. Her mother was the heart of their home, always taking care of everyone with warmth and affection. But one day, her mother fell seriously ill. She was too weak to get out of bed, and despite the doctors' }
    ]
  return (
    <div className='p-4 bg-gray-100'>
      <div className="w-full flex justify-between p-4">
            <h1 className="">Hello Admin</h1>
            <span className="flex w-[6rem] justify-between">
                <img src={userImg} className='w-10 cursor-pointer' />
                <img src={bell} className='w-10 cursor-pointer' />
            </span>
      </div>
        <div className="w-full">
           <span className="grid grid-cols-2 gap-3">
                 <input value={Title}  onChange={handleTitle} type="text"  className="border  w-full text-gray-700 p-[1rem] outline-none rounded-xl" placeholder='Title'/>
                 <input value={Storie}  onChange={handleStorie} type="text"  className="border  w-full text-gray-700 p-[1rem] outline-none rounded-xl" placeholder='Story' />
                 <input value={Lesson}  onChange={handleLesson} type="text"  className="border  w-full text-gray-700 p-[1rem] outline-none rounded-xl" placeholder='Lesson'/>
                 <input value={Reference}  onChange={handleReference} type="text"  className="border  w-full text-gray-700 p-[1rem] outline-none rounded-xl" placeholder='Reference'/>
                 <input value={Author}  onChange={handleAuthor} type="text"  className="border  w-full text-gray-700 p-[1rem] outline-none rounded-xl" placeholder='Author'/>
                 <input  accept='image/*'  onChange={handleImageChange} type="file"  className="border  w-full text-gray-700 p-[1rem] outline-none rounded-xl cursor-pointer" />
          </span>
          <button onClick={handleSubmit} className=" w-full bg rounded-xl flex items-center justify-center mt-4   p-2">
             <img src={add} className='w-10' />
          </button>
        </div>

        <div className="grid md:grid-cols-4 grid-cols-2 p-3 mt-[2rem]">
           {
            StoreStorie.map((value, index)=>{
                const split = value.story.slice(0,50)
                return(

            <div key={index} className="  bg-white shadow-xl border  m-2 rounded-xl flex flex-col justify-between p-3">
                <img src={value.image} className='w-[100%] rounded-xl' />
                <span className=" mt-2 flex flex-col justify-right w-full">
                    <h1 className=" ml-4 md:text-xl">{value.title}</h1>
                    <span className="mt-2">
                     <p className=" ml-4 text-[.7rem] md:text-[.8rem] text-gray-500">{split}.....</p>  
                    </span>  
                    <span className="flex justify-center">
                        <img onClick={()=>handleDelete(index)} src={trash} className='w-[1.4rem]  ml-4 mt-3 cursor-pointer' />
                    </span>
                </span>
             </div>
                )
            })
           }
            </div>

    </div>
  )
}

export default AdminDashboard
