/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => (
    <section className="header">
       <Link to="/" className="logo">HOME</Link>
        <nav className="navbar">
            <h1>ABOUT US</h1>
        </nav>
        <div id="menu-btn" className="fas fa-bars"></div>
    </section>
);

const About = () => (
    <section className="about">
        <div className="image">
        <img src="images/urban-planning.jpg" alt="Data planning" />
        </div>
        <div className="content">
            <h3>Why choose us?</h3>
            <p>Our dedicated 24/7 customer support team is always ready to assist you...</p>
            <p>Rest easy knowing your data is secure with our advanced encryption...</p>
            <div className="icons-container">
                <div className="icons">
                    <i className="fas fa-user"></i>
                    <span>Top Services</span>
                </div>
                <div className="icons">
                    <i className="fas fa-hand-holding-usd"></i>
                    <span>Affordable Price</span>
                </div>
                <div className="icons">
                    <i className="fas fa-headset"></i>
                    <span>24/7 Services</span>
                </div>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <section className="footer">
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
    </section>
);

const App = () => (
    <div>
        <Header />
        <About />
        <Footer />
    </div>
);

export default App;