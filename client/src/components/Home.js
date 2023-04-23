// import { React, useState } from 'react'
// import Carousel from 'react-bootstrap/Carousel';
// // import HeroSection from './components/HeroSection'
// import '../App.css'
// import { Link } from 'react-router-dom'
// // import background from './img/background-image.jp
// const Home = () => {

//   const [showNavbar, setShowNavbar] = useState(false)

//   const handleShowNavbar = () => {
//     setShowNavbar(!showNavbar)
//   }
//   return <>
//     <nav className='navbar'>

//       <div className='container'>

//         <div className='logo'>

//           <span><h1>LifeFlash</h1></span>

//         </div>

//         <div className='menu-icon' onClick={handleShowNavbar} >

//           <ion-icon name="menu-outline"></ion-icon>

//         </div>

//         <div className={`nav-element ${showNavbar && 'active'} `} >
//           <ul >
//             <li>
//               <Link to='/'><b>Home</b></Link>
//             </li>
//             <li>
//               <Link to='/create-record'><b>Appintment</b></Link>
//             </li>
//             <li>
//               <Link to='/'><b>Services</b></Link>
//             </li>
//             <li>
//               <Link to='/'><b>Blogs</b></Link>
//             </li>
//             <li>
//               <Link to='/'><b>Contact</b></Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>

//     {/* hero-section  */}

//     <Carousel>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//         src='https://www.missouripartnership.com/wp-content/uploads/2018/01/iStock-695349930-scaled.jpg'
//           alt="First slide"
//           height={500}
//           width={100}
//         />
//         <Carousel.Caption>
//           <h1  className='text-dark'><b>WELCOME TO LIFEFLASH</b></h1>
//           <p className='text-dark'><b>BE CLAM QUITE COOL</b></p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="https://www.cbo.gov/sites/default/files/styles/1500/public/2020-09/56620-home-near-universal-coverage.png?itok=9ovvLaXL"
//           alt="Second slide"
//           height={500}
//           width={100}
//         />

//         <Carousel.Caption>
//           <h1  className='text-dark'><b>TRY TO BE HEALTHY</b></h1>
//           <p className='text-dark'><b>Ain't That Nice ?</b></p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="https://static.wixstatic.com/media/49d95c_9e5994f8125f470c81854e63af591e6a~mv2.jpg/v1/fill/w_640,h_396,al_b,q_80,usm_0.66_1.00_0.01,enc_auto/49d95c_9e5994f8125f470c81854e63af591e6a~mv2.jpg"
//           alt="Third slide"
//           height={500}
//           width={100}

//         />

//         <Carousel.Caption>
//           <h3  className='text-light'><b>BE AWESOME IN A SMOOTH WAY</b></h3>
//           <p  className='text-light'><b>We Take Care of Your Healthy Life
//            </b>
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>

//     {/* <Linkbout section > */}


//     <div className='about-section'>
//       <div className='container'>
//         <div className='row'>
//           {/* image */}
//           <div className='col mt-3'>
//             <img src='./image/doctors-animate.svg' alt='' />

//           </div>
//           {/* content  */}
//           <div className='col mt-5'>
//             <h1 className='text-success text-center'><b>ABOUT US </b></h1>
//             <h2 className='text-success text-center'><b> What we are and our history</b></h2>
//             <p className='text-success'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting <link>READ MORE</link>
//             </p>
           
//           </div>
//         </div>
//       </div>
//     </div>
// {/*our doctors*/}
// <div className="destination-section">
  //    <div className='heading'>
    //    <h1 className='text-center pt-4'>OUR DOCTORS</h1>
      //</div>
      //<div className="container ">
        //<div className="row mt-5">
          //<div className="col card mr-3">
            //<img className="card-img-top" src="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg" alt=" " height={200} />
            //<div className="card-body">
              //<h5 className="card-title">John Deo</h5>
              //<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              //<Link to='/create-record' className="btn btn-success">Make Appointment</Link>
             
            //</div>
          //</div>
          
          //<div className="col card mr-3">
            //<img className="card-img-top" src= "https://img.freepik.com/free-photo///doctor-with-stethoscope-hand-her-pocket-closeup-female-smiling-while-standing-straight-white-background_657921-731.jpg" alt=" " height={200} />
            //<div className="card-body">
              //<h5 className="card-title">John Deo</h5>
              //<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
              //<Link to='/create-record' className="btn btn-success">Make Appointment</Link>
            //</div>
          //</div>

          //<div className="col card mr-3">
            //<img className="card-img-top" src="https://media.istockphoto.com/id/1189304032/photo/doctor-holding-digital-tablet-at-meeting-room.jpg?s=612x612&w=0&k=20&c=RtQn8w_vhzGYbflSa1B5ea9Ji70O8wHpSgGBSh0anUg=" alt=" " height={200} />
            //<div className="card-body">
              //<h5 className="card-title">John Deo</h5>
              //<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              //<Link to='/create-record' className="btn btn-success">Make Appointment</Link>
            //</div>
          //</div>

          //<div className="col card">
            //<img className="card-img-top" src="https://media.istockphoto.com/id/1390000431/photo/shot-of-a-mature-doctor-using-a-digital-tablet-in-a-modern-hospital.jpg?b=1&s=170667a&w=0&k=20&c=Jxhk_KZSo9oSZ01Nv8TxjCKKEVZQJFVWICZb64AEIMQ=" alt=" " height={200} />
            //<div className="card-body">
             // <h5 className="card-title">John Deo</h5>
              //<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              //<Link to='/create-record' className="btn btn-success">Make Appointment</Link>
            //</div>
          //</div>
        //</div>


      //</div>

    //</div> */}
// {/*blogs*/}
// <div>our blogs</div>



//     {/* services section  */}
    // <div className='services-section' id='ser'>
    //   <div class="container">
    //     <div class="row text-center mb-5">

    //       <div class="col-md-6 col-md-offset-3 ml-5 pt-5">
    //         <div class="title-block">
    //           <h1><b>Service We Offer</b></h1>
    //           <p><b>Our department &amp; special service</b> </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div class="row">
    //       <div class="col-sm-6 col-md-4 ">
    //         <div class="service-grid card pl-2"> 
    //           <div class="service-icon">
    //             <img src="./image/ambulance.svg" alt='' height={60} />
    //           </div>
    //           <div class="service-text">
    //             <h4>Emergency Care</h4>
    //             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
    //               been the industry's standard dummy text ever</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="col-sm-6 col-md-4 ">
    //         <div class="service-grid card pl-2">
    //           <div class="service-icon">
    //             <img src='./image/doctors-consultation.svg' alt='' height={60} />
    //           </div>
    //           <div class="service-text">
    //             <h4>Doctors 24/7</h4>
    //             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
    //               been the industry's standard dummy text ever</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="col-sm-6 col-md-4 ">
    //         <div class="service-grid card ">
    //           <div class="service-icon">
    //             <img src='./image/call-center.svg' alt='' height={60} />

    //           </div>
    //           <div class="service-text">
    //             <h4>Doctors 24/7</h4>
    //             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
    //               been the industry's standard dummy text ever</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="col-sm-6 col-md-4 ">
    //         <div class="service-grid card ">
    //           <div class="service-icon">
    //             <img src='./image/blood-test.svg' alt='' height={60} />
    //           </div>
    //           <div class="service-text">
    //             <h4>Blood Test</h4>
    //             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
    //               been the industry's standard dummy text ever</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="col-sm-6 col-md-4 ">
    //         <div class="service-grid card ">
    //           <div class="service-icon">
    //             <img src='./image/heart-health.svg' alt='' height={60} />
    //           </div>
    //           <div class="service-text">
    //             <h4>Cardiac Surgery</h4>
    //             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
    //               been the industry's standard dummy text ever</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="col-sm-6 col-md-4">
    //         <div class="service-grid card ">
    //           <div class="service-icon">
    //             <img src='./image/dental-check.svg' alt='' height={60} />
    //           </div>
    //           <div class="service-text">
    //             <h4>Dental Care </h4>
    //             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
    //               been the industry's standard dummy text ever</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="col-sm-6 col-md-4">
    //         <div class="service-grid card ">
    //           <div class="service-icon">
    //             <img src='./image/doctor-with-document.svg' alt='' height={60} />
    //           </div>
    //           <div class="service-text">
    //             <h4>Outdoor Checkup</h4>
    //             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
    //               been the industry's standard dummy text ever</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="col-sm-6 col-md-4">
    //         <div class="service-grid card ">
    //           <div class="service-icon">
    //             <img src='./image/eye.svg' alt='' height={60} />
    //           </div>
    //           <div class="service-text">
    //             <h4>Ophthalmology</h4>
    //             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
    //               been the industry's standard dummy text ever</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="col-sm-6 col-md-4 hidden-sm">
    //         <div class="service-grid card ">
    //           <div class="service-icon">
    //             <img src='./image/heart.svg' alt='' height={60} />
    //           </div>
    //           <div class="service-text">
    //             <h4>Heart disease</h4>
    //             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
    //               been the industry's standard dummy text ever</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div>
             
    //       </div>
    //     </div>
    //   </div>
    // </div>


//   {/* footer section  */}
 
// <div className="text-center text-lg-start bg-light text-muted">

//   <div className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
//     <div className="me-5 d-none d-lg-block">
//       <span>Get connected with us on social networks:</span>
//     </div>
    
//     <div>
//       <Link href="" className="me-4 text-reset">
//         <i class="fab fa-facebook-f"></i>
//       </Link>
//       <Link href="" className="me-4 text-reset">
//         <i class="fab fa-twitter"></i>
//       </Link>
//       <Link href="" className="me-4 text-reset">
//         <i class="fab fa-google"></i>
//       </Link>
//       <Link href="" className="me-4 text-reset">
//         <i className="fab fa-instagram"></i>
//       </Link>
//       <Link href="" className="me-4 text-reset">
//         <i className="fab fa-linkedin"></i>
//       </Link>
//       <Link href="" className="me-4 text-reset">
//         <i className="fab fa-github"></i>
//       </Link>
//     </div>
    
//   </div>
 
//   <div className="">
//     <div className="container text-center text-md-start mt-5">

//       <div className="row mt-3">
        
//         <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
  
//           <h6 className="text-uppercase fw-bold mb-4">
//             <i className="fas fa-gem me-3"></i>Company name
//           </h6>
//           <p>
//             Here you can use rows and columns to organize your footer content. Lorem ipsum
//             dolor sit amet, consectetur adipisicing elit.
//           </p>
//         </div>
        
//         <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
//           <h6 className="text-uppercase fw-bold mb-4">
//             Products
//           </h6>
//           <p>
//             <Link href="#!" class="text-reset">Angular</Link>
//           </p>
//           <p>
//             <Link href="#!" class="text-reset">React</Link>
//           </p>
//           <p>
//             <Link href="#!" class="text-reset">Vue</Link>
//           </p>
//           <p>
//             <Link href="#!" class="text-reset">Laravel</Link>
//           </p>
//         </div>
       
//         <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
//           <h6 class="text-uppercase fw-bold mb-4">
//             Useful links
//           </h6>
//           <p>
//             <Link href="#!" class="text-reset">Pricing</Link>
//           </p>
//           <p>
//             <Link href="#!" class="text-reset">Settings</Link>
//           </p>
//           <p>
//             <Link href="#!" class="text-reset">Orders</Link>
//           </p>
//           <p>
//             <Link href="#!" class="text-reset">Help</Link>
//           </p>
//         </div>
        
//         <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
//           <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
//           <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
//           <p>
//             <i class="fas fa-envelope me-3"></i>
//             info@example.com
//           </p>
//           <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
//           <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
//         </div>
        
//       </div>
     
//     </div>
//   </div>
 
// </div>

//   </>

// }

// export default Home




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
              <Link to='/'><b>Doctors</b></Link>
            </li>
            <li>
              <Link to='/'><b>Services</b></Link>
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
        src="https://www.missouripartnership.com/wp-content/uploads/2018/01/iStock-695349930-scaled.jpg'"
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
        src="https://www.cbo.gov/sites/default/files/styles/1500/public/2020-09/56620-home-near-universal-coverage.png?itok=9ovvLaXL"
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
        src="https://static.wixstatic.com/media/49d95c_9e5994f8125f470c81854e63af591e6a~mv2.jpg/v1/fill/w_640,h_396,al_b,q_80,usm_0.66_1.00_0.01,enc_auto/49d95c_9e5994f8125f470c81854e63af591e6a~mv2.jpg"
        alt="Third slide"
        height={500}
        width={100}
        
      />

      <Carousel.Caption>
      <h3  className='text-light'><b>BE AWESOME IN A SMOOTH WAY</b></h3>
         <p  className='text-light'><b>We Take Care of Your Healthy Life </b></p>
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
        <h1 className='text-success'> <b>ABOUT US </b></h1>
        <h2 className='text-success'> <b>What we are and our history</b></h2>
        <p className='text-success'><b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</b> READ MORE
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

         {/*doctors*/}    

       

