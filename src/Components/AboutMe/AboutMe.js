import { Row, Col } from "antd";
import "./AboutMe.css";
import MyFace from "../../Content/MyFace.jpg";
export const AboutMe = () => {
  return (
    <div id="aboutme">
      <Row style={{ marginTop: "37vh" }}>
        <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
        <Col
          xxl={6}
          xl={6}
          lg={18}
          xs={20}
          md={18}
          sm={18}
          style={{ textAlign: "left" }}
        >
          <h1
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="about-heading"
          >
            <b>About Me</b>
          </h1>
          <br />
          <p
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="about-first"
          >
            I am a Bachelor in Technology (B.Tech) in Computer Science from
            Indian Institute of Information Technology, Pune.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="about-second"
          >
            I have a couple of years of Software Development experience and am
            also a Machine Learning Enthusiast. I love learning new technologies
            and finding out of the box applications for the ones I know.
            Pursuing full-time SDE roles in Pune, Bangalore, Mumbai.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="about-third"
          >
            I have gained valuable experience through internships and coursework
            like Web Development, Data Structures and Algorithms, OOPS and DBMS.
            With a strong foundation in programming languages such as Python,
            C/C++, and Java, along with proficiency in web development using
            frameworks like Django and ReactJS, I am confident in my ability to
            contribute to any team's success.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="about-fourth"
          >
            In my free time, I enjoy reading books, playing co-operative games,
            and consuming quality content.
          </p>
        </Col>
        <Col xxl={1} xl={1} lg={7} xs={2} />
        <Col
          data-aos="fade"
          data-aos-delay="500"
          data-aos-once
          xxl={9}
          xl={9}
          lg={9}
          style={{ display: "flex", alignItems: "center" }}
        >
          <section className="main">
            <div className="container">
              <div className="img-container">
                <img className="image" src={MyFace} alt="MyFace" />
              </div>
            </div>
          </section>
        </Col>
        <Col lg={3} xs={2} md={3} sm={3} />
      </Row>
    </div>
  );
};
