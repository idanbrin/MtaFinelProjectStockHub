import React from 'react'
import Slider from 'react-slick';
import Story from './Story';
import './css/StorysContainer.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function StorysContainer() {

  const stories=[{
        user:"benjamin",
        imageSrc:"https://th.bing.com/th/id/R.8916a387421e246e900c047ce0e64c99?rik=juFHzVJhicvLXw&riu=http%3a%2f%2fc8.alamy.com%2fcomp%2fBHK5E9%2ftheodor-herzl-1860-1904-writer-and-statesman-BHK5E9.jpg&ehk=CMtX5vIgHgkb%2bQjBI75QUFA%2b2f0ccpDatIWPhWNmzO8%3d&risl=&pid=ImgRaw&r=0"
      },{
      user:"benjamin",
      imageSrc:"https://th.bing.com/th/id/R.8916a387421e246e900c047ce0e64c99?rik=juFHzVJhicvLXw&riu=http%3a%2f%2fc8.alamy.com%2fcomp%2fBHK5E9%2ftheodor-herzl-1860-1904-writer-and-statesman-BHK5E9.jpg&ehk=CMtX5vIgHgkb%2bQjBI75QUFA%2b2f0ccpDatIWPhWNmzO8%3d&risl=&pid=ImgRaw&r=0"
    },{
      user:"benjamin",
      imageSrc:"https://th.bing.com/th/id/R.8916a387421e246e900c047ce0e64c99?rik=juFHzVJhicvLXw&riu=http%3a%2f%2fc8.alamy.com%2fcomp%2fBHK5E9%2ftheodor-herzl-1860-1904-writer-and-statesman-BHK5E9.jpg&ehk=CMtX5vIgHgkb%2bQjBI75QUFA%2b2f0ccpDatIWPhWNmzO8%3d&risl=&pid=ImgRaw&r=0"
    },{
    user:"benjamin",
    imageSrc:"https://th.bing.com/th/id/R.8916a387421e246e900c047ce0e64c99?rik=juFHzVJhicvLXw&riu=http%3a%2f%2fc8.alamy.com%2fcomp%2fBHK5E9%2ftheodor-herzl-1860-1904-writer-and-statesman-BHK5E9.jpg&ehk=CMtX5vIgHgkb%2bQjBI75QUFA%2b2f0ccpDatIWPhWNmzO8%3d&risl=&pid=ImgRaw&r=0"
  },{
    user:"benjamin",
    imageSrc:"https://th.bing.com/th/id/R.8916a387421e246e900c047ce0e64c99?rik=juFHzVJhicvLXw&riu=http%3a%2f%2fc8.alamy.com%2fcomp%2fBHK5E9%2ftheodor-herzl-1860-1904-writer-and-statesman-BHK5E9.jpg&ehk=CMtX5vIgHgkb%2bQjBI75QUFA%2b2f0ccpDatIWPhWNmzO8%3d&risl=&pid=ImgRaw&r=0"
  },{
  user:"benjamin",
  imageSrc:"https://th.bing.com/th/id/R.8916a387421e246e900c047ce0e64c99?rik=juFHzVJhicvLXw&riu=http%3a%2f%2fc8.alamy.com%2fcomp%2fBHK5E9%2ftheodor-herzl-1860-1904-writer-and-statesman-BHK5E9.jpg&ehk=CMtX5vIgHgkb%2bQjBI75QUFA%2b2f0ccpDatIWPhWNmzO8%3d&risl=&pid=ImgRaw&r=0"
},{
  user:"benjamin",
  imageSrc:"https://th.bing.com/th/id/R.8916a387421e246e900c047ce0e64c99?rik=juFHzVJhicvLXw&riu=http%3a%2f%2fc8.alamy.com%2fcomp%2fBHK5E9%2ftheodor-herzl-1860-1904-writer-and-statesman-BHK5E9.jpg&ehk=CMtX5vIgHgkb%2bQjBI75QUFA%2b2f0ccpDatIWPhWNmzO8%3d&risl=&pid=ImgRaw&r=0"
},{
user:"benjamin",
imageSrc:"https://th.bing.com/th/id/R.8916a387421e246e900c047ce0e64c99?rik=juFHzVJhicvLXw&riu=http%3a%2f%2fc8.alamy.com%2fcomp%2fBHK5E9%2ftheodor-herzl-1860-1904-writer-and-statesman-BHK5E9.jpg&ehk=CMtX5vIgHgkb%2bQjBI75QUFA%2b2f0ccpDatIWPhWNmzO8%3d&risl=&pid=ImgRaw&r=0"
}]

    
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
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

    <div className='slider-container'>

        <Slider {...settings}>
            {stories.map((story, index) => (
                    <Story key={index} username={story.username} imageSrc={story.imageSrc} />
            ))}

        </Slider>


       
    </div>
  );
}



export default StorysContainer;