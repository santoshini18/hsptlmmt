import { React, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import HeroSection from './components/HeroSection'
import '../App.css'
import { Link } from 'react-router-dom'
// import background from './img/background-image.jp
const Home = () => {

  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  return <>
    <nav className='navbar'>

      <div className='container'>

        <div className='logo'>

          <span><h1>LifeFlash</h1></span>

        </div>

        <div className='menu-icon' onClick={handleShowNavbar} >

          <ion-icon name="menu-outline"></ion-icon>

        </div>

        <div className={`nav-element ${showNavbar && 'active'} `} >
          <ul >
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/create-record'>Appintment</Link>
            </li>
            <li>
              <Link to='/'>Services</Link>
            </li>
            <li>
              <Link to='/'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    {/* hero-section  */}

    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.universityofcalifornia.edu/sites/default/files/ucla-med-day-2018.jpeg"
        alt="First slide"
        height={500}
        width={100}
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://wallpaperaccess.com/full/624111.jpg"
        alt="Second slide"
        height={500}
        width={100}
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.missouripartnership.com/wp-content/uploads/2018/01/iStock-695349930-scaled.jpg"
        alt="Third slide"
        height={500}
        width={100}
        
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

{/* <about section > */}

 
 <div className='about-section'>
  <div className='container'>
    <div className='row'>
      {/* image */}
      <div className='col mt-3'>
        <img src='./image/doctors-animate.svg' alt='' />
        
      </div>
      {/* content  */}
      <div className='col mt-5'>
        <h3 className='text-light'> ABOUT US </h3>
        <h3 className='text-light'> What we are and our history</h3>
        <p className='text-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, READ MORE
        </p>

      </div>
    </div>
  </div>
 </div>


 {/* services section  */}
 <div className='services-section'>
 <div class="container">
                <div class="row">
                    
                    <div class="col-md-6 col-md-offset-3">
                        <div class="title-block">
                            <h3>Service We Offer</h3>
                            <p>Our department &amp; special service </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-md-4">
                        <div class="service-grid">
                            <div class="service-icon">
                                <i class="flaticon-ambulance-1 icon-color-1 hvr-buzz-out"></i>
                            </div>
                            <div class="service-text">
                                <h4>Emergency Care</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    been the industry's standard dummy text ever</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="service-grid">
                            <div class="service-icon">
                                <i class="flaticon-stethoscope-1 icon-color-2 hvr-buzz-out"></i>
                            </div>
                            <div class="service-text">
                                <h4>Call Center 24/7</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    been the industry's standard dummy text ever</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="service-grid">
                            <div class="service-icon">
                                <i class="flaticon-telephone icon-color-3 hvr-buzz-out"></i>
                            </div>
                            <div class="service-text">
                                <h4>Call Center 24/7</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    been the industry's standard dummy text ever</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="service-grid">
                            <div class="service-icon">
                                <i class="flaticon-medical-2 icon-color-4 hvr-buzz-out"></i>
                            </div>
                            <div class="service-text">
                                <h4>Blood Test</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    been the industry's standard dummy text ever</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="service-grid">
                            <div class="service-icon">
                                <i class="flaticon-pulse icon-color-5 hvr-buzz-out"></i>
                            </div>
                            <div class="service-text">
                                <h4>Cardiac Surgery</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    been the industry's standard dummy text ever</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="service-grid">
                            <div class="service-icon">
                                <i class="flaticon-molar-1 icon-color-6 hvr-buzz-out"></i>
                            </div>
                            <div class="service-text">
                                <h4>Dental Care </h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    been the industry's standard dummy text ever</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="service-grid">
                            <div class="service-icon">
                                <i class="flaticon-stethoscope-1 icon-color-7 hvr-buzz-out"></i>
                            </div>
                            <div class="service-text">
                                <h4>Outdoor Checkup</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    been the industry's standard dummy text ever</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="service-grid">
                            <div class="service-icon">
                                <i class="flaticon-medical icon-color-8 hvr-buzz-out"></i>
                            </div>
                            <div class="service-text">
                                <h4>Ophthalmology</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    been the industry's standard dummy text ever</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 hidden-sm">
                        <div class="service-grid">
                            <div class="service-icon">
                                <i class="flaticon-heart icon-color-9 hvr-buzz-out"></i>
                            </div>
                            <div class="service-text">
                                <h4>Heart disease</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    been the industry's standard dummy text ever</p>
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        

 





    


        
      </>

  

}

      export default Home