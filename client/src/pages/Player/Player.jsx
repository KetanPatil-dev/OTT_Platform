import React, { useEffect, useState } from 'react'
import "./Player.css"
import back_arrow_icon from "../../assets/back_arrow_icon.png"
import { Link, useParams } from 'react-router-dom'
const Player = () => {
  const {id}=useParams()
  const [api,setApi]=useState([])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2YxMDk0NTQ3ZmEyNDU2MjJlZDVlNzg3NmViZmJiMyIsIm5iZiI6MTc0Mzc0MzAyMC4xNDYsInN1YiI6IjY3ZWY2ODJjZWRlOGQ4MmYzYmFjZmZjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RnWRCDYjHTyi6EsrAgQ6WES3O2WBfcejWvu98wwApWE'
    }
  };
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res =>setApi(res.results[0]) )
    .catch(err => console.error(err));
  })
  
  return (
    <div className='container'>
      <Link to="/">
      <img src={back_arrow_icon}/>
      </Link>
      <div className='player'>

      <iframe width="90%" height="90%"src={`https://www.youtube.com/embed/${api.key}`} title={api.title} frameBorder="0" allowFullScreen></iframe>
      <div className="player-info">
        <p>{api.published_at.slice(0,10)}</p>
        <p>{api.name}</p>
        <p>{api.type}</p>
      </div>
      </div>
    </div>
  )
}

export default Player