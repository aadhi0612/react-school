import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import school from "./web.webp";
import child from "./child.jpg";
import teenage from "./teenage.jpg";
import online from "./online.jpg";
import mis from "./mis.jpg";
import pro from "./pro.jpg";
import learnify from "./learnify.png";
const Layout = () => {
  return (
    <div className="bg-main">
      <div className="cont">
        <nav className="navbar navbar-expand-lg mb-4">
          <img src={learnify} alt="error"/>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/main" className="navigation">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blogs" className="navigation">
                  BLOGS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="navigation">
                  CONTACT
                </Link>
              </li>
              <div className="det">
              <li className="nav-item">
                <Link to="/login" className="navigation">
                  LOGIN
                </Link>
              </li>
              </div>
            </ul>
          </div>
        </nav>
        <div className="wholebody">
        <div className="info">
          <img src={school} alt="img"/>
        </div>
        <div className="content">
          <div className="para">
            <p>
              We are learning community dedicated to inspiring success and
              nurturing well being.Finish education excellance is at the heart
              of all we do,because we believe that everyone deserves the best
              possible future.Our mission is to empower students to achieve
              their highest potential, both academically and personally, through
              a balanced approach that emphasizes intellectual growth, social
              responsibility, and emotional well-being. We believe that learning
              should be a lifelong pursuit and strive to instill a love of
              knowledge, curiosity, and the skills necessary to adapt in an
              ever-evolving world. We are committed to providing a nurturing
              environment where every student feels valued and inspired to reach
              their fullest potential.
            </p>
            <p>
              Join Learnify Today!! Sign up for a free trial and experience the
              power of personalized learning with Learnify.
            </p>
          </div>
          <div className="signup">
            <Link to="/signup">
              <button>Sign up</button>
            </Link>
          </div>
          <div className="child">
            <h1>ACADEMIC PROGRAMS</h1>
            <h4>Programs for Children</h4>
            <img src={child} alt="no" />
            <p>
              Our primary program focuses on building a strong foundation in
              literacy, numeracy, and social skills. Our elementary program
              emphasizes critical thinking, problem-solving, and creativity.
            </p>
            <h4>Programs for Teenagers</h4>
            <img src={teenage} alt="hi" />
            <p>
              Our middle school program prepares students for high school with a
              focus on academic rigor and personal growth. Our high school
              program offers a comprehensive curriculum with electives in arts,
              humanities, and STEM fields.
            </p>
            <h4>Online Courses</h4>
            <img src={online}  alt="de" />
            <p>
              MOOCs (Massive Open Online Courses): We offer a range of MOOCs on
              various subjects, allowing students to learn at their own pace.
              Online Tutoring: Our online tutoring program provides one-on-one
              support for students who need extra help.
            </p>
            </div>
            <div className="mission">
              <h4>Mission and Vision</h4>
              <img src={mis} alt="un" className="miss"/>
    
              <img src={pro} alt="proper" className="pic"/>
              <p>
                Learnify aims to empower educators and learners through
                innovative technology, making quality education accessible,
                engaging, and personalized for all. We strive to bridge the
                knowledge gap, foster a love for learning, and inspire
                individuals to reach their full potential. Our vision is to
                create a future where education is accessible, fun, interactive,
                and effective, leading to meaningful learning outcomes and
                positive impact on learners' lives, and to be the leading
                education technology platform connecting educators, learners,
                and resources in a seamless and impactful way.
              </p>
              </div>
            </div>
            <div className="courses">
              <h4>Courses</h4>
              <div className="stem course-section">
                <h6>STEM Subjects</h6>
                <p>Math: algebra, geometry, calculus</p>
                <p>Science: biology, chemistry, physics</p>
                <p>Programming: Python, Java, JavaScript</p>
                <p>Data Science: machine learning, data visualization</p>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/grnP3mduZkM?si=JmNt3q7bZ_GvHfEX"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="language course-section">
                <h6>Language and Communication</h6>
                <p>English: reading, writing, speaking</p>
                <p>Spanish, French, Mandarin: language basics</p>
                <p>Communication: public speaking, presentation skills</p>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/m_R4WOZtPEE?si=SSHs_WgAT6tH6keN"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="business course-section">
                <h6>Business and Entrepreneurship</h6>
                <p>Business fundamentals: marketing, finance, management</p>
                <p>Entrepreneurship: startup ideas, pitching, funding</p>
                <p>Leadership: team management, strategy</p>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/5FJfEgE9RNg?si=pVX2ZEPFAm1jIG1p"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="arts course-section">
                <h6>Creative Arts</h6>
                <p>Graphic Design: Adobe Creative Suite</p>
                <p>Digital Photography: composition, editing</p>
                <p>Creative Writing: storytelling, poetry</p>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/cifhF0mCouA?si=XvzZM8UXBf6tOAr6"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="personal course-section">
                <h6>Personal Development</h6>
                <p>Mindfulness: meditation, stress management</p>
                <p>Productivity: time management, goal setting</p>
                <p>Career Development: resume building, interviewing</p>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/De-bLfEUeLE?si=_IWFvnWH3mU-Xpo9"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="foot">
 <p>©2024 Learnify Private Limited  All rights reserved</p>
 </div>
 </div>

        </div>
        </div>
        <Outlet />
      </div>
      );
};
export default Layout;
