import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Home = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop >= 60);
  };

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    place: '',
    email: '',
    phone: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        console.log('send')
      const response = await axios.post('/api/sendMail', formData); // Serverless function URL
      setSuccessMessage(response.data.message);
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Error sending email');
    }

    // Clear form after submit
    setFormData({
      name: '',
      place: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div>
      
      {/* Home Section */}
      <section id="home" className="home">
        <div className="container home-container text-center">
          <div className="">
            <div className="banner-right col-md-6 col-6 align-items-center">
              <h4 className="banner-h4">Hi, I'm <b>Akhil Joseph</b></h4>
              <h1 className="mb-3 mt-1 banner-h1 text-info">DEVELOPER</h1>
              <p className="banner-sub me-md-8">I love to work in full stack development. I always try my best to make good websites.</p>
              <div className="align-items-center buttons-banner ">
                <a href="/about" className="btn-style">Hire Me</a>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section id="services" class="" style={{paddingTop: '6em', paddingBottom: '6em'}}>
      <div class="container">
        <h2 class="text-center heading" >Services</h2>
        <div class="row p-3 pb-5">
          <div class="col-lg-4 col-md-6">
            <div class="card text-center p-3 mt-2">
                <img src="src/assets/images/web_designing.jpg" alt=""></img>
              <div class="card-body">
                <h4 class="card-title pt-5">Web Designing</h4>
                <a href="/services" class="btn more p-0">Explore More <i class="fas fa-long-arrow-alt-right ms-1"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card  text-center p-3 mt-2">
              <img src="src/assets/images/web_development.jpg" alt=""></img>
              <div class="card-body">
                <h4 class="card-title pt-5">Web Development</h4>
                <a href="/services" class="btn more p-0">Explore More <i class="fas fa-long-arrow-alt-right ms-1"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card text-center p-3 mt-2">
              <img src="../src/assets/images/web_deployment.jpg" alt=""></img>
              <div class="card-body">
                <h4 class="card-title pt-5">Web Deployment</h4>
                <a href="/services" class="btn more p-0">Explore More <i class="fas fa-long-arrow-alt-right ms-1"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card text-center p-3 mt-2">
              <img src="../../../src/assets/images/content_writing.jpg" alt=""></img>
              <div class="card-body">
                <h4 class="card-title pt-5">Content Writing</h4>
                <a href="/services" class="btn more p-0">Explore More <i class="fas fa-long-arrow-alt-right ms-1"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card text-center p-3 mt-2">
              <img src="../../src/assets/images/seo.jpg" alt=""></img>
              <div class="card-body">
                <h4 class="card-title pt-5">SEO Implementation</h4>
                <a href="/services" class="btn more p-0">Explore More <i class="fas fa-long-arrow-alt-right ms-1"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card text-center p-3 mt-2">
              <img src="src/assets/images/web_updation.jpg" alt=""></img>
              <div class="card-body">
                <h4 class="card-title pt-5">Web Updation</h4>
                <a href="/services" class="btn more p-0">Explore More <i class="fas fa-long-arrow-alt-right ms-1"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section pb-5" style={{ paddingTop: '6em' }}>
        <div className="container" >
          <h2 className="text-center heading">Contact me</h2>
          <div class="row pt-3" style={{margin:"20px"}}>
          <div class="col-md-12">
          <form id="submit-form" onSubmit={handleSubmit} >
            <div className="row" style={{padding:'10px'}}>
              <div className="form-group col-md-6">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} placeholder="Name" required />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="place">Place</label>
                <input type="text" name="place" className="form-control" value={formData.place} onChange={handleChange} placeholder="Place" />
              </div>
            </div>
            <div className="row" style={{padding:'10px'}}>
              <div className="form-group col-md-6">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} placeholder="Email" required />
              </div>
              <div className="form-group col-md-6" >
                <label htmlFor="phone">Mobile</label>
                <input type="tel" name="phone" className="form-control" value={formData.phone} onChange={handleChange} placeholder="Mobile no" required />
              </div>
            </div>
            <div className="form-group" style={{padding:'10px'}}>
              <label htmlFor="message">Message</label>
              <textarea cols="30" rows="5" name="message" className="form-control" value={formData.message} onChange={handleChange} placeholder="Type Your Message..." required />
            </div>
            <div className="form-group text-center">
              <button type="submit" className=" btn-primary btn-style">Send Message</button>
            </div>
          </form>
          </div>
          </div>
        </div>
      </section>

 
    </div>
    
    
  );

  
};



export default Home;

