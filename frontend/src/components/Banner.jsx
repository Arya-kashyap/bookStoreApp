import React from 'react'
import banner from '../../public/banner.png'

function Banner() {
  return (
    <>
    <div className='flex navbar bg-base-100 max-w-screen-2xl container md:px-20 px-4 flex-col md:flex-row dark:bg-white dark:text-black'>
          <div className='md:order-1 order-2 md:w-1/2 w-full md:my-16 my-12 flex md:flex-col flex-col'>
               <div>
                    <h1 className='text-4xl font-bold mt-12'>Hello, Welcome here to learn somthing  
                         <span className='text-pink-500'> new everyday!!!</span>
                    </h1>
                    <p className='text-xl mt-12'>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsam non officia eaque voluptatum rem odit molestiae incidunt repellat, suscipit ad at quis unde, laudantium distinctio maiores iure fugiat? Architecto?
                    </p>
                    <button className="btn btn-active btn-secondary mt-6">Get started</button>
               </div>
          </div>
                    
          <div className='md:w-1/2 w-full order-1 flex justify-center mt-12'>
          <img src={banner} className='w-3/4 h-3/4' alt="" /></div>
    </div>
    </>
  )
}

export default Banner