<div className="destination-section">
      <div className='heading'>
        <h1 className='text-center pt-4'>OUR DOCTORS</h1>
      </div>


      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col card mr-3">
            <img className="card-img-top" src="https://media.istockphoto.com/id/1390000431/photo/shot-of-a-mature-doctor-using-a-digital-tablet-in-a-modern-hospital.jpg?b=1&s=170667a&w=0&k=20&c=Jxhk_KZSo9oSZ01Nv8TxjCKKEVZQJFVWICZb64AEIMQ=" alt=" " height={200} />
            <div className="card-body">
              <h5 className="card-title">John Deo</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to='/create-record' className="btn btn-success">Make An Appointment:</Link>
            </div>
          </div>

          <div className="col card mr-3">
            <img className="card-img-top" src="https://media.istockphoto.com/id/1189304032/photo/doctor-holding-digital-tablet-at-meeting-room.jpg?s=612x612&w=0&k=20&c=RtQn8w_vhzGYbflSa1B5ea9Ji70O8wHpSgGBSh0anUg=" alt=" " height={200} />
            <div className="card-body">
              <h5 className="card-title">John Deo</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to='/create-record' className="btn btn-success">Make An Appointment:</Link>
            </div>
          </div>

          <div className="col card mr-3">
            <img className="card-img-top" src="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg" alt=" " height={200} />
            <div className="card-body">
              <h5 className="card-title">John Deo</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to='/create-record' className="btn btn-success">Make An Appointment:</Link>
            </div>
          </div>

          <div className="col card">
            <img className="card-img-top" src="https://img.freepik.com/free-photo///doctor-with-stethoscope-hand-her-pocket-closeup-female-smiling-while-standing-straight-white-background_657921-731.jpg" alt=" " height={200} />
            <div className="card-body">
              <h5 className="card-title">John Deo</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to='/create-record' className="btn btn-success">Make An Appointment:</Link>
            </div>
          </div>
        </div>


      </div>

    </div>
{/*blogs*/}
<div className="destination-section">
      <div className='heading'>
        <h1 className='text-center pt-4'>OUR Latest News</h1>
      </div>


      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col card mr-3">
            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-TwjBBkWYVNUOeqE0IQIi2f4pd5UAwh4Whs5mkdmh725YUHsKW4fTm4z--KHWzSScWdM&usqp=CAU" alt=" " height={200} />
            <div className="card-body">
              <h5 className="card-title">John Deo</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              
            </div>
          </div>

         
          <div className="col card mr-3">
            <img className="card-img-top" src="https://amorhospitals.com/images/amor/news/amor-news-36.jpg" alt=" " height={200} />
            <div className="card-body">
              <h5 className="card-title">John Deo</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             
            </div>
          </div>

          <div className="col card">
            <img className="card-img-top" src="https://odishabytes.com/wp-content/uploads/2020/04/coronavirus-2-1200x675.jpg" alt=" " height={200} />
            <div className="card-body">
              <h5 className="card-title">John Deo</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             
            </div>
          </div>
        </div>


      </div>

    </div>




{/*footer*/}
<div className="footer-section">
      <div className="footer-container m-auto">
        <div className="row ml-5">
          <div className="col mb-3">
              <h3 className='pt-4'>Connect us</h3>            
              <Link><i class="fa-brands fa-instagram fa-beat mr-3 ml-3 f-2 text-danger pt-3 "></i></Link> <br />
              <Link><i class="fa-brands fa-facebook fa-beat mr-3 ml-3 mt-2 text-primary"></i></Link> <br />
              <Link><i class="fa-brands fa-twitter fa-beat mr-3 ml-3 mt-2 text-info"></i></Link> <br />
              <Link><i class="fa-brands fa-linkedin-in fa-beat ml-3 mt-2 text-"></i></Link>           
          </div>

          <div className="col mb-3">
              <h3 className='pt-4'>Services</h3>            
              <h6 className='ml-4 pt-3'>lorem</h6>
              <br />
              <h6 className='ml-4'>lorem</h6>
              <br />
              <h6 className='ml-4'>lorem</h6>
              <br />

          </div>
          <div className="col mb-3">
              <h3 className='pt-4'>Our community</h3>            
              <h6 className='ml-4 pt-3'>Forums</h6>
              <br />
              <h6 className='ml-4'>Blogs</h6>
              <br />
              <h6 className='ml-4'>Meetups</h6>
              <br />

          </div>

          <div className="col mb-3">
              <h3 className='pt-4'>Contact</h3>            
              <h6 className='ml-4 pt-3'>Gmail 📧</h6>
              <br />
              <h6 className='ml-4'>Phone 📲</h6>
              <br />
              <h6 className='ml-4'>Map 🗺️</h6>
              <br />           
          </div>
        </div>
      </div>

    </div>


       
          
      </>

  

}

      export default Home

