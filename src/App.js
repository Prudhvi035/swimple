import './App.css';
import React from 'react';
import { useSpring, animated } from 'react-spring';
import backgroundVideo from './swim.jpg'
import logo from './logo.png';
import about from './about.jpg';
import engineer from './engineer.png'
import reac from './react.png'
import star from './star.png'
import maxi from './maximize.png'
import vision from './vision.png'
import mission from './mission.png'
import bg from './abou-bg.jpg'
import script from './script'
import analytics from './analytics-system.jpg'
import performance from './performance-consulting.jpg'


function App() {

  
  
  
  const heroAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  const buttonAnimation = useSpring({
    transform: 'translateY(0)',
    from: { transform: 'translateY(50px)' },
    delay: 800,
  });

  return (
    <div>
      <div className="App">
        <div className='video'>
          <img src={backgroundVideo}  alt=''/>
        </div>

        <nav className='nav'>
          
          <a class="active" href='#home'>HOME</a>
          <a href='#contact'>ARTICLES</a>
          <a href='#portfolio'>PORTFOLIO</a>
          <a href='#about'>ABOUT</a>
          <a href='#contact'>CONTACT</a>
          <div class="nav-logo">
            <img src={logo} width="100" height="40" alt=''/>
          </div>
        </nav>

        <section className="hero">
          <animated.div style={heroAnimation} className="hero-content">
            <h1>Dive into Excellence with Swimple</h1>
            <p>Revolutionizing Swim Performance</p>
            <animated.button style={buttonAnimation}>Explore Our Services</animated.button>
          </animated.div>
        </section>
      </div>

      <div className='about'>
        <section className='us'>
          <h1>About Swimple</h1>
          <img src={about} width={500} alt=''/> 
          <h2>Who are we?</h2>
          <img class='eng-img' src={engineer} alt=''/>
          <p className='p1'>We are engineers with a deep passion for sports</p>   
          <img class='eng-img2' src={reac} alt=''/>
          <p className='p2'>We want to build the first swim science lab in India</p>
          <img class='eng-img3' src={star} alt=''/>
          <p className='p3'>We have expertise in swimming </p>
          <img class='eng-img4' src={maxi} alt=''/>
          <p className='p4'>With time, we will expand to other sports</p>             
        </section>
      </div>

      <div class="responsive-container-block bigContainer">
        <div class="responsive-container-block Container bottomContainer">
          <div class="ultimateImg">
            <img class="mainImg" src={bg} alt=''/>
          </div>
          <div class="allText bottomText">
            <p class="text-blk headingText">
              <img src={vision} className="vis" alt=''/>Vision
            </p>
            <p class="text-blk description">
            Be the #1 Sports Science Lab in India
            </p>
            <p class="text-blk headingText">
              <img src={mission} className="mis" alt=''/>Mission
            </p>
            <p class="text-blk description">
            To facilitate and expedite athletes path to performance excellence in sports by harnessing innovation and technology for enhanced learning experiences.
            </p>
            <a class="explore" href='#service'>
              View Services
            </a>
          </div>
        </div>
      </div>

      <div class="timeline">
      <h1>How it Works?</h1>
        <div class="outer">
          <div class="card">
            <div class="info">
              <h3 class="title">Step 1 - Gather Data</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
          </div>
          <div class="card">
            <div class="info">
              <h3 class="title">Step 2 - Analyze</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
          </div>
          <div class="card">
            <div class="info">
              <h3 class="title">Step 3 - Benchmark</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
          </div>
          <div class="card">
            <div class="info">
              <h3 class="title">Step 4 - Improve</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
          </div>
          <div class="card">
            <div class="info">
              <h3 class="title">Step 5 - Repeat</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
          </div>
        </div>
      </div>



      <div class="services-section">
    <div class="container">
       <h1>Our Swim Analytics Services</h1>
       <div class="card-row">
         <div class="service-card">
           <img src={analytics} alt="Swim Analytics System" />
           <h2>Swim Analytics System (2D)</h2>
           <ul>
             <li>Fully calibrated 8 camera system</li>
             <li>Tracks minute movements of swimmers</li>
             <li>Measures starts, turns, and strokes</li>
             <li>Live delay feed for instant feedback</li>
             <li>Fully automated and non invasive</li>
             <li>AMC mandatory with system</li>
           </ul>
         </div>

         <div class="service-card">
           <img class="performance" src={performance} alt="Performance Consulting" />
           <h2>Swimming Performance Consulting</h2>
           <ul>
             <li>3 days / session / athlete</li>
             <li>1:1 sessions with sports scientists</li>
             <li>Comprehensive reports</li>
             <li>Clear actionable plan for improvement</li>
             <li>Guaranteed perÿormance improvement</li>
           </ul>
         </div>
       </div> 
       <p class="guarantee">Guaranteed Performance Improvement</p>
     </div>
  </div>







      <div class="container">
        <div class="top">
          <h1>Plans & Pricing</h1>
        </div>

        <div class="package-container">
          <div class="packages">
            <h1>Live Delay Only</h1>
            <h2 class="text2">&#x0024;119.99</h2>
            <ul class="list">
              <li class="first">of hours (1)</li>
              <li>Live Delay Feedback</li>
              <li>Qualitative Feedback with Sports Analyst</li>
              <li><del>1:1 sports scientist session</del></li>
              <li><del>Detailed Report</del></li>
            </ul>
            <a href="#start" class="button button">Start Now</a>
          </div>
          <div class="packages">
            <h1>Single Session</h1>
            <h2 class="text2">&#x0024;119.99</h2>
            <ul class="list">
            <li class="first">of hours (4)</li>
              <li>Live Delay Feedback</li>
              <li>Qualitative Feedback with Sports Analyst</li>
              <li>1:1 sports scientist session</li>
              <li>Detailed Report</li>
            </ul>
            <a href="#start" class="button button1">Start Now</a>
          </div>
          <div class="packages">
            <h1>Quarterly</h1>
            <h2 class="text2">&#x0024;239.99</h2>
            <ul class="list">
            <li class="first">of hours (18)</li>
              <li>Live Delay Feedback</li>
              <li>Qualitative Feedback with Sports Analyst</li>
              <li>1:1 sports scientist session</li>
              <li>Detailed Report</li>
            </ul>
            <a href="#start" class="button button2">Start Now</a>
          </div>
          <div class="packages">
            <h1>Yearly</h1>
            <h2 class="text2">&#x0024;359.99</h2>
            <ul class="list">
            <li class="first">of hours (72)</li>
              <li>Live Delay Feedback</li>
              <li>Qualitative Feedback with Sports Analyst</li>
              <li>1:1 sports scientist session</li>
              <li>Detailed Report</li>
            </ul>
            <a href="#start" class="button button3">Start Now</a>
          </div>
        </div>
      </div>

      <script src={script}></script>

      <div class="circle-top"></div>
<div class="circle">
<header class = 'header'>
  <div class="header-content">
    <span>company management</span>
    <h1>Meet a team of experts and innovators who are pioneers in their field</h1>
  </div>
</header>
<section class='section'>
  <div class="card-top">
    <div class="card">
      <img src="https://images.pexels.com/photos/2811089/pexels-photo-2811089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=11" alt="Alexandra Smith"/>
      <h2>Sandeep K N</h2>
      <p>Founder and Chief Operations Officer</p>
    </div>
    <div class="card">
      <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="John Smith"/>
      <h2>Aditya Kariyappa</h2>
      <p>Founder and Chief Executive Officer</p>
    </div>
  </div>
  <div class="card">
    <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Erik Longman"/>
    <h2>Raghavendra Pai</h2>
    <p>Chief Process and Innovation Officer</p>
  </div>
  <div class="card">
    <img src="https://images.pexels.com/photos/2216607/pexels-photo-2216607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Matthew Foster"/>
    <h2>Jay Mehta</h2>
    <p>Chief Sales Officer</p>
  </div>
</section>
</div>
    
    

    
<section id="contact" class="contact-section">
    <div class="container">
        <h1>Contact Us</h1>

        <div class="row">  
            <div class="col-md-6 form-container">
                <form>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" required/>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" required/>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea class="form-control" id="message" rows="3" required></textarea>
                    </div>
                    <button type="submit" class="button">Send Message</button>
                </form>
            </div>

            <div class="col-md-6 map-container">
                <div id="map"></div>
            </div>
        </div>
    </div>
</section>

<script async defer 
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1708547465419!5m2!1sen!2sin"> 
</script>

<footer class="animated-footer">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h3>About Swimple</h3>
        <p>We're a team dedicated to revolutionizing swim performance...</p> 
      </div>
      <div class="col-md-4">
        <h3>Quick Links</h3>
        <ul class="link">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div class="col-md-4">
        <h3>Follow Us</h3>
        <ul class="social-icons">
          <li><a href="#fb"><i class="fa fa-facebook"></i></a></li>
          <li><a href="#x"><i class="fa fa-twitter"></i></a></li>
          <li><a href="#insta"><i class="fa fa-instagram"></i></a></li>
        </ul>
      </div>
    </div>
    <p class="copyright">&copy; 2024 Swimple. All rights reserved.</p>
  </div>
</footer>

      

    </div>
  );
}

export default App;
