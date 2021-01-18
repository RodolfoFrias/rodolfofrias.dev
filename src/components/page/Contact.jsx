import React from 'react';
import '../../../public/assets/styles/Contact.scss';

const Contact = () => (
    <section className="row shadow p-5" id="contact">
        <div className="col-12">
            <h1 className="text-center my-5">Contáctame</h1>
            <form action="" method="post">
                <div className="row justify-content-around">
                    <div className="col-12 col-lg-4">
                        <div className="form-group">
                            <input type="text" className="form-control" name="name"  id="name" placeholder="Name"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" name="email"  id="email" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="asunto"  id="asunto" placeholder="Asunto"/>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="form-group">
                            <textarea className="form-control" name="content" id="content" cols="5" rows="6"></textarea>
                        </div>
                        <div className="form-group text-center">
                            <input className="btn btn-md btn-secondary" type="submit" value="Enviar mensaje"/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
);

export default Contact;