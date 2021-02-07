import React from 'react';
import '../../../public/assets/styles/Introduction.scss';
import Angular from '../../../public/assets/img/technologies/Angular.png';
import Express from '../../../public/assets/img/technologies/Expressjs.png';
import Node from '../../../public/assets/img/technologies/node.png';
import Avatar from '../../../public/assets/img/avatar.png';


const Introduction = () => (
    <section className="row justify-content-center intro m-0 p-0" id="intro">
        <div className="col-12 text-center content-photo m-0 p-0" >
            <img className="photo fade-in" src={Avatar}  alt="" />
        </div>
        <div className="col-12 info_content fade-in">
            <div className="">
                <h1 className="text-center">Hola, mi nombre es Rodolfo Frías 💻</h1>
                <hr/>
                <p className="text-center">
                   Soy desarrollador backend, me encanta programar y hacer cosas geniales con
                   las nuevas tecnologías. Nunca parar de aprender
                </p>
            </div>
        </div>
    </section>
);

export default Introduction;