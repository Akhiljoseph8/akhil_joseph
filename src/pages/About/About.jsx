import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

const About = () => {
  return (
    <>
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
              I’m Akhil Joseph, a BCA graduate with expertise in full stack web development.
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
              { title: 'Python', percentage: '75%', class: 'gradient-3', info:"info2" },
              { title: 'TypeScript', percentage: '85%' ,class: 'gradient-3', info:"info1"},
              { title: 'Angular', percentage: '90%', class: 'gradient-4', info:"info6" },
              { title: 'MongoDB', percentage: '85%',class: 'gradient-4' , info:"info1"},
              { title: 'Node.js', percentage: '80%', class: 'gradient-1', info:"info7" },
              { title: 'Express.js', percentage: '80%', class: 'gradient-1' , info:"info7"},
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

    </>
  );
};

export default About;
