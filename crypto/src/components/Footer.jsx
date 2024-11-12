import React from "react";



const Footer = () => {
  return (
    <>
    <div className="Footer">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-5 col-12 ft-1">
                    <h3><span style={{color:"red"}}>OUR</span>SERVICES</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.</p>
                    <div className="footer-icons">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 col-12 ft-2">
                    <h5> Links</h5>
                    <ul>
                        <li className="nav-item">
                            <a className="" href="/">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="" href="/">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="" href="/">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="" href="/">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="" href="/">Portfolio</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 col-lg-4 col-12 ft-3">
                    <h5>FOLLOW US</h5>
                    <p><i class="fa-solid fa-phone-volume"></i> +92 3121324083</p>
                  <h1><i class="bi bi-whatsapp"></i></h1>
                    <h1><i class="bi bi-twitter"></i></h1>
                    <h1><i class="bi bi-linkedin"></i></h1>
                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
    <div className='Last-footer'>
        <p style={{textAlign:"center"}}>@copy Right</p>
    </div>
</>
  );
};

export default Footer;
