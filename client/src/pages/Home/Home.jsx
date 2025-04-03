import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg"
import hero_title from "../../assets/hero_title.png"
import play_icon from "../../assets/Play_icon.png"
import info_icon from "../../assets/info_icon.png"
import Titlecards from "../../components/Titlecards/Titlecards";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <div className="hero">
        <img alt="banner-img" className="banner-img" src={hero_banner}/>
        <div className="hero-caption">
            <img src={hero_title}  alt="caption-img" className="caption-img"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, voluptate reiciendis voluptas quaerat quisquam perferendis fugit a id voluptatum similique omnis temporibus sequi maxime enim nostrum soluta? Quam, autem deserunt.</p>
            <div className="hero-btns">
                <button className="btn"><img src={play_icon} />Play</button>
                <button className="btn dark-btn"> <img src={info_icon} />More Info</button>
            </div>
            <Titlecards/>
        </div>
      </div>
      <div className="more-cards">
        <Titlecards title={"Blockbuster Movies"}/>
        <Titlecards title={"Only on CloneFlix"}/>
        <Titlecards title={"Upcoming Movies"}/>
        <Titlecards title={"Top Pics for You"}/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
