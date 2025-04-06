import React from "react"
import "./TitleMovie.css"
import backArrow from "../assets/back_arrow_icon.png"
import { Link } from "react-router-dom"
const TitleMovie=()=>{
    return <div className="container1">
        <Link to="/"><img  src={backArrow}/></Link>
        <div className="container">
        <div className="video">
            <iframe src="https://www.youtube.com/embed/80dqOwAOhbo"></iframe>
            <div className="info">
                <p>3-4-2019</p>
                <p>The Protector</p>
                <p>Series</p>
            </div>
        </div>
        </div>
    </div>
}

export default TitleMovie