import React, { useEffect, useState,useRef } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Slider from 'react-slick';


function Movies() {
    const sliderSettings = {
    infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      arrows:false
      };
      const sliderSettings2 = {
        infinite: true,
          slidesToShow: 3,
          slidesToScroll: -1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
          arrows:false
          };

const populars=[
    {
      "Poster": "https://res.cloudinary.com/guevara/image/upload/v1654083660/my%20pic/stranger_lmijzp.jpg"
    },
    {
      "Poster": "https://res.cloudinary.com/guevara/image/upload/v1654092439/my%20pic/maxresdefault_yaiez1.jpg"
    },
    {
      "Poster": "https://res.cloudinary.com/guevara/image/upload/v1654092584/my%20pic/Screen_Shot_2017_08_11_at_09.58.34.0_xcdvyj.jpg"
    },
    {
      "Poster": "https://res.cloudinary.com/guevara/image/upload/v1654093405/my%20pic/3eae388ecedb4aa8-600x338_y4n8d6.jpg"
    }
  ];
  const recents=[
    {
        "Poster": "https://res.cloudinary.com/guevara/image/upload/v1654094335/my%20pic/maxresdefault_1_qklnix.jpg"
      },
      {
        "Poster": "https://res.cloudinary.com/guevara/image/upload/v1654094257/my%20pic/Chefs-Table-TV-show-on-Netflix-season-2-premiere-Chefs-Table-TV-show-canceled-or-renewed_kzzjkt.jpg"
      },
      {
        "Poster": "https://res.cloudinary.com/guevara/image/upload/v1654094113/my%20pic/House_of_Cards_main_characters_wbaro5.jpg"
      },
      {
        "Poster": "https://res.cloudinary.com/guevara/image/upload/v1654094076/my%20pic/TTV-SELECTS-NETFLIX-THE-CROWN-SEASON-2-570x321_e6ub85.jpg"
      }
  ]
    return (
    <div className='movie_container'>
<div className='header_container'>
    <div className='left_container'>
        <div className='title'>
            <h3>Netflix  Original</h3>
            <h1>Stranger Things</h1>
            </div>
        <div className='details'>
            <span id='rating'> 95%</span> <span> Seazon 1 2016</span>
        </div>
        <div className='description'>
            <p>The first season of the American science fiction horror drama television series Stranger Things premiered worldwide exclusively via Netflix's streaming service on July 15, 2016. </p>
        </div>
        <div className='footer'>
            <p>Winona Ryder harbour, Mathew Modine<br/>
            TV Shows, Tv Sci-fi , Teen TV Shows</p>
        </div>
    </div>
    <div className='right_container'>
    <img src="https://res.cloudinary.com/guevara/image/upload/v1654086873/my%20pic/game-3820_feh2yc.jpg" />
    </div>
</div>
<div className='slider_title'><h4>Popular on Netflix</h4></div>
<div className='slide_container'>
<Slider {...sliderSettings} >
{populars.map((movie, index) => (
    <div className='slider_content' key={index}>
    <img src={movie.Poster} />
</div>
))}

</Slider>
  
</div>
<div className='slider_title'><h4>Recently Watched</h4></div>
<div className='slide_container'>
<Slider {...sliderSettings2} >
{recents.map((movie, index) => (
    <div className='slider_content' key={index}>
    <img src={movie.Poster} />
</div>
))}

</Slider>
  
</div>

    </div>
    );
}

export default Movies;

if (document.getElementById('movies')) {
    ReactDOM.render(<Movies />, document.getElementById('movies'));
}
