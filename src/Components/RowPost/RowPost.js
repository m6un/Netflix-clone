import React, {useState, useEffect} from 'react'
import YouTube from 'react-youtube'
import "./RowPost.css"
import axios from "../../axios"

import { API_KEY, imgUrl } from '../../constants/constants'

function RowPost({title, isSmall, url}) {
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState('')
    useEffect(() => {
        axios.get(url).then((response)=>{
            setMovies(response.data.results)
        })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    function handlePosterClickSeries(id){
        axios.get(`tv/${id}/videos?api_key=${API_KEY}`).then(response=>{
            console.log(response.data)
            if(response.data.results.length != 0){
            setUrlId(response.data.results[0])
            }
            else{
                console.log("Error! link not found")
            }
        })
    }
    function handlePosterClickMovies(id){
        axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then(response=>{
            console.log(response.data)
            if(response.data.results.length != 0){
            setUrlId(response.data.results[0])
            }
            else{
                console.log("Error! link not found")
            }
        })
    }

    function handlePosterClick(id){
        axios.get(`tv/${id}?api_key=8e2dbdda83ebf587f64d0e0f0268a55b`).then(response =>{
                handlePosterClickSeries(id)
        }).catch(()=>{
            axios.get(`movie/${id}?api_key=8e2dbdda83ebf587f64d0e0f0268a55b`).then(response =>{
                handlePosterClickMovies(id)
            })
        })
    }


    return (
        <div className = "row">
            <h2 >{title}</h2>
            <div className="posters">
                {movies.map((obj)=> <img onClick ={()=>{handlePosterClick(obj.id)}} className = {isSmall ? "smallposter" : "poster"}lt = "originals" src = {`${imgUrl + obj.backdrop_path }`}  />)}
            </div>
            {urlId && <YouTube videoId= {urlId.key} opts={opts} />}
        </div>
    )
}

export default RowPost
