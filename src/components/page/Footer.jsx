import React from 'react';

const divStyle = {
  fontSize: '10px',
};

const Footer = () => (
  <section className='footer mt-5'>

    <link rel='stylesheet' type='text/css' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' />
    <div className='row'>
      <div className='col-12 col-md-12 text-center'>
        <a href='https://www.github.com/RodolfoFrias' target='_blank' rel='noreferrer' className='btn btn-social-icon btn-github'>
          <span className='fa fa-github fa-md fa-3x rounded p-2' />
          <p className=''>Github</p>
        </a>
        <a href='https://www.linkedin.com/in/rodolfo-guadalupe-frías-lugo-a4810516b' target='_blank' rel='noreferrer' className='btn btn-social-icon btn-linkedin'>
          <span className='fa fa-linkedin fa-md fa-3x rounded p-2' />
          <p className=''>Linkedin</p>
        </a>
        <div className='footer-copyright text-center'> &copy; 2021 Rodolfo Frías:</div>
        <p style={divStyle}>
          The space theme was taken from
          {' '}
          <a
            href='https://www.salehriaz.com/'
            target='__blank'
          >
            Saleh Riaz
          </a>
        </p>
      </div>
    </div>

  </section>
);

export default Footer;
