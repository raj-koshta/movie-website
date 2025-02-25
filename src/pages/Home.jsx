import React from 'react'
import { NavLink } from 'react-router-dom';
import "../css/home.css"

const Home = () => {
  return (
    <div className=''>
      <main className="main-content">
        <div className="hero">
          <h2 className="hero-title">EXPLORE THE LATEST IN MOVIE INDUSTRIES</h2>
          <h1 className="hero-subtitle">Unlimited Movie, TVs<br />Shows, & More.</h1>
          <p className="hero-description">Discover the Top Best Movies and Dramas with a catchy subtitle like<br />Your Ultimate Guide to Must Watch Content.</p>
          <p className='text-center'>
            <NavLink to={"/movie-website/movie"} className="hero-button">Explore Now</NavLink>
          </p>
        </div>
      </main>

    </div>
  );
}

export default Home
