import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import slide1 from './img/slide1.jpg';
import slide2 from './img/slide2.jpg';
import slide3 from './img/slide3.jpg';

const Banner = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slide1} className="d-block w-100" alt="Neapolitan Pizza"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h3>The Good Meat Celebration Ham</h3>
                        <p>Celebrate the season with The Good Meat Celebration Ham! Perfectly glazed and seasoned, this ham promises a juicy, flavorful bite in every slice. Ideal for festive gatherings and holiday feasts.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={slide2} className="d-block w-100" alt="Another Pizza"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h3>Sisig Fiesta</h3>
                        <p>Bring a festival of flavors to your meal with Sisig Fiesta Pizza - The perfect choice for every party!</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={slide3} className="d-block w-100" alt="Yet Another Pizza"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h3>Pacific Bay Seafood Selection</h3>
                        <p>Experience the ocean's bounty with Pacific Bay Seafood Selection!</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;
