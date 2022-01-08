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
                                20 tahun / Mahasiswa / Indonesia
                            </h2>
                            <p className="detail-aboutMe">
                                Prolific, full stack web developer with a
                                passion for metrics and beating former
                                "best-yets." Prototyped 25 new product features
                                per year for Flexor, Inc. Decreased rework by
                                22% and costs by 15%. Consistently receive high
                                user experience scores for all web development
                                projects, including a 55% increase for Flexor,
                                Inc. Passionate about building world class web
                                applications. One of my sites received a 2015
                                Webby for Best Navigation and Structure.
                                Prolific, full stack web developer with a
                                passion for metrics and beating former
                                "best-yets." Prototyped 25 new product features
                                per year for Flexor, Inc. Decreased rework by
                                22% and costs by 15%. Consistently receive high
                                user experience scores for all web development
                                projects, including a 55% increase for Flexor,
                                Inc. Passionate about building world class web
                                applications. One of my sites received a 2015
                                Webby for Best Navigation and S
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
                                <h2 className="detail-tahun">
                                    2019 - Sekarang
                                </h2>
                            </div>
                            <div className="sub-exp">
                                <h3 className="sub-judul-exp">
                                    Freelance Designer - fiverr
                                </h3>
                                <p>
                                    Saya mengerjakan design vector dengan style
                                    anime jepang dan juga menerima jasa design
                                    logo dan juga jasa design lainnya.
                                </p>
                            </div>
                        </div>

                        <div className="box-tahun">
                            <div className="garis-2"></div>
                            <div className="sub-box-tahun">
                                <h2 className="detail-tahun">
                                    2016 - Sekarang
                                </h2>
                            </div>
                            <div className="sub-exp">
                                <h3 className="sub-judul-exp">Musisi</h3>
                                <p>
                                    Saya tergabung kedalam salah satu band punk
                                    bersama teman di sekolah. Posisi di band
                                    adalah gitaris
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
                                    Freelancer Videographer
                                </h3>
                                <p>
                                    Pernah membuat project film pendek untuk
                                    mewakili sekolah saya di festival seni
                                    tingkat provinsi dan alhamdulillah berhasil
                                    mendapat juara 2.
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
                                <h2 className="detail-tahun-edu">
                                    2019 - Sekarang
                                </h2>
                            </div>
                            <div>
                                <h3 className="sub-judul-edu">
                                    Universitas Amikom Yogyakarta
                                </h3>
                                <p>
                                    Saya mengerjakan design vector dengan style
                                    anime jepang dan juga menerima jasa design
                                    logo dan juga jasa design lainnya.
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
                                    SMAN - 1 Lingga
                                </h3>
                                <p>
                                    Saya mengerjakan design vector dengan style
                                    anime jepang dan juga menerima jasa design
                                    logo dan juga jasa design lainnya.
                                </p>
                            </div>
                        </div>
                        <div className="box-tahun">
                            <div className="sub-box-tahun-edu">
                                <h2 className="detail-tahun-edu">2013-2015</h2>
                            </div>
                            <div>
                                <h3 className="sub-judul-edu">SMPN 1 Lingga</h3>
                                <p>
                                    Saya mengerjakan design vector dengan style
                                    anime jepang dan juga menerima jasa design
                                    logo dan juga jasa design lainnya.
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
                                <div
                                    className="section-figma"
                                >
                                    <h2 className="sub-title-design">Figma</h2>
                                    <h2 className="percent-angka-figma">90%</h2>
                                    <div className="percent-bar-figma"></div>
                                    <div className="percent-none-figma"></div>
                                </div>

                                <div
                                    className="section-inkscape"
                                >
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

                                <div
                                    className="section-illustrator"
                                >
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
                                <Col xs={12} md={6} className='col-react'>
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
                                    Website Development
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
                                    Website Development
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
                                    Website Development
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
                                    Website Development
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
                                    Website Development
                                </span>
                            </div>
                        </Col>

                        <Col className="col-knowedu">
                            <h1 className="title-knowedu">Education</h1>
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
                                    <h2>Front-end</h2>
                                    <p>
                                        Posuere mattis. Suspendisse egestas
                                        bibendum nulla. In erat nunc, posuere
                                        sed, auctor quis, pulvinar quis, mi.
                                        Mauris at est.
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
                                        Posuere mattis. Suspendisse egestas
                                        bibendum nulla. In erat nunc, posuere
                                        sed, auctor quis, pulvinar quis, mi.
                                        Mauris at est.
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
                                        Posuere mattis. Suspendisse egestas
                                        bibendum nulla. In erat nunc, posuere
                                        sed, auctor quis, pulvinar quis, mi.
                                        Mauris at est.
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
