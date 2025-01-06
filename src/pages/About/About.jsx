import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

const About = () => {
  return (
    <>
      {/* <header
        className="header fixed-top bg-white header-style"
        id="site-header"
        style={{ width: '100%', zIndex: 1030 }}
      >
        <div className="row">
          <div className="col-md-6 col-7 p-3 pl-5">
            <h2 className="toph2" style={{ fontWeight: 'bold' }}>
              Akhil Joseph
            </h2>
          </div>
          <div className="col-md-6 col-5 my-auto">
            <nav className="navbar navbar-expand-lg navbar-white">
              <button
                id="navbar-toggler"
                className="navbar-toggler ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#navbarScroll"
                aria-controls="navbarScroll"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span id="toggler-icon" className="toggler-icon fa icon-expand fa-bars"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/services">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/about">
                      About me
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header> */}

      <section className="aboutblock py-5 bg-light" id="about">
        <div className="container">
          <h2 className="title-style text-center heading">About Me</h2>
          <div className="row align-items-center pt-5 about-div" style={{justifyContent:'center', alignItems:'center'}}>
            <div className="col-lg-4">
              <div className="position-relative">
                <img
                  src="/images/akhilimg.png"
                  alt="no"
                  className="radius-image img-fluid about-img"
                />
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5 mt-lg-0 mt-5">
              <h3 className="title-small mb-1">My Intro</h3>
              <p className="mt-3">
                I am Akhil Joseph. I am a BCA graduate with strong full stack development skills.
              </p>
              <div className="my-info mt-md-5 mt-1">
                {[
                  { label: 'Name', value: 'Akhil Joseph' },
                  { label: 'Age', value: '22 Years' },
                  { label: 'From', value: 'Kerala, India' },
                  { label: 'Phone', value: '9778376047' },
                  {
                    label: 'Email',
                    value: (
                      <a
                        href="mailto:akhiljosephaj85@gmail.com"
                        className="mail"
                        type="mail"
                      >
                        akhiljosephaj85@gmail.com
                      </a>
                    ),
                  },
                ].map((item, index) => (
                  <ul className="single-info" key={index}>
                    <li className="name-style">{item.label}</li>
                    <li>:&nbsp;&nbsp;</li>
                    <li>
                      <p>{item.value}</p>
                    </li>
                  </ul>
                ))}
              </div>
              <a
                href="https://akhil-joseph.vercel.app/resume/Akhil_Resume.pdf"
                target="_blank"
                className="btn-style mt-5"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="my-skills py-5" id="progress">
        <div className="container py-md-5 py-4">
          <div className="text-center mb-sm-5 mb-4">
            <h2 className="heading mb-1">My Skills</h2>
          </div>
          <div className="row py-lg-4">
            {[
              { title: 'JavaScript', percentage: '85%', class: 'gradient-1', info:"info1" },
              { title: 'React.js', percentage: '85%',class: 'gradient-1', info:"info1" },
              { title: 'HTML', percentage: '90%', class: 'gradient-2', info:"info6"},
              { title: 'CSS', percentage: '90%',class: 'gradient-2', info:"info6" },
              { title: 'Python', percentage: '80%', class: 'gradient-3', info:"info7" },
              { title: 'TypeScript', percentage: '85%' ,class: 'gradient-3', info:"info1"},
              { title: 'Angular', percentage: '90%', class: 'gradient-4', info:"info6" },
              { title: 'MongoDB', percentage: '85%',class: 'gradient-4' , info:"info1"},
              { title: 'SQL', percentage: '75%', class: 'gradient-1', info:"info2" },
              { title: 'Bootstrap', percentage: '85%', class: 'gradient-1' , info:"info1"},
            ].map((skill, index) => (
              <div
                className={`col-lg-6 ${index % 2 === 0 ? 'pe-lg-5' : 'ps-lg-5 mt-lg-0 mt-5'}`}
                key={index}
              >
                <div className={`progress-info ${skill.info}`}>
                  <h6 className="progress-tittle">
                    {skill.title}
                    <span>{skill.percentage}</span>
                  </h6>
                  <div className="progress">
                    <div
                      className={`progress-bar progress-bar-striped ${skill.class}`}
                      role="progressbar"
                      style={{ width: skill.percentage }}
                      aria-valuenow={parseInt(skill.percentage, 10)}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <footer className="footer text-center py-5 mt-4 bg-dark">
        <div className="container pt-1">
          <div className="mx-auto" style={{ maxWidth: '600px' }}>
            <h6 className="mt-2 text-white">Follow Me</h6>
            <div className="social-icons-main mt-4 pb-3">
              <ul className="social-icons">
                {[
                  { href: 'https://www.facebook.com/akhil.joseph.351104', icon: 'fab fa-facebook-f' },
                  { href: 'https://www.linkedin.com/in/akhiljoseph8', icon: 'fab fa-linkedin-in' },
                  { href: 'https://www.instagram.com/akhil.joh/', icon: 'fab fa-instagram' },
                ].map((social, index) => (
                  <li key={index}>
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <i className={social.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="footer-text text-white pt-3">
            2024 Biodata. | Design by{' '}
            <a href="index.html" className="link">
              Akhil Joseph
            </a>
          </p>
        </div>
      </footer> */}
    </>
  );
};

export default About;
