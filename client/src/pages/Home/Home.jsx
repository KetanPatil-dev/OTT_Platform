import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg"
import hero_title from "../../assets/hero_title.png"
import play_icon from "../../assets/Play_icon.png"
import info_icon from "../../assets/info_icon.png"
import Titlecards from "../../components/Titlecards/Titlecards";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <div className="hero">
        <img alt="banner-img" className="banner-img" src={hero_banner}/>
        <div className="hero-caption">
            <img src={hero_title}  alt="caption-img" className="caption-img"/>
            <p>Set in modern-day Istanbul, the series follows Hakan, an ordinary shopkeeper whose world turns upside down when he discovers he’s connected to an ancient secret order tasked with protecting the city from mysterious immortal enemies. Gifted with a magical talismanic shirt and backed by loyal allies, Hakan becomes The Protector, battling dark forces threatening humanity.</p>
            <div className="hero-btns">
                <Link to="/titleMovie"><button className="btn"><img src={play_icon} />Play</button></Link>
                <button className="btn dark-btn"> <img src={info_icon} />More Info</button>
            </div>
            <Titlecards />
        </div>
      </div>
      <div className="more-cards">
        <Titlecards title={"Blockbuster Movies"} category={"top_rated"} /> 
        <Titlecards title={"Only on CloneFlix"} category={"popular"} />
        <Titlecards title={"Upcoming Movies"} category={"upcoming"} />
        <Titlecards title={"Top Pics for You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
