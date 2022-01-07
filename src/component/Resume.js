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
        <Container fluid className="g-0" style={{ background: "#383a59" }}>
            <Container className="container-resume">
                <Row
                    className="row-resume"
                    style={{
                        marginTop: 200,
                        marginBottom: 200,
                    }}
                >
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
                        <h1 className="judul-aboutMe">About Me</h1>{" "}
                        <h2 className="sub-judul-aboutMe">
                            20 tahun / Mahasiswa / Kepulauan Riau
                        </h2>
                        <p className="detail-aboutMe">
                            Prolific, full stack web developer with a passion
                            for metrics and beating former "best-yets."
                            Prototyped 25 new product features per year for
                            Flexor, Inc. Decreased rework by 22% and costs by
                            15%. Consistently receive high user experience
                            scores for all web development projects, including a
                            55% increase for Flexor, Inc. Passionate about
                            building world class web applications. One of my
                            sites received a 2015 Webby for Best Navigation and
                            Structure. Prolific, full stack web developer with a
                            passion for metrics and beating former "best-yets."
                            Prototyped 25 new product features per year for
                            Flexor, Inc. Decreased rework by 22% and costs by
                            15%. Consistently receive high user experience
                            scores for all web development projects, including a
                            55% increase for Flexor, Inc. Passionate about
                            building world class web applications. One of my
                            sites received a 2015 Webby for Best Navigation and
                            S
                        </p>
                    </Col>
                </Row>
                <Row className="row-experience">
                    <Col xs={12} md={6}>
                        <h1 className="judul-experience">Experience</h1>
                        <div className="box-tahun">
                            <div className="garis-1"></div>
                            <div className="sub-box-tahun">
                                <h2 className="detail-tahun">
                                    2019 - Sekarang
                                </h2>
                            </div>
                            <div>
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
                            <div>
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
                            <div>
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
                            <div>
                                <div></div>
                            </div>
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
                                <h2
                                    className="detail-tahun-edu"
                                >
                                    2013-2015
                                </h2>
                            </div>
                            <div>
                                <h3
                                    className="sub-judul-edu"
                                >
                                    SMPN 1 Lingga
                                </h3>
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

                <Row className="row-skill">
                    <Col xs={12} md={6}>
                        <h1 className="title-design-skill">Design Skill</h1>
                        <div style={{ paddingLeft: 30 }}>
                            <div
                                className="section-figma"
                                style={{ marginBottom: 30 }}
                            >
                                <h2 className="sub-title-design">Figma</h2>
                                <h2
                                    style={{ marginLeft: 380 }}
                                    className="percent-angka"
                                >
                                    90%
                                </h2>
                                <div
                                    className="percent-bar"
                                    style={{
                                        background: "rgb(189, 147, 249)",
                                        width: 390,
                                        height: 27,
                                        display: "inline-block",
                                    }}
                                ></div>
                                <div
                                    className="percent-none"
                                    style={{
                                        background: "rgb(69 69 90)",
                                        width: 57,
                                        height: 27,
                                        display: "inline-block",
                                    }}
                                ></div>
                            </div>

                            <div
                                className="section-inkscape"
                                style={{ marginBottom: 30 }}
                            >
                                <h2
                                    className="sub-title-design"
                                    style={{ marginBottom: 30 }}
                                >
                                    Inkscape
                                </h2>
                                <h2
                                    className="percent-angka"
                                    style={{ fontSize: 20, marginLeft: 290 }}
                                >
                                    70%
                                </h2>
                                <div
                                    className="percent-bar"
                                    style={{
                                        background: "rgb(139, 233, 253)",
                                        width: 308,
                                        height: 27,
                                        display: "inline-block",
                                    }}
                                ></div>
                                <div
                                    className="percent-none"
                                    style={{
                                        background: "rgb(69 69 90)",
                                        width: 139,
                                        height: 27,
                                        display: "inline-block",
                                    }}
                                ></div>
                            </div>

                            <div
                                className="section-illustrator"
                                style={{ marginBottom: 50 }}
                            >
                                <h2
                                    className="sub-title-design"
                                    style={{ marginBottom: 30 }}
                                >
                                    Adobe Illustrator
                                </h2>
                                <h2
                                    className="percent-angka"
                                    style={{ fontSize: 20, marginLeft: 350 }}
                                >
                                    80%
                                </h2>
                                <div
                                    className="percent-bar"
                                    style={{
                                        background: "rgb(255, 184, 108)",
                                        width: 363,
                                        height: 27,
                                        display: "inline-block",
                                    }}
                                ></div>
                                <div
                                    className="percent-none"
                                    style={{
                                        background: "rgb(69 69 90)",
                                        width: 84,
                                        height: 27,
                                        display: "inline-block",
                                    }}
                                ></div>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} md={6}>
                        <h1
                            className="title-coding"
                            style={{
                                textAlign: "center",
                                marginTop: 30,
                                marginBottom: 30,
                            }}
                        >
                            Coding Skill
                        </h1>

                        <Row>
                            <Col xs={12} md={6}>
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
                                    <h2 className="title-code">PHP / MySql</h2>
                                </div>
                            </Col>
                        </Row>

                        <Row>
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
                                    <h2 className="title-code">HTML / CSS</h2>
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

                <Row className="row-knowedu gap-5">
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
                        <Row className="row-serv">
                            <Col md={2} className="col-icon-serv">
                                <FontAwesomeIcon
                                    icon={faHtml5}
                                    className="icon-serv"
                                    style={{
                                        color: "rgb(255, 184, 108)",
                                        width: 70,
                                        height: 70,
                                        marginLeft: 20,
                                    }}
                                />
                            </Col>
                            <Col md={10} className="col-detail-serv">
                                <h2>Front-end</h2>
                                <p>
                                    Posuere mattis. Suspendisse egestas bibendum
                                    nulla. In erat nunc, posuere sed, auctor
                                    quis, pulvinar quis, mi. Mauris at est.
                                </p>
                            </Col>
                        </Row>

                        <Row className="row-serv">
                            <Col md={2} className="col-icon-serv">
                                <FontAwesomeIcon
                                    icon={faReact}
                                    className="icon-serv"
                                    style={{
                                        color: "rgb(139, 233, 253)",
                                        width: 70,
                                        height: 70,
                                        marginLeft: 20,
                                    }}
                                />
                            </Col>
                            <Col md={10} className="col-detail-serv">
                                <h2>Website Development</h2>
                                <p>
                                    Posuere mattis. Suspendisse egestas bibendum
                                    nulla. In erat nunc, posuere sed, auctor
                                    quis, pulvinar quis, mi. Mauris at est.
                                </p>
                            </Col>
                        </Row>

                        <Row className="row-serv">
                            <Col md={2} className="col-icon-serv">
                                <FontAwesomeIcon
                                    icon={faAndroid}
                                    className="icon-serv"
                                    style={{
                                        color: "#50fa7b",
                                        width: 70,
                                        height: 70,
                                        marginLeft: 20,
                                    }}
                                />
                            </Col>
                            <Col md={10} className="col-detail-serv">
                                <h2>Mobile Development</h2>
                                <p>
                                    Posuere mattis. Suspendisse egestas bibendum
                                    nulla. In erat nunc, posuere sed, auctor
                                    quis, pulvinar quis, mi. Mauris at est.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
