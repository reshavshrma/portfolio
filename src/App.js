import React from 'react';
import profilePic from './rs2.jpg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="profile-conatiner">
      <nav>
        <ul className="nav" style={{ display: 'flex', justifyContent: 'flex-end', listStyle: 'none' }}>
          <li style={{ marginRight: '10px' }}><a href="#home" className="nav-link"><strong>Home</strong></a></li>
          <li style={{ marginRight: '10px' }}><a href="#about" className="nav-link"><strong>About</strong></a></li>
          <li style={{ marginRight: '10px' }}><a href="#skills" className="nav-link"><strong>Skills</strong></a></li>
          <li style={{ marginRight: '10px' }}><a href="#contact" className="nav-link"><strong>Contact</strong></a></li>

        </ul>
      </nav>
      
      {/* home section */}
      <section id="home" className="profile">
        <img src={profilePic} alt="" className="profile-pic" />
        <h1><strong>Reshav Sharma</strong></h1>
        <div><strong>
          <p>I am currently in my second year pursuing a B.Tech in Information Technology at Shri Guru Gobind Singh Ji Institute of Engineering and Technology,
            located in the vibrant city of Nanded, Maharashtra. My academic journey has not only equipped me with a strong foundation in IT concepts
            but has also fueled my passion for web development.</p>
        </strong></div>

        <div><strong>
          <p>Being a part of this dynamic field, I constantly strive to expand my knowledge and skills in web development. I find the process of creating
            web applications fascinating, especially when I see how they can positively impact people's lives. From front-end design to back-end
            functionality, every aspect of web development intrigues me, and I am always eager to learn about new technologies and frameworks that
            can enhance my capabilities.</p>
        </strong></div>

        <div><strong>
          <p>I believe that technology has the power to solve complex problems and improve efficiency in various industries. This belief drives
            me to stay updated with the latest trends and innovations in web development. I enjoy taking on challenges that push me out of my
            comfort zone, as they provide valuable learning experiences and help me grow both personally and professionally.
            In addition to my academic pursuits, I actively seek opportunities to apply my skills in real-world projects. I have collaborated
            with peers on various web development projects, which has not only honed my technical skills but has also improved my ability to work
            in a team environment.</p>
        </strong></div>

        <div><strong>
          <p>Looking ahead, I am excited about the possibilities that lie ahead in the field of web development. I am eager to further explore areas
            such as responsive design, user experience optimization, and emerging technologies like Progressive Web Apps. My goal is to
            leverage my skills and knowledge to create innovative web solutions that make a positive impact on society.</p>
        </strong></div>
      </section>

      {/* about section */}

      <section id="about" className="projects-container">
        <h2 className="projects-info">Projects Information</h2>
        <div className="project">
          <h3>Jammu and Kashmir Police Sub Inspector Form using created using HTML and CSS.</h3>
          <a href="https://reshavshrma.github.io/jkssb/" target="_blank" rel="noopener noreferrer">Click here to view Project</a>
        </div>
        <span> </span>
        <div className="project">
          <h3>CBI's Website Clone created using HTML and CSS.</h3>
          <a href="https://reshavshrma.github.io/digitalcidjk/" target="_blank" rel="noopener noreferrer">Click here to view Project</a>
        </div>
      </section>

      {/* skills section */}

      <section id="skills" className="skills-container">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li className="skill-item">HTML5</li>
          <li className="skill-item">CSS3</li>
          <li className="skill-item">JavaScript</li>
          <li className="skill-item">React.js</li>
          <li className="skill-item">Node.js</li>
          <li className="skill-item">Express.js</li>
          <li className="skill-item">SQL</li>
          <li className="skill-item">Git</li>
        </ul>
        <div className="button-container">
          <a href='https://drive.google.com/file/d/1zuUZ_wjnkdjHqRs7vINQImPsO4Y0k7oc/view?usp=sharing' target='_blank' rel='noopener noreferrer' className="resume-button">Click to view and download Resume</a>
        </div>
      </section>

      {/* contact section */}

      <section id="contact" className="contact-container">
        <h2><strong>Contact Me </strong></h2>
        <p>Mobile No: 6006513330 | E-mail: 2022bit061@sggs.ac.in</p>
        <p>GitHub: <a href="https://github.com/reshavshrma" target="_blank" rel="noopener noreferrer">https://github.com/reshavshrma</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/reshav-sharma-67a3142a8/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/reshav-sharma-67a3142a8/</a></p>
        <div className="social-icons">
          <a href="https://github.com/reshavshrma" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <span> </span>
          <a href="https://www.linkedin.com/in/reshav-sharma-67a3142a8/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <div class="col-12">
            <div class="hr-line"></div>
            <p> Managed and Designed by Reshav Sharma</p>
            <p>&copy; All rights Reserved - 2024</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
