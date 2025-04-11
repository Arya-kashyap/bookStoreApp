import React, {useState, useEffect} from 'react'
import Cards from './Cards'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Course() {
  const [book, setBook] = useState([]);
  useEffect(( )=>{
    const  getBook = async() => {
      try {
        const res = await axios.get("/api/book");
        console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  },[])
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <div className='mt-24 justify-center items-center text-center '>
          <h1 className='text-2xl font-semibold md:text-4xl '>We're deligated to have you <span className='text-pink-500'> Here! :)</span> </h1>
          <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, accusamus neque qui tenetur nam id, laboriosam ducimus a, saepe consequuntur ipsam voluptatibus praesentium placeat quis numquam unde aut enim blanditiis!</p>
          <Link to='/'>
          <button className='text-white bg-pink-500 rounded-md mt-6 hover:bg-pink-700 px-4 py-2 duration-200'>Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
          {
            book.map((item) => (
              <Cards item={item} key={item._id}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course
