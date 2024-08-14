import { Row, Col, Card } from "antd";
import "./Projects.css";
export const Projects = () => {
  const handleHover = (e) => {
    e.target.style.cursor = "none";
    e.target.style.color = "rgba(255, 255, 255, 0.85)";
    e.target.style["border-bottom"] = "none";
  };
  return (
    <div id="projects">
      <Row style={{ marginTop: "37vh" }}>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={3} />
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
            className="projects-heading"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            style={{
              borderBottom: "2px solid rgb(168, 164, 164)",
              margin: "5%",
            }}
          >
            <b>Projects</b>
          </h1>
        </Col>
      </Row>
      <Row style={{ marginTop: "13px" }}>
        <Col xxl={3} xl={3} lg={4} xs={2} md={3} sm={3} />
        <Col xxl={6} xl={6} lg={16} xs={20} md={18} sm={18}>
          <Card
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="remote-code-card"
            style={{ margin: "3%", height: "95%" }}
            bodyStyle={{ backgroundColor: "#141414" }}
            bordered={false}
            hoverable={true}
            title="ANT-GAN MRI Translation"
            extra={
              <a
                onMouseOver={handleHover}
                style={{ color: "white" }}
                href="https://www.kaggle.com/code/senorlancelot/least-squares-ant-gan"
                target="_blank"
                rel="noreferrer"
              >
                Kaggle
              </a>
            }
          >
            <p
              className="rce-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
              }}
            >
              Abnormal to Normal Brain MRI Translation using Cycle-Consistent
              Adversarial Loss. Trained the CycleGAN architecture with a problem
              specific custom loss to translate an MRI scan of brain containing
              tumor to its normal counterpart (Unpaired image-to-image
              translation) and vice versa via the cycle consistency
            </p>
            {/* <p
              className="rce-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
              }}
            >
              Deployed on AWS on an EC2 instance, used Cloudflare as a DNS
              provider for HTTPS support, implemented SwaggerUI for API
              exploration
            </p> */}
            <p
              className="rce-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
                marginTop: "27px",
              }}
            >
              PyTorch, Numpy, Jupyter, Matplotlib
            </p>
          </Card>
        </Col>
        <Col xxl={0} xl={0} lg={3} xs={2} md={3} sm={3} />
        <Col xxl={0} xl={0} lg={4} xs={2} md={3} sm={3} />
        <Col xxl={6} xl={6} lg={16} xs={20} md={18} sm={18}>
          <Card
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="discord-codebot-card"
            style={{ margin: "3%", height: "95%" }}
            bodyStyle={{ backgroundColor: "#141414" }}
            bordered={false}
            hoverable={true}
            title="E-Commerce Backend"
            extra={
              <a
                onMouseOver={handleHover}
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
                href="https://github.com/SenorLancelot/E-Commerce-Backend"
              >
                GitHub
              </a>
            }
          >
            <p
              className="codebot-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
              }}
            >
              Used Django to create the backend of a E-commerce including
              traditional features like categories, products, product images,
              reviews etc. Implemented Hierarchical models with MPTT along with
              Cart functionality.
            </p>
            <p
              className="codebot-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
                marginTop: "20px",
              }}
            >
              Django, MPTT, PostgreSQL, Django Rest Framework
            </p>
          </Card>
        </Col>
        <Col xxl={0} xl={0} lg={3} xs={2} md={3} sm={3} />
        <Col xxl={0} xl={0} lg={4} xs={2} md={3} sm={3} />
        <Col xxl={6} xl={6} lg={16} xs={20} md={18} sm={18}>
          <Card
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="portfolio-card"
            style={{ margin: "3%", height: "95%" }}
            bodyStyle={{ backgroundColor: "#141414" }}
            bordered={false}
            hoverable={true}
            title="Real Estate Booking Platform"
            extra={
              <a
                onMouseOver={handleHover}
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
                href="https://github.com/SenorLancelot"
              >
                GitHub
              </a>
            }
          >
            <p
              className="portfolio-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
              }}
            >
              Developed a full-stack application using Django Rest Framework,
              Postgres, Redis, and Next.js stack, empowering realtors to
              efficiently manage properties and clients.
            </p>
            <p
              className="portfolio-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
              }}
            >
              Implemented user registration and login via phone number and OTP,
              along with a comprehensive property search feature allowing users
              to filter their search by city, region, and builder. Integrated
              Whatsapp Business API for instant booking confirmations, ensuring
              reliable communication between clients and realtors.
            </p>
            <br />
            <br />
            <p
              className="portfolio-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
              }}
            >
              Django, Redis, PostgreSQL, Next.js, Whatsapp Business API.
            </p>
          </Card>
        </Col>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={3} />
      </Row>
      <Row style={{ marginTop: "13px" }}>
        <Col xxl={6} xl={6} lg={4} xs={2} md={3} sm={3} />
        <Col xxl={6} xl={6} lg={16} xs={20} md={18} sm={18}>
          <Card
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="chatting-app-card"
            style={{ margin: "3%", height: "95%" }}
            bodyStyle={{ backgroundColor: "#141414" }}
            bordered={false}
            hoverable={true}
            title="Image Captioning Using Tensorflow"
            extra={
              <a
                onMouseOver={handleHover}
                style={{ color: "white" }}
                href="https://github.com/SenorLancelot/Image-Captioning-SemesterProject"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            }
          >
            <p
              className="chatting-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
              }}
            >
              Image Captioning System that generates natural language captions
              for any image. The architecture for the model is inspired from
              "Show and Tell" by Vinyals et al. The model is built using Keras
              library. The project also contains code for Attention LSTM layer,
              although not integrated in the model.
            </p>

            <p
              className="chatting-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
                marginTop: "27px",
              }}
            >
              Tensorflow, Keras, Numpy, Matplotlib
            </p>
          </Card>
        </Col>
        <Col xxl={0} xl={0} lg={3} xs={2} md={3} sm={3} />
        <Col xxl={0} xl={0} lg={4} xs={2} md={3} sm={3} />
        <Col xxl={6} xl={6} lg={16} xs={20} md={18} sm={18}>
          <Card
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="discord-musicbot-card"
            style={{ margin: "3%", height: "95%" }}
            bodyStyle={{ backgroundColor: "#141414" }}
            bordered={false}
            hoverable={true}
            title="LightHouse"
            extra={
              <a
                onMouseOver={handleHover}
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
                href="https://github.com/SenorLancelot/LightHouse"
              >
                Github
              </a>
            }
          >
            <p
              className="musicbot-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
              }}
            >
              A Progressive Web Application to manage and decide the flow of
              your projects, tasks and deadlines similar to Trello.
            </p>

            <p
              className="musicbot-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
                marginTop: "20px",
              }}
            >
              Firebase, React, SCSS, FireStore
            </p>
          </Card>
        </Col>
        <Col xxl={0} xl={0} lg={3} xs={2} md={3} sm={3} />
        {/* <Col xxl={0} xl={0} lg={4} xs={2} md={3} sm={3} /> */}
        <Col xxl={6} xl={6} lg={3} xs={2} md={3} sm={3} />
      </Row>
    </div>
  );
};
