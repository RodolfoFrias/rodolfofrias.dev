import React from 'react';

const Project = () => {
    return (
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 p-0 item">
            <div className="card shadow-sm border-0 rounded">
                <div className="card-body p-0">
                    <a href="https://dolta.com.mx" target="__blank">
                        <img src="public/assets/img/dolta.png" alt="" className="w-100 card-img-top" />
                    </a>
                    <div className="p-4">
                        <h5 className="mb-0 text-dark text-center">Dolta</h5>
                        <p className="small text-muted">
                            Aplicación web para hacer reservaciones en bares y antros
                    </p>
                        <ul className="social mb-0 list-inline mt-3">
                            <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                            <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                            <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                            <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Project;