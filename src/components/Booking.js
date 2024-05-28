import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import slide1 from './img/slide1.jpg';
import slide2 from './img/slide2.jpg';
import slide3 from './img/slide3.jpg';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src={slide1}
                    alt="Neapolitan Pizza"
                />
                <Carousel.Caption>
                    <h3>The Good Meat Celebration Ham</h3>
                    <p>Celebrate the season with The Good Meat Celebration Ham! Perfectly glazed and seasoned, this ham promises a juicy, flavorful bite in every slice. Ideal for festive gatherings and holiday feasts.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Another Pizza"
                />
                <Carousel.Caption>
                    <h3>Sisig Fiesta</h3>
                    <p>Bring a festival of flavors to your meal with Sisig Fiesta Pizza - The perfect choice for every party!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Yet Another Pizza"
                />
                <Carousel.Caption>
                    <h3>Pacific Bay Seafood Selection</h3>
                    <p>Experience the ocean's bounty with Pacific Bay Seafood Selection!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
