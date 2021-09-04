import React from 'react';
import '../../../public/assets/styles/Introduction.scss';
import Avatar from '../../../public/assets/img/avatar.png';


const Introduction = () => (
    <section className="row justify-content-center intro m-0 p-0" id="intro">
        <div className="col-12 text-center content-photo m-0 p-0" >
            <img className="photo fade-in" src={Avatar}  alt="" />
        </div>
        <div className="col-12 info_content fade-in">
            <div className="">
                <h1 className="text-center">Hi there, my name is Rodolfo Frias 💻</h1>
                <hr/>
                <p className="text-center">
                   Hey I'm Rodolfo a software engineer based on Guanajuato, Mexico, I love programming
                   and do fun stuff with new technologies. I'm Eager to learn!
                </p>
            </div>
        </div>
    </section>
);

export default Introduction;