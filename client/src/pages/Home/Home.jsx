import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg"
import hero_title from "../../assets/hero_title.png"
const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <div className="hero">
        <img alt="banner-img" className="banner-img" src={hero_banner}/>
        <div className="hero-caption">
            <img src={hero_title}  alt="caption-img" className="caption-img"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, voluptate reiciendis voluptas quaerat quisquam perferendis fugit a id voluptatum similique omnis temporibus sequi maxime enim nostrum soluta? Quam, autem deserunt.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
