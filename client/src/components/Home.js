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
              <Link to='/'><b>Home</b></Link>
            </li>
            <li>
              <Link to='/create-record'><b>Appintment</b></Link>
            </li>
            <li>
              <Link to='/'><b>Services</b></Link>
            </li>
            <li>
              <Link to='/'><b>Blogs</b></Link>
            </li>
            <li>
              <Link to='/'><b>Contact</b></Link>
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
        src='https://www.missouripartnership.com/wp-content/uploads/2018/01/iStock-695349930-scaled.jpg'
          alt="First slide"
          height={500}
          width={100}
        />
        <Carousel.Caption>
          <h1  className='text-dark'><b>WELCOME TO LIFEFLASH</b></h1>
          <p className='text-dark'><b>BE CLAM QUITE COOL</b></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1479129013/photo/medical-technology-and-health-care-service-doctor-white-cross-of-medical-with-healthcare.jpg?s=612x612&w=is&k=20&c=013fsJHxICm5Wam84U7RTSgohtSV1uEWs471Xi4071Q="
          alt="Second slide"
          height={500}
          width={100}
        />

        <Carousel.Caption>
          <h1  className='text-dark'><b>TRY TO BE HEALTHY</b></h1>
          <p className='text-dark'><b>Ain't That Nice ?</b></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.wixstatic.com/media/49d95c_9e5994f8125f470c81854e63af591e6a~mv2.jpg/v1/fill/w_640,h_396,al_b,q_80,usm_0.66_1.00_0.01,enc_auto/49d95c_9e5994f8125f470c81854e63af591e6a~mv2.jpg

          "
          alt="Third slide"
          height={500}
          width={100}

        />

        <Carousel.Caption>
          <h3  className='text-light'><b>BE AWESOME IN A SMOOTH WAY</b></h3>
          <p  className='text-light'><b>We Take Care of Your Healthy Life
           </b>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    {/* <Linkbout section > */}


    <div className='about-section'>
      <div className='container'>
        <div className='row'>
          {/* image */}
          <div className='col mt-3'>
            <img src='./image/doctors-animate.svg' alt='' />

          </div>
          {/* content  */}
          <div className='col mt-5'>
            <h1 className='text-success text-center'><b>ABOUT US </b></h1>
            <h2 className='text-success text-center'><b> What we are and our history</b></h2>
            <p className='text-success'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, READ MORE
            </p>

          </div>
        </div>
      </div>
    </div>


    {/* services section  */}
    <div className='services-section' id='ser'>
      <div class="container">
        <div class="row text-center mb-5">

          <div class="col-md-6 col-md-offset-3 ml-5 pt-5">
            <div class="title-block">
              <h1><b>Service We Offer</b></h1>
              <p><b>Our department &amp; special service</b> </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-md-4 ">
            <div class="service-grid card pl-2"> 
              <div class="service-icon">
                <img src="./image/ambulance.svg" alt='' height={60} />
              </div>
              <div class="service-text">
                <h4>Emergency Care</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text ever</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 ">
            <div class="service-grid card pl-2">
              <div class="service-icon">
                <img src='./image/doctors-consultation.svg' alt='' height={60} />
              </div>
              <div class="service-text">
                <h4>Doctors 24/7</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text ever</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 ">
            <div class="service-grid card ">
              <div class="service-icon">
                <img src='./image/call-center.svg' alt='' height={60} />

              </div>
              <div class="service-text">
                <h4>Doctors 24/7</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text ever</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 ">
            <div class="service-grid card ">
              <div class="service-icon">
                <img src='./image/blood-test.svg' alt='' height={60} />
              </div>
              <div class="service-text">
                <h4>Blood Test</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text ever</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 ">
            <div class="service-grid card ">
              <div class="service-icon">
                <img src='./image/heart-health.svg' alt='' height={60} />
              </div>
              <div class="service-text">
                <h4>Cardiac Surgery</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text ever</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="service-grid card ">
              <div class="service-icon">
                <img src='./image/dental-check.svg' alt='' height={60} />
              </div>
              <div class="service-text">
                <h4>Dental Care </h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text ever</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="service-grid card ">
              <div class="service-icon">
                <img src='./image/doctor-with-document.svg' alt='' height={60} />
              </div>
              <div class="service-text">
                <h4>Outdoor Checkup</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text ever</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="service-grid card ">
              <div class="service-icon">
                <img src='./image/eye.svg' alt='' height={60} />
              </div>
              <div class="service-text">
                <h4>Ophthalmology</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text ever</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 hidden-sm">
            <div class="service-grid card ">
              <div class="service-icon">
                <img src='./image/heart.svg' alt='' height={60} />
              </div>
              <div class="service-text">
                <h4>Heart disease</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text ever</p>
              </div>
            </div>
          </div>
          <div>
             
          </div>
        </div>
      </div>
    </div>


  {/* footer section  */}
 
<div className="text-center text-lg-start bg-light text-muted">

  <div className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    
    <div>
      <Link href="" className="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </Link>
      <Link href="" className="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </Link>
      <Link href="" className="me-4 text-reset">
        <i class="fab fa-google"></i>
      </Link>
      <Link href="" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </Link>
      <Link href="" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </Link>
      <Link href="" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </Link>
    </div>
    
  </div>
 
  <div className="">
    <div className="container text-center text-md-start mt-5">

      <div className="row mt-3">
        
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
  
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <Link href="#!" class="text-reset">Angular</Link>
          </p>
          <p>
            <Link href="#!" class="text-reset">React</Link>
          </p>
          <p>
            <Link href="#!" class="text-reset">Vue</Link>
          </p>
          <p>
            <Link href="#!" class="text-reset">Laravel</Link>
          </p>
        </div>
       
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <Link href="#!" class="text-reset">Pricing</Link>
          </p>
          <p>
            <Link href="#!" class="text-reset">Settings</Link>
          </p>
          <p>
            <Link href="#!" class="text-reset">Orders</Link>
          </p>
          <p>
            <Link href="#!" class="text-reset">Help</Link>
          </p>
        </div>
        
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
        
      </div>
     
    </div>
  </div>
 

  
  
 
</div>

  </>



}

export default Home


