import React from 'react';
import home from "../assets/images/hero-banner.png"
import chat from "../assets/images/check-circle.svg"

function Hero() {
  return (
    <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Techx - Make Chat Easy</title>
    {/* 
      - favicon
    */}
    <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml" />
    {/* 
      - custom css link
    */}
    <link rel="stylesheet" href="./assets/css/style.css" />
    {/* 
      - google font link
    */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600;700;900&display=swap"
      rel="stylesheet"
    />
    {/* 
      - preload image
    */}
    {/* 
      - #HEADER
    */}
    <header className="header" data-header="">
      <div className="container">
        <h1>
          <a href="#" className="logo">
            Techx
          </a>
        </h1>
        <nav className="navbar container" data-navbar="">
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#home" className="navbar-link" data-nav-link="">
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a href="#services" className="navbar-link" data-nav-link="">
                Services
              </a>
            </li>
            <li className="navbar-item">
              <a href="#features" className="navbar-link" data-nav-link="">
                Features
              </a>
            </li>
            <li className="navbar-item">
              <a href="#about" className="navbar-link" data-nav-link="">
                About
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link" data-nav-link="">
                Blog
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link" data-nav-link="">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <button className="btn btn-secondary">Get Started</button>
        <button
          className="nav-toggle-btn"
          aria-label="Toggle menu"
          data-nav-toggle-btn=""
        >
          <ion-icon name="menu-outline" className="menu-icon" />
          <ion-icon name="close-outline" className="close-icon" />
        </button>
      </div>
    </header>
    <main>
      <article>
        {/* 
    - #HERO
  */}
        <section className="section hero" id="home">
          <div className="container">
            <figure className="hero-banner">
              <img
                src={home}
                width={804}
                height={643}
                loading="lazy"
                alt="hero banner"
                className="w-100"
              />
            </figure>
            <div className="hero-content">
              <h2 className="h1 hero-title">
                Make Chat Easy For Today's Digital Customers
              </h2>
              <p className="section-text">
                Techx is the ecommerce helpdesk center that turns your customer
                service into a profit center without any delay and increase your
                sale.
              </p>
              <form action="" className="hero-form">
                <input
                  type="email"
                  name="email_address"
                  placeholder="Enter Your Email"
                  aria-label="Enter Your Email"
                  required=""
                  className="input-field"
                />
                <button type="submit" className="btn btn-primary">
                  Start Free Trial
                </button>
              </form>
              <ul className="hero-list">
                <li className="hero-item">
                  <img
                    src={chat}
                    width={16}
                    height={16}
                    loading="lazy"
                    alt="Checkmark icon"
                  />
                  <span className="span">Live Chat</span>
                </li>
                <li className="hero-item">
                  <img
                    src="./assets/images/check-circle.svg"
                    width={16}
                    height={16}
                    loading="lazy"
                    alt="Checkmark icon"
                  />
                  <span className="span">Ticketing</span>
                </li>
                <li className="hero-item">
                  <img
                    src="./assets/images/check-circle.svg"
                    width={16}
                    height={16}
                    loading="lazy"
                    alt="Checkmark icon"
                  />
                  <span className="span">Knowledge Base</span>
                </li>
                <li className="hero-item">
                  <img
                    src="./assets/images/check-circle.svg"
                    width={16}
                    height={16}
                    loading="lazy"
                    alt="Checkmark icon"
                  />
                  <span className="span">Chat pages</span>
                </li>
                <li className="hero-item">
                  <img
                    src="./assets/images/check-circle.svg"
                    width={16}
                    height={16}
                    loading="lazy"
                    alt="Checkmark icon"
                  />
                  <span className="span">Team chat</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* 
    - #SERVICE
  */}
        <section className="section service" id="services">
          <div className="container">
            <h2 className="h2 section-title">Our Solutions For You</h2>
            <p className="section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              imperdiet nulla duis ac. Id massa scelerisque venenatis, massa
              gravida donec orci.
            </p>
            <ul className="service-list">
              <li>
                <div className="service-card">
                  <figure className="card-banner">
                    <img
                      src="./assets/images/service-1.gif"
                      width={728}
                      height={344}
                      loading="lazy"
                      alt="support"
                      className="w-100"
                    />
                  </figure>
                  <div className="card-content">
                    <h3 className="h3">
                      <a href="#" className="card-title">
                        Support
                      </a>
                    </h3>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla imperdiet nulla duis consectetur adipiscing elit.
                    </p>
                    <a href="#" className="btn-link">
                      <span className="span">Learn More</span>
                      <ion-icon name="arrow-forward" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="service-card">
                  <figure className="card-banner">
                    <img
                      src="./assets/images/service-2.gif"
                      width={728}
                      height={344}
                      loading="lazy"
                      alt="Engagement"
                      className="w-100"
                    />
                  </figure>
                  <div className="card-content">
                    <h3 className="h3">
                      <a href="#" className="card-title">
                        Engagement
                      </a>
                    </h3>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla imperdiet nulla duis consectetur adipiscing elit.
                    </p>
                    <a href="#" className="btn-link">
                      <span className="span">Learn More</span>
                      <ion-icon name="arrow-forward" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="service-card">
                  <figure className="card-banner">
                    <img
                      src="./assets/images/service-3.gif"
                      width={728}
                      height={344}
                      loading="lazy"
                      alt="Marketing"
                      className="w-100"
                    />
                  </figure>
                  <div className="card-content">
                    <h3 className="h3">
                      <a href="#" className="card-title">
                        Marketing
                      </a>
                    </h3>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla imperdiet nulla duis consectetur adipiscing elit.
                    </p>
                    <a href="#" className="btn-link">
                      <span className="span">Learn More</span>
                      <ion-icon name="arrow-forward" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* 
    - #FEATURES
  */}
        <section className="section features" id="features">
          <div className="container">
            <div className="features-content">
              <h2 className="h2 section-title">
                Our Awesome Features To Serve You
              </h2>
              <p className="section-text">
                Planning, tracking and delivering your team’s best work has never
                been easier. We make it easiest for you through the software.
              </p>
              <ul className="features-list">
                <li className="features-item">
                  <img
                    src="./assets/images/features-icon-1.svg"
                    width={26}
                    height={26}
                    loading="lazy"
                    aria-hidden="true"
                    className="item-icon"
                  />
                  <h3 className="item-title">Automate Instagram</h3>
                </li>
                <li className="features-item">
                  <img
                    src="./assets/images/features-icon-2.svg"
                    width={26}
                    height={26}
                    loading="lazy"
                    aria-hidden="true"
                    className="item-icon"
                  />
                  <h3 className="item-title">Drive Sale</h3>
                </li>
                <li className="features-item">
                  <img
                    src="./assets/images/features-icon-3.svg"
                    width={26}
                    height={26}
                    loading="lazy"
                    aria-hidden="true"
                    className="item-icon"
                  />
                  <h3 className="item-title">Get More Leads</h3>
                </li>
                <li className="features-item">
                  <img
                    src="./assets/images/features-icon-4.svg"
                    width={26}
                    height={26}
                    loading="lazy"
                    aria-hidden="true"
                    className="item-icon"
                  />
                  <h3 className="item-title">Engage Prospects</h3>
                </li>
              </ul>
            </div>
            <div className="banner-wrapper">
              <figure className="features-banner one">
                <img
                  src="./assets/images/features-banner-1.gif"
                  width={600}
                  height={500}
                  loading="lazy"
                  alt="features image"
                  className="w-100"
                />
              </figure>
              <figure className="features-banner two">
                <img
                  src="./assets/images/features-banner-2.png"
                  width={436}
                  height={311}
                  loading="lazy"
                  alt="features image"
                  className="w-100"
                />
              </figure>
            </div>
          </div>
        </section>
        {/* 
    - #ABOUT
  */}
        <section className="section about" id="about">
          <div className="container">
            <h2 className="h2 section-title">What We Do</h2>
            <p className="section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              imperdiet nulla duis ac. Id massa scelerisque venenatis, massa
              gravida donec orci.
            </p>
            <ul className="about-list">
              <li>
                <div className="about-card about-card-1">
                  <figure className="card-banner">
                    <img
                      src="./assets/images/about-img-1.svg"
                      width={94}
                      height={94}
                      loading="lazy"
                      alt="Automated Ticket Routing"
                    />
                  </figure>
                  <div className="card-content">
                    <h3 className="h3">
                      <a href="#" className="card-title">
                        Automated Ticket Routing
                      </a>
                    </h3>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consect etur adipiscing elit.
                    </p>
                    <a href="#" className="btn-link">
                      <span className="span">Learn More</span>
                      <ion-icon name="arrow-forward" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="about-card about-card-2">
                  <figure className="card-banner">
                    <img
                      src="./assets/images/about-img-2.svg"
                      width={94}
                      height={94}
                      loading="lazy"
                      alt="Workflow Automation"
                    />
                  </figure>
                  <div className="card-content">
                    <h3 className="h3">
                      <a href="#" className="card-title">
                        Workflow Automation
                      </a>
                    </h3>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consect etur adipiscing elit.
                    </p>
                    <a href="#" className="btn-link">
                      <span className="span">Learn More</span>
                      <ion-icon name="arrow-forward" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="about-card about-card-3">
                  <figure className="card-banner">
                    <img
                      src="./assets/images/about-img-3.svg"
                      width={94}
                      height={94}
                      loading="lazy"
                      alt="Automated Callback"
                    />
                  </figure>
                  <div className="card-content">
                    <h3 className="h3">
                      <a href="#" className="card-title">
                        Automated Callback
                      </a>
                    </h3>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consect etur adipiscing elit.
                    </p>
                    <a href="#" className="btn-link">
                      <span className="span">Learn More</span>
                      <ion-icon name="arrow-forward" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="about-card about-card-4">
                  <figure className="card-banner">
                    <img
                      src="./assets/images/about-img-4.svg"
                      width={94}
                      height={94}
                      loading="lazy"
                      alt="Customer Feedback Surveys"
                    />
                  </figure>
                  <div className="card-content">
                    <h3 className="h3">
                      <a href="#" className="card-title">
                        Customer Feedback Surveys
                      </a>
                    </h3>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consect etur adipiscing elit.
                    </p>
                    <a href="#" className="btn-link">
                      <span className="span">Learn More</span>
                      <ion-icon name="arrow-forward" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            <p className="section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              gravida facilisis maecenas vitae.
              <a href="#" className="btn-link">
                <span className="span">View All Features</span>
                <ion-icon name="arrow-forward" aria-hidden="true" />
              </a>
            </p>
          </div>
        </section>
        {/* 
    - #STATS
  */}
        <section className="section stats">
          <div className="container">
            <figure className="stats-banner">
              <img
                src="./assets/images/stats-banner.png"
                width={619}
                height={482}
                loading="lazy"
                alt="stats"
                className="w-100"
              />
            </figure>
            <ul className="stats-list">
              <li className="stats-item purple">
                <h3 className="item-title">
                  386
                  <span className="span">million</span>
                </h3>
                <p className="stats-text">Human Actions Saved On Techx</p>
              </li>
              <li className="stats-item red">
                <h3 className="item-title">
                  999
                  <span className="span">million</span>
                </h3>
                <p className="stats-text">Users Throughout The World</p>
              </li>
              <li className="stats-item green">
                <h3 className="item-title">
                  200
                  <span className="span">percent</span>
                </h3>
                <p className="stats-text">Revenue Growth</p>
              </li>
              <li className="stats-item yellow">
                <h3 className="item-title">
                  50
                  <span className="span">software</span>
                </h3>
                <p className="stats-text">Integration Support In Techx</p>
              </li>
            </ul>
          </div>
        </section>
        {/* 
    - #APP
  */}
        <section className="section app">
          <div className="container">
            <div className="app-content">
              <h2 className="h2 section-title">
                Download Mobile App To Stay Connected
              </h2>
              <p className="section-text">
                Techx Projects gives you the added advantage of several other
                Techx apps and third party apps through seamless integrations.
              </p>
              <div className="btn-group">
                <a href="#" className="btn btn-primary">
                  <img
                    src="./assets/images/play-store.svg"
                    width={30}
                    height={31}
                    loading="lazy"
                    alt="play store icon"
                  />
                  <span className="span">
                    GET IT ON
                    <strong className="strong">Google Play</strong>
                  </span>
                </a>
                <a href="#" className="btn btn-secondary">
                  <img
                    src="./assets/images/apple-store.svg"
                    width={30}
                    height={31}
                    loading="lazy"
                    alt="apple store icon"
                  />
                  <span className="span">
                    GET IT ON
                    <strong className="strong">Apple Store</strong>
                  </span>
                </a>
              </div>
            </div>
            <figure className="app-banner">
              <img
                src="./assets/images/app-banner.png"
                width={748}
                height={536}
                loading="lazy"
                alt="app screenshot"
                className="w-100"
              />
            </figure>
          </div>
        </section>
        {/* 
    - #SUPPORT
  */}
        <section className="section support">
          <div className="container">
            <div className="support-content">
              <h2 className="h2 section-title">24/7 Customer Support</h2>
              <p className="section-text">
                Our team is here to provide you with personalized and outstanding
                service. We also offer a range of self-learning tools in our
                support center:
              </p>
            </div>
            <a href="#" className="btn btn-primary">
              Contact Us Now
            </a>
          </div>
        </section>
      </article>
    </main>
    {/* 
      - #FOOTER
    */}
    <footer className="footer">
      <div className="footer-top section">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              Techx
            </a>
            <figure className="footer-img">
              <img
                src="./assets/images/footer-img.png"
                width={264}
                height={226}
                loading="lazy"
                aria-hidden="true"
                className="w-100"
              />
            </figure>
          </div>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Services</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                Web Design
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Social Marketing
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                WordPress
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Content Writing
              </a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Quick Links</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Pricing Plan
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Download Apps
              </a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Contact Us</p>
            </li>
            <li className="footer-item">
              <img
                src="./assets/images/contact-icon-1.svg"
                width={16}
                height={16}
                loading="lazy"
                aria-hidden="true"
              />
              <span className="span">
                Call Us:
                <a href="tel:+3237501234" className="footer-item-link">
                  +(323) 750-1234
                </a>
              </span>
            </li>
            <li className="footer-item">
              <img
                src="./assets/images/contact-icon-2.svg"
                width={16}
                height={16}
                loading="lazy"
                aria-hidden="true"
              />
              <span className="span">
                Address:
                <a href="#" className="footer-item-link">
                  Vermont Ave, Los Angeles, CA 90044
                </a>
              </span>
            </li>
            <li className="footer-item">
              <img
                src="./assets/images/contact-icon-3.svg"
                width={16}
                height={16}
                loading="lazy"
                aria-hidden="true"
              />
              <span className="span">
                Mail Us:
                <a href="mailto:hello@Techx.com" className="footer-item-link">
                  hello@Techx.com
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            © 2022 <span className="span">Techx</span>. All rights reserved by{" "}
            <a href="#" className="copyright-link">
              codewithsadee
            </a>
          </p>
          <ul className="footer-bottom-list">
            <li>
              <a href="#" className="footer-bottom-link">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="footer-bottom-link">
                Security
              </a>
            </li>
            <li>
              <a href="#" className="footer-bottom-link">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    {/* 
      - #BACK TO TOP
    */}
    <a
      href="#top"
      className="back-top-btn"
      aria-label="Back to top"
      data-back-top-btn=""
    >
      <ion-icon name="chevron-up" />
    </a>
    {/* 
      - custom js link
    */}
    {/* 
      - ionicon link
    */}
  </>
  
  );
}

export default Hero;
