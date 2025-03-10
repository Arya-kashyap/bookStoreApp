import React from 'react'

function Cards({item}) {
  return (
     <>
     <div className='my-4 '>
     <div className="card bg-base-100 w-72 shadow-xl hover:scale-90 duration-200 dark:bg-white dark:text-black">
         <figure>
         <img
              src={item.image}
              alt="Shoes" />
         </figure>
         <div className="card-body">
         <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
         </h2>
         <p>{item.title}</p>
         <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer rounded-full border-[2px] px-2 hover:bg-pink-500 hover:text-white hover:px-2 py-1">Buy Now</div>
         </div>
         </div>
         </div>
     </div>
   </>
  )
}

export default Cards
