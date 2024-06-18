/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <><div>
        <header className="header">
          <Link to="/" className="logo">URBAN CITIES</Link>
          <nav className="navbar">
          <Link to="/" className="active">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/login">LOGIN</Link>
            <Link to="/signup">REGISTER</Link>
          </nav>
        </header>

        <section className="home">
          <img src="images/governmentbuilding.jpeg" alt="Government buildings" />
          <div className="content">
            <h3>Modern government buildings</h3>
            <span>Urban planning and smart cities.</span>
          </div>
        </section>

        <h1 className="ser">SERVICES</h1>

        <section className="service">
          <table>
            <tr>
              <td>
                <img src="images/urbansettlement.jpeg" alt="Settlement" />
                <h6>Settlement</h6>
              </td>
              <td>
                <img src="/images/traffic.jpg" alt="Traffic" />
                <h6>Traffic</h6>
              </td>
              <td>
                <img src="/images/publicservice.jpg" alt="Public services" />
                <h6>Public services</h6>
              </td>
              <td>
                <img src="/images/education.jpg" alt="Education" />
                <h6>Education</h6>
              </td>
            </tr>
            <tr>
              <td>
                <img src="/images/healthcare.jpg" alt="Healthcare" />
                <h6>Healthcare</h6>
              </td>
              <td>
                <img src="/images/businessactivity.webp" alt="Business" />
                <h6>Business</h6>
              </td>
              <td>
                <img src="/images/watermanagement.jpg" alt="Water Management" />
                <h6>Water Management</h6>
              </td>
              <td>
                <img src="/images/Luxury hotel in Dubai.jpeg" alt="Hotels" />
                <h6>Hotels</h6>
              </td>
            </tr>
          </table>
        </section>

        <section className="home-about">
          <div className="image">
            <div className="box">
              <img src="images/urban-planning.jpg" alt="Data planning" />
            </div>
          </div>
          <div className="content">
            <h3 className="image">About smart cities and data planning</h3>
            <p className='para'>The purpose of smart cities and urban data planning is to use technology and data to improve the efficiency, sustainability, and overall quality of life in urban areas. By collecting and analyzing data from various sources such as sensors, cameras, and other devices, city planners can make informed decisions about infrastructure, transportation, public services, and more.</p>
            <a href="#">read more</a>
          </div>
        </section>

        <section className="home-packages">
          <h1 className="heading-title">Our packages</h1>
          <div className="box-container">
            <div className="box">
              <div className="image">
                <img src="images/Greencity.jpg" alt="Urban data planning" />
              </div>
              <div className="content">
                <h3>Urban data planning</h3>
                <p>Urban data planning uses data analysis to inform decision-making, improve infrastructure development, address urban challenges, and promote sustainable urban development.</p>
                <a href="#" className="btn">register now</a>
              </div>
            </div>

            <div className="box">
                     <div className="image">
                        <img src="images/schools.png" alt="Education" />
                     </div>
                     <div className="content">
                         <h3>Education</h3>
                         <p>Modern education emphasizes personalized learning, technology integration, collaborative and project-based learning and prepare students for success in a rapidly evolving world.
                         </p>
                             <a href="#" className="btn">register now</a>
                     </div>
             </div>
             <div className="box">
                 <div className="image">
                    <img src="images/trafficmanagement.jpg" alt="traffic management" />
                 </div>
                 <div className="content">
                     <h3>traffic management</h3>
                     <p>
                         Traffic management is the process of implementing strategies to control and regulate traffic flow on roadways by reducing congestion, and enhancing transportation efficiency.
                         </p>
                         <a href="#" className="btn">register now</a>
                 </div>
             </div>
             <div className="box">
                 <div className="image">
                    <img src="images/healthcare.jpeg" alt="Health Care" />
                 </div>
                 <div className="box"></div>
                <div className="content">
                     <h3>Health Care</h3>
                     <p>Access to quality healthcare provides treatment for illnesses, management of chronic conditions, emergency care, improved quality of life, and longevity and well-being.
                        </p>
                         <a href="#" className="btn">register now</a>
                </div>
             </div>
         </div>
         <div className="load-more"><a href="#" className="btn">load more</a></div>
     </section>
     <section className="home-offer">
         <div className="content">
             <h3> Smart cities premium</h3>
            <p>"Smart cities premium helps you to get the top-tier level of service and amenities available in a smart city. This includes advanced technology infrastructure, enhanced public services, and a higher quality of life for residents and also to get access to the areas in the smart cities."
             </p>
                <a href="#" className="btn">register now</a>
         </div>
        </section>

      </div>
      <div className="load-more">
        <a href="#" className="btn">load more</a>
        </div>
            <footer className="footer">
    <section className="footer">
        <div className="box-container">
            <div className="box" id="first">
                <h3>quick links</h3>
                <a href="home.php"><i className="fas fa-angle-right"></i> Home</a>
                <a href="about.php"><i className="fas fa-angle-right"></i> About</a>
                <a href="register.php"><i className="fas fa-angle-right"></i> Register</a>
                <a href="packages.php"><i className="fas fa-angle-right"></i> Packages</a>
                <a href="contact.php"><i className="fas fa-angle-right"></i> Form</a>
            </div>
            <div className="box" id="second">
                <h3>extra links</h3>         
                <a href="#"><i className="fas fa-angle-right"></i> Ask Question</a>
                <a href="#"><i className="fas fa-angle-right"></i> About Us</a>
                <a href="#"><i className="fas fa-angle-right"></i> Privacy Policy</a>
                <a href="#"><i className="fas fa-angle-right"></i> Terms of Use</a>
            </div>
            <div className="box" id="third">
                <h3>contact info</h3>    
                <a href="#"><i className="tel"></i> +250788845689</a>
                <a href="#"><i className="tel"></i> +250785060644</a>
                <a href="#"><i className="tel"></i> +250787765381</a>    
                <a href="#"><i className="fas email"></i> belyseniyodushima@gmail.com</a>
                <a href="#"><i className="location"></i> Kigali-Gasabo</a>
            </div>
            <div className="box" id="fourth">
                <h3>follow us</h3>
                <a href="#"><i className="facebook"></i> urban_cities</a>
                <a href="#"><i className="instagram"></i> urbaniicity31</a>
                <a href="#"><i className="email"></i> urbanciti11@gmail.com</a> 
                <a href="#"><i className="twitter"></i> @urban1.com</a>
                <a href="#"><i className="linkedin"></i> urban_@cities</a>
            </div>
        </div>
        <div className="credit" id="fifth">created by<span>Belyse</span> all rights reserved! </div>
    </section>
</footer>
</>
    );
}
export default Home;

