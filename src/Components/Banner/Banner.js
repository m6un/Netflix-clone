import React, {useState, useEffect} from "react";
import "./Banner.css";
import axios from "../../axios"
import {API_KEY, imgUrl} from "../../constants/constants"
import random from "random";
let randInt = random.int(0, 19)



function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      setMovie(response.data.results[randInt])
      console.log(response.data) 
    })
  }, [])
  return (
    <div className="banner" style = {{backgroundImage : `url(${movie ? imgUrl+movie.backdrop_path : ""})`}}>
      <div className="content">
        <div>
          {movie && <h1 className = "title">{movie.title ? movie.title : movie.name}</h1>}
        </div>
        <div className="banner_buttons">
          <button className="button">play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">
          {movie ? movie.overview : ""}
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
