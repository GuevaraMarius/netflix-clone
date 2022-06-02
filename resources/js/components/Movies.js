import React, { useEffect, useState,useRef } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Slider from 'react-slick';


function Movies() {
  const [poster,setPoster]=useState({});
    const sliderSettings = {
    infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      arrows:false,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      };
      const sliderSettings2 = {
        infinite: true,
          slidesToShow: 5,
          slidesToScroll: -1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
          arrows:false,
          responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: -1
              }
            }
          ]
          };
  const [movies, setMovies] = useState([])
  useEffect(()=>{
      fetchMovies() 
  },[])
  useEffect(()=>{
    if(movies[0]){
setPoster(movies[0]);
    }
},[movies])
  const fetchMovies = async () => {
    
    const {data} =  await axios.get(`https://ne-flix.herokuapp.com/api/movies`)
      setMovies(data);
  }
    return (
    <div className='movie_container'>

  {
  poster && (
      <div className='header_container' >
      <div className='left_container'>
          <div className='title'>
              <h3>Netflix  Original</h3>
              <h1>{poster.title}</h1>
              </div>
          <div className='details'>
              <span id='rating'> {poster.rating}% Match </span> <span>{poster.year}</span>
          </div>
          <div className='description'>
            <p>{poster.description}</p>
          </div>
          <div className='footer'>
              <p>{poster.tag}</p>
          </div>
      </div>
      <div className='right_container'>
      <img src={poster.image} />
      </div>
  </div>
  )
  }      

<div className='slider_title'><h4>Popular on Netflix</h4></div>
<div className='slide_container'>
<Slider {...sliderSettings} >
{
movies.length > 0 && (
  movies.map((row, key)=>(
    <div onClick={()=>setPoster(row)} className='slider_content' key={key}>
    <img src={row.image} />
</div>
))
)
}
</Slider>  

</div>
<div className='slider_title'><h4>Recently Watched</h4></div>
<div className='slide_container'>
<Slider {...sliderSettings2} >
{
movies.length > 0 && (
  movies.map((row, key)=>(
    <div className='slider_content' key={key}>
    <img src={row.image} />
</div>
))
)
}
</Slider>  

</div>

    </div>
    );
}

export default Movies;

if (document.getElementById('movies')) {
    ReactDOM.render(<Movies />, document.getElementById('movies'));
}
