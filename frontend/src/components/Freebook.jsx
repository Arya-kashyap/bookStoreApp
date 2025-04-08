import React, {useState, useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';


function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(( )=>{
    const  getBook = async() => {
      try {
<<<<<<< HEAD
        const res = await axios.get("/api/book");
=======
        const res = await axios.get("https://bookstoreapp-backend-bag4.onrender.com/book");
>>>>>>> 4703428736d88240fa6d31a39682a59125861c17
        const data = res.data.filter((data) => data.category === "free");
        console.log(data);
        setBook(data)
      } catch (error) {
        console.log(error);
        
      }
    }
    getBook();
  },[])
     
     
     var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-white dark:text-black'>
        <div>
        <h1 className='font-semibold text-xl '>Free Offered Courses</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo qui cupiditate, corporis nostrum voluptatibus temporibus sapiente magnam architecto repellat laudantium, a unde, ipsum soluta id totam saepe animi! Nisi, possimus?</p>
        </div>
      <div className="slider-container ">
        <Slider {...settings}>
          {book.map((item) => (
            <Cards item = {item} key={item.id}/>
          ))}
        </Slider>
    </div>
    
    </div>
    </>
  )
}

export default Freebook
