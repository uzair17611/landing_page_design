import React from 'react';
import './Pages.css';
// import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="container" style={{ maxWidth: 1900 }}>
                <header className="header">
                    <h1>Welcome to Our Fyp Project </h1>
                    <h1>Cybersecurity Learning Platform</h1>
                </header>
                <section className="hero-section">
                    <div className="hero-content">
                        <h2>Enhance Your Cybersecurity Skills</h2>
                        <p>Explore our free labs and learn how to protect against cyber threats.</p>
                        {/* <Link to="/login"> */}
                            <button className="cta-button">Hack Our Labs</button>
                        {/* </Link> */}
                    </div>
                </section>
                <section className='Main'>
                <section className="about-cybersecurity-section">
                    <h2>What is Cybersecurity?</h2>
                    <p>
                        Cybersecurity is the practice of protecting computers, servers, networks, and data from digital attacks
                        and unauthorized access. It involves implementing security measures, identifying vulnerabilities, and
                        mitigating risks to maintain the confidentiality, integrity, and availability of information systems.
                    </p>
                </section>
                <section className="why-learn-section">
                    <h2>Why Developers Should Learn Cybersecurity</h2>
                    <p>
                        As a developer, learning cybersecurity is crucial for several reasons. Understanding secure coding practices
                        and common vulnerabilities helps developers build robust and resilient applications. By incorporating
                        security principles into their development process, developers can prevent security breaches, safeguard
                        user data, and ensure the overall security posture of their applications.
                    </p>
                </section>
                <section className="why-pentester-section">
                    <h2>Why Should You Become a Pentester?</h2>
                    <p>
                        Becoming a pentester, or penetration tester, offers numerous benefits. As a pentester, you play a vital
                        role in identifying vulnerabilities and weaknesses in systems, applications, and networks. By simulating
                        real-world attacks, you help organizations improve their security posture and protect against potential
                        threats. Pentesters gain valuable technical skills, knowledge of the latest attack techniques, and the
                        ability to contribute to enhancing overall cybersecurity.
                    </p>
                </section>
                </section>
                <section className="features-section">
                    <div className="feature">
                        <h3>Interactive Labs</h3>
                        <p>Practice cybersecurity concepts hands-on with our interactive labs.</p>
                    </div>
                    <div className="feature">
                        <h3>Real-World Scenarios</h3>
                        <p>Learn practical skills by tackling real-world cybersecurity challenges.</p>
                    </div>
                    <div className="feature">
                        <h3>Comprehensive Tutorials</h3>
                        <p>Access detailed tutorials that guide you through various cybersecurity topics.</p>
                    </div>
                </section>
                <section className="cta-section">
                    <h2>Start Your Cybersecurity Journey Today!</h2>
                    <div className="cta-buttons">
                        {/* <Link to="http://192.168.1.132:3000/login"> */}
                            <button className="cta-button">Explore Web Labs</button>
                        {/* </Link> */}
                        {/* <Link to="/apilabs"> */}
                            <button className="cta-button">Explore API Labs</button>
                        {/* </Link> */}
                    </div>
                </section>
                <section className="about-section">
                    <h2>About Us</h2>
                    <p>
                        This is our Fyp project. It is an API and web vulnerability simulation environment. This project was supervised
                        by Prof. Dr. Sadeeq Jan and co-supervised by Engr. Muhammad of UET Peshawar, who also runs Nccs Peshawar.
                    </p>
                </section>
                <footer className="footer">
                    <p>&copy; 2023 Our Fyp Project Cybersecurity Learning Platform. All rights reserved by Nccs-Peshawar.</p>
                </footer>
            </div>
        </div>
    );
}

export default LandingPage;