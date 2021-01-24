import React from 'react';
import '../../../public/assets/styles/Introduction.scss';

const Introduction = () => (
    <section className="row justify-content-center intro" id="intro">
        <div className="col-12 col-md-4 col-lg-5 text-center content-photo" >
            <img className="photo" src='/public/assets/img/yo.jpg'  alt="" />
        </div>
        <div className="col-12 col-md-8  col-lg-7 info_content ">
            <div className="m-lg-5">
                <h1 className="text-center">Hola, mi nombre es Rodolfo Frías 💻</h1>
                <hr/>
                <p>
                    Soy desarrollador Javascript ubicado en Guanajuato, México, tengo
                    3 años de experiencia trabajando en empresas con diversos proyectos
                    desde PHP hasta NodeJS, también soy estudiante de Maestría en 
                    Sistemas Computacionales en la Universidad Autonóma de Querétaro.
                    Además comencé mi carrera como freelancer y actualmente trabajo 
                    con una empresa desarrollando una aplicación para un proyecto
                    de domótica.
                </p>
            </div>
            <div className="technologies text-center">
                <img src="/public/assets/img/Angular.png" alt=""/>
                <img src="/public/assets/img/Expressjs.png" alt=""/>
                <img src="/public/assets/img/Node.png" alt=""/>
            </div>
            <p className="joke">Ya sé ya sé este sitio está hecho con el poderosisimo React...</p>
        </div>
    </section>
);

export default Introduction;