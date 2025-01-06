import React from 'react';
import { useNavigate } from 'react-router-dom';
function Services() {
    const navigate = useNavigate();
    const scrollToSection = (id) => {
        navigate(`/#contact`);
        document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
    };
  return (
    <>

      {/* Services */}
      <section className="py-5 services bg-light">
        <div className="container">
          <h2 className="text-center heading">Services</h2>
          <div className="row pt-5 pb-5">
            {[
              {
                icon: 'fa-solid fa-laptop-code fa-2xl',
                title: 'Web Designing',
                desc: 'As a skilled web designer, I specialize in creating visually appealing and user-friendly websites that align with modern design trends and best practices. My approach to web design involves understanding the client’s goals, target audience, and branding to craft unique layouts that effectively communicate their message. With a keen eye for aesthetics and expertise in responsive design, I ensure that every website is optimized for all devices, providing a seamless experience for users. By combining creativity with technical knowledge, I transform ideas into stunning digital realities, helping businesses establish a strong online presence and leave a lasting impression on their audience.',
              },
              {
                icon: 'fa-solid fa-code fa-2xl',
                title: 'Web Development',
                desc: 'As a professional web developer, I specialize in building robust, efficient, and scalable websites and web applications tailored to meet specific client needs. With expertise in modern technologies and frameworks, I develop high-performance solutions that integrate seamlessly with user interfaces. My focus is on creating responsive and dynamic websites that provide a smooth user experience across all devices. From front-end development to back-end programming, I ensure that every project is built with clean, secure, and maintainable code. Whether it’s a simple business website or a complex web application, my goal is to deliver reliable solutions that drive success and growth for businesses.',
              },

              {
                icon: 'fa-solid fa-globe fa-2xl',
                title: 'Web Deployment',
                desc: 'Web deployment is a crucial phase where your website or application goes live, making it accessible to users worldwide. I specialize in deploying web projects with precision and efficiency, ensuring optimal performance and reliability. From setting up hosting environments to configuring servers, I handle the technicalities to guarantee a seamless launch. Using modern tools and techniques, I automate deployment processes to enable faster updates and scalability. My expertise includes deploying on popular platforms like AWS, Vercel, Netlify, and traditional hosting services. Security, uptime, and performance are my priorities, ensuring that your web application runs smoothly post-launch.',
              },
              {
                icon: 'fa-solid fa-file-pen fa-2xl',
                title: 'Content Writing',
                desc: 'Compelling content is at the heart of effective online communication. I offer professional content writing services designed to engage, inform, and inspire your audience. Whether you need blog posts, website copy, or social media content, I craft tailored messaging that aligns with your brands voice and objectives. My approach emphasizes clarity, creativity, and SEO optimization to enhance your visibility and drive organic traffic. With a focus on delivering high-quality, original content, I help convey your ideas and values in a way that resonates with your audience and supports your business goals.',
              },
              {
                icon: 'fa-solid fa-magnifying-glass-chart fa-2xl',
                title: 'SEO Implementation',
                desc: 'In the competitive digital landscape, visibility is key, and my SEO implementation services ensure your website stands out. I specialize in optimizing websites to rank higher on search engines, driving targeted organic traffic. From in-depth keyword research and meta tag optimization to on-page and off-page SEO techniques, I cover all aspects of search engine optimization. I also implement technical SEO practices such as improving site speed, mobile responsiveness, and creating structured data to enhance search engine indexing. My goal is to help your website achieve better visibility, attract the right audience, and convert visitors into loyal customers.',
              },
              {
                icon: 'fa-solid fa-pen-to-square fa-2xl',
                title: 'Website Updation',
                desc: 'Keeping a website updated is crucial for maintaining its performance, relevance, and user engagement. My website updation services focus on regularly refreshing your content, updating plugins, ensuring security patches are applied, and implementing design changes to match evolving trends. Whether it’s adding new features, optimizing for faster load times, or updating your site with the latest information, I ensure your website stays dynamic and aligned with your business goals. With a focus on precision and efficiency, I help maintain your website’s functionality and appeal, offering your visitors a seamless and up-to-date experience.',
              },
            ].map((service, index) => (
              <div className="col-xl-4 col-lg-6 col-md-6 pb-3" key={index}>
                <div className="servicecard h-100 shadow-sm p-4">
                  <center>
                    <span className="cardicon">
                      <i
                        className={`${service.icon}  text-info pt-1`}
                      ></i>
                    </span>
                  </center>
                  <h5 className="text-center pt-2">{service.title}</h5>
                  <p className="desc pt-4">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing py-5">
        <div className="container py-md-5 py-4">
          <div className="title-heading-w3 text-center mb-sm-5 mb-4">
            <h2 className="title-style heading">The Best Pricing Plans</h2>
          </div>
          <div className="row t-in justify-content-center">
            {[
              {
                plan: 'Basic Plan',
                price: '15',
                features: ['Ui Design', 'Frontend Development'],
              },
              {
                plan: 'Pro Plan',
                price: '45',
                features: ['Ui Design', 'Full Stack Development', 'Deployment'],
                recommended: true,
              },
              {
                plan: 'Premium Plan',
                price: '65',
                features: ['Ui Design', 'Full Stack Development', 'Deployment', 'SEO Implementation'],
              },
            ].map((pricing, index) => (
              <div
                className={`col-lg-4 col-md-6 ${
                  pricing.recommended ? 'mt-md-0 mt-4' : 'mt-lg-0 mt-4'
                }`}
                key={index}
              >
                <div className="price-card box-shadow">
                  <div className="card-body">
                    {pricing.recommended && (
                      <label className="price-label">Recommended</label>
                    )}
                    <h4 className="text-uppercase text-center mb-3">
                      {pricing.plan}
                    </h4>
                    <h5 className="pricing-card-title">
                      <span className="align-top">$</span>
                      {pricing.price}
                    </h5>
                    <ul className="list-unstyled mt-3 mb-4">
                      {pricing.features.map((feature, idx) => (
                        <li key={idx}>
                          <span className="fa fa-check"></span> {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="read-more mt-4 pt-lg-2 text-center" onClick={() => scrollToSection()}>
                      <a
                        className="btn-style"
                      >
                        Order Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

export default Services;
