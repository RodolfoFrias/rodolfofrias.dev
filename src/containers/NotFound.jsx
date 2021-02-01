import React from 'react';
import { Link } from 'react-router-dom';
import '../../public/assets/styles/NotFound.scss';
import notFound from '../../public/assets/img/404-error.svg';
import rocket from '../../public/assets/img/rocket.svg';
import moon from '../../public/assets/img/moon.svg';
import earth from '../../public/assets/img/worldwide.svg';
import astronaut from '../../public/assets/img/astronaut.svg';

const NotFound = () => (
    <section className="bg-purple">
        <div className="stars">
            <div className="central-body">
                <img className="image-404" src={notFound} width="300px" />
                <Link to="/"  className="btn-go-home">
                    REGRESAR
                </Link>
            </div>
            <div className="objects">
                <img className="object_rocket" src={rocket} width="40px" />
                <div className="earth-moon">
                    <img className="object_earth" src={earth} width="100px" />
                    <img className="object_moon" src={moon} width="80px" />
                </div>
                <div className="box_astronaut">
                    <img className="object_astronaut" src={astronaut} width="140px" />
                </div>
            </div>
            <div className="glowing_stars">
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>

            </div>

        </div>
    </section>
);

export default NotFound;