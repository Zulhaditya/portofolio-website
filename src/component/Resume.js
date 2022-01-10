import { Container, Row, Col } from "react-bootstrap";
import myImage from "../img/zulhaditya-bw.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {
    faHtml5,
    faReact,
    faAndroid,
} from "@fortawesome/free-brands-svg-icons";

export default function Resume() {
    return (
        <Container
            fluid
            className="g-0"
            xs={12}
            style={{ background: "#383a59" }}
        >
            <Container className="container-resume" xs={12}>
                <Row className="row-resume g-0" xs={12}>
                    <Col xs={12} md={5} className="col-about">
                        {" "}
                        <img
                            className="img-profile"
                            src={myImage}
                            alt="myImage"
                        />
                    </Col>
                    <Col xs={12} md={7} className="col-about">
                        {" "}
                        <div className="main-aboutMe">
                            <h1 className="judul-aboutMe">About Me</h1>{" "}
                            <h2 className="sub-judul-aboutMe">
                                20 Years / College Student / Indonesia
                            </h2>
                            <p className="detail-aboutMe">
                                I am an informatics engineering students at
                                AMIKOM University, Yogyakarta. I've been
                                studying for almost 3 years in the field of
                                technology and are very interested in website
                                development. I've Worked on several e-commerce
                                website projects and have also designed the
                                UI/UX of the website. For website development I
                                use Javascript and some additional libraries to
                                create a responsive and fast website for a
                                better experience. Currently, I'm more focused
                                on working on e-commerce website development
                                project while learning about e-commerce
                                application development on mobile. Maybe for the
                                last, i will write my favorite quote.
                                <br />
                                <i style={{ fontWeight: "bold" }}>
                                    "Fools ignore complexity. Pragmatists suffer
                                    it. Some can avoid it. Geniuses remove it."
                                    <br />{" "}
                                </i>
                                <p>~ Alan Perlis</p>
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="row-experience g-0 p-0">
                    <Col xs={12} md={6} className="main-experience">
                        <h1 className="judul-experience">Experience</h1>
                        <div className="box-tahun">
                            <div className="garis-1"></div>
                            <div className="sub-box-tahun">
                                <h2 className="detail-tahun">2019 - Now</h2>
                            </div>
                            <div className="sub-exp">
                                <h3 className="sub-judul-exp">
                                    Freelance Designer - fiverr
                                </h3>
                                <p>
                                    Since 2019 until now, I design vectors in
                                    anime style and also design UI/UX for a
                                    website.
                                </p>
                            </div>
                        </div>

                        <div className="box-tahun">
                            <div className="garis-2"></div>
                            <div className="sub-box-tahun">
                                <h2 className="detail-tahun">2016 - Now</h2>
                            </div>
                            <div className="sub-exp">
                                <h3 className="sub-judul-exp">
                                    Freelance Music Producer - fiverr
                                </h3>
                                <p>
                                    I like to make lofi music and also work as a
                                    freelance on the fiverr website as a music
                                    producer.
                                </p>
                            </div>
                        </div>
                        <div className="box-tahun">
                            <div className="garis-3"></div>
                            <div className="sub-box-tahun">
                                <h2 className="detail-tahun">2016 - 2018</h2>
                            </div>
                            <div className="sub-exp">
                                <h3 className="sub-judul-exp">
                                    Freelance Photographer
                                </h3>
                                <p>
                                    In photography, i'm focused on street
                                    photography and urban exploration.
                                </p>
                            </div>
                            <div></div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h1 className="judul-experience">Education</h1>

                        <div className="box-tahun">
                            <div className="garis-4"></div>
                            <div className="sub-box-tahun-edu">
                                <h2 className="detail-tahun-edu">2019 - Now</h2>
                            </div>
                            <div>
                                <h3 className="sub-judul-edu">
                                    AMIKOM University Yogyakarta
                                </h3>
                                <p>
                                    I'm currently studying for a bachelor's
                                    degree in informatics engineering at Amikom
                                    University, Yogyakarta.
                                </p>
                            </div>
                        </div>

                        <div className="box-tahun">
                            <div className="sub-box-tahun-edu">
                                <h2 className="detail-tahun-edu">
                                    2016 - 2018
                                </h2>
                            </div>
                            <div>
                                <h3 className="sub-judul-edu">
                                    Senior High School
                                </h3>
                                <p>
                                    Since high school I have been interested in
                                    technology and have studied several
                                    programming languages.
                                </p>
                            </div>
                        </div>
                        <div className="box-tahun">
                            <div className="sub-box-tahun-edu">
                                <h2 className="detail-tahun-edu">
                                    2013 - 2015
                                </h2>
                            </div>
                            <div>
                                <h3 className="sub-judul-edu">
                                    Junior High School
                                </h3>
                                <p>
                                    In my opinion, the happiest times were in
                                    junior high school because at that time
                                    everything seemed very fun because I was
                                    free to play with friends without having to
                                    think about the future.
                                </p>
                            </div>
                            <div></div>
                        </div>
                    </Col>
                </Row>

                <div className="core-section">
                    <Row className="row-skill g-0" xs={12}>
                        <Col xs={12} md={6}>
                            <h1 className="title-design-skill">Design Skill</h1>
                            <div className="main-design">
                                <div className="section-figma">
                                    <h2 className="sub-title-design">Figma</h2>
                                    <h2 className="percent-angka-figma">90%</h2>
                                    <div className="percent-bar-figma"></div>
                                    <div className="percent-none-figma"></div>
                                </div>

                                <div className="section-inkscape">
                                    <h2
                                        className="sub-title-design"
                                        style={{ marginBottom: 30 }}
                                    >
                                        Inkscape
                                    </h2>
                                    <h2 className="percent-angka-inkscape">
                                        70%
                                    </h2>
                                    <div className="percent-bar-inkscape"></div>
                                    <div className="percent-none-inkscape"></div>
                                </div>

                                <div className="section-illustrator">
                                    <h2
                                        className="sub-title-design"
                                        style={{ marginBottom: 30 }}
                                    >
                                        Adobe Illustrator
                                    </h2>
                                    <h2 className="percent-angka-illustrator">
                                        80%
                                    </h2>
                                    <div className="percent-bar-illustrator"></div>
                                    <div className="percent-none-illustrator"></div>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} md={6}>
                            <h1 className="title-coding">Coding Skill</h1>

                            <Row className="g-0" xs={12}>
                                <Col xs={12} md={6} className="col-react">
                                    <div className="section-react">
                                        <div className="circle-wrap-react">
                                            <div className="circle">
                                                <div className="mask full">
                                                    <div className="fill"></div>
                                                </div>
                                                <div className="mask half">
                                                    <div className="fill"></div>
                                                </div>
                                                <div className="inside-circle">
                                                    85%
                                                </div>
                                            </div>
                                        </div>
                                        <h2 className="title-code">
                                            React / Javascript
                                        </h2>
                                    </div>
                                </Col>
                                <Col xs={12} md={6}>
                                    <div className="section-php">
                                        <div className="circle-wrap-php">
                                            <div className="circle">
                                                <div className="mask full">
                                                    <div className="fill"></div>
                                                </div>
                                                <div className="mask half">
                                                    <div className="fill"></div>
                                                </div>
                                                <div className="inside-circle">
                                                    75%
                                                </div>
                                            </div>
                                        </div>
                                        <h2 className="title-code">
                                            PHP / MySql
                                        </h2>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="g-0" xs={12}>
                                <Col xs={12} md={6}>
                                    <div className="section-html">
                                        <div className="circle-wrap-html">
                                            <div className="circle">
                                                <div className="mask full">
                                                    <div className="fill"></div>
                                                </div>
                                                <div className="mask half">
                                                    <div className="fill"></div>
                                                </div>
                                                <div className="inside-circle">
                                                    90%
                                                </div>
                                            </div>
                                        </div>
                                        <h2 className="title-code">
                                            HTML / CSS
                                        </h2>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="section-python">
                                        <div className="circle-wrap-python">
                                            <div className="circle">
                                                <div className="mask full">
                                                    <div className="fill"></div>
                                                </div>
                                                <div className="mask half">
                                                    <div className="fill"></div>
                                                </div>
                                                <div className="inside-circle">
                                                    50%
                                                </div>
                                            </div>
                                        </div>
                                        <h2 className="title-code">Python</h2>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="row-knowedu gap-5 g-0 p-0">
                        <Col className="col-knowedu">
                            <h1 className="title-knowedu">Knowledge</h1>
                            <div className="list-knowledge">
                                <span>
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className="icon-know"
                                        style={{ color: "#50fa7b" }}
                                    />
                                </span>
                                <span className="sub-list">
                                    HTML and CSS
                                </span>
                            </div>
                            <div className="list-knowledge">
                                <span>
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className="icon-know"
                                        style={{ color: "#50fa7b" }}
                                    />
                                </span>
                                <span className="sub-list">
                                    Javascript
                                </span>
                            </div>
                            <div className="list-knowledge">
                                <span>
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className="icon-know"
                                        style={{ color: "#50fa7b" }}
                                    />
                                </span>
                                <span className="sub-list">
                                    Framework and Libraries
                                </span>
                            </div>
                            <div className="list-knowledge">
                                <span>
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className="icon-know"
                                        style={{ color: "#50fa7b" }}
                                    />
                                </span>
                                <span className="sub-list">
                                    Version Control
                                </span>
                            </div>
                            <div className="list-knowledge">
                                <span>
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className="icon-know"
                                        style={{ color: "#50fa7b" }}
                                    />
                                </span>
                                <span className="sub-list">
                                    Device Testing
                                </span>
                            </div>
                            <div className="list-knowledge">
                                <span>
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className="icon-know"
                                        style={{ color: "#50fa7b" }}
                                    />
                                </span>
                                <span className="sub-list">
                                    Command Line
                                </span>
                            </div>
                            <div className="list-knowledge">
                                <span>
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className="icon-know"
                                        style={{ color: "#50fa7b" }}
                                    />
                                </span>
                                <span className="sub-list">
                                    Responsive / Mobile Design
                                </span>
                            </div>
                            


                        </Col>

                        <Col className="col-knowedu">
                            <h1 className="title-knowedu">Services</h1>
                            <Row className="row-serv g-0">
                                <Col md={2} className="col-icon-serv">
                                    <FontAwesomeIcon
                                        icon={faHtml5}
                                        className="icon-serv"
                                        style={{
                                            color: "rgb(255, 184, 108)",
                                            width: 70,
                                            height: 70,
                                        }}
                                    />
                                </Col>
                                <Col md={10} className="col-detail-serv">
                                    <h2>Front-End Developer</h2>
                                    <p>
                                        I have almost 2 years experience in
                                        front-end and UI/UX Designer. I have
                                        worked on several e-commerce websites.
                                    </p>
                                </Col>
                            </Row>

                            <Row className="row-serv g-0">
                                <Col md={2} className="col-icon-serv">
                                    <FontAwesomeIcon
                                        icon={faReact}
                                        className="icon-serv"
                                        style={{
                                            color: "rgb(139, 233, 253)",
                                            width: 70,
                                            height: 70,
                                        }}
                                    />
                                </Col>
                                <Col md={10} className="col-detail-serv">
                                    <h2>Website Development</h2>
                                    <p>
                                        In website development, I focus more on
                                        the frontend than the backend, I usually
                                        use React js for website development.
                                    </p>
                                </Col>
                            </Row>

                            <Row className="row-serv g-0">
                                <Col md={2} className="col-icon-serv">
                                    <FontAwesomeIcon
                                        icon={faAndroid}
                                        className="icon-serv"
                                        style={{
                                            color: "#50fa7b",
                                            width: 70,
                                            height: 70,
                                        }}
                                    />
                                </Col>
                                <Col md={10} className="col-detail-serv">
                                    <h2>Mobile Development</h2>
                                    <p>
                                        I've made several mobile applications such as a movie list application and a todo list application.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Container>
    );
}
