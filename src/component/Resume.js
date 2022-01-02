import { Container, Row, Col } from "react-bootstrap";
import myImage from "../img/zulhaditya-bw.jpeg";

export default function Resume() {
    return (
        <Container fluid className="g-0" style={{ background: "#383a59" }}>
            <Container
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
            >
                <Row
                    style={{
                        backgroundColor: "yellow",
                        marginTop: 200,
                        marginBottom: 200,
                    }}
                >
                    <Col xs={12} md={5} style={{ backgroundColor: "#282836" }}>
                        {" "}
                        <img
                            src={myImage}
                            alt="myImage"
                            height="680"
                            width="403"
                            style={{
                                position: "absolute",
                                marginTop: -100,
                                marginLeft: 70,
                            }}
                        />
                    </Col>
                    <Col xs={12} md={7} style={{ backgroundColor: "#282836" }}>
                        {" "}
                        <h1
                            className="judul-aboutMe"
                            style={{
                                fontSize: 68,
                                fontWeight: "bold",
                                marginTop: 30,
                            }}
                        >
                            About Me
                        </h1>{" "}
                        <h2
                            className="sub-judul-aboutMe"
                            style={{
                                fontSize: 28,
                                fontWeight: "bold",
                                color: "rgb(139, 233, 253)",
                            }}
                        >
                            20 tahun / Mahasiswa / Kepulauan Riau
                        </h2>
                        <p style={{ fontSize: 18, marginBottom: 50 }}>
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
                <Row style={{ minHeight: "50vh" }}>
                    <Col xs={12} md={6} style={{ backgroundColor: "#282836" }}>
                        <h1
                            style={{
                                textAlign: "center",
                                marginBottom: 30,
                                marginTop: 30,
                            }}
                        >
                            Experience
                        </h1>
                        <div style={{ marginLeft: 70, width: 400 }}>
                            <div
                                style={{
                                    width: 240,
                                    height: 50,
                                    border: "1px solid yellow",
                                    textAlign: "center",
                                    marginBottom: 18,
                                }}
                            >
                                <h2
                                    style={{
                                        fontSize: 24,
                                        lineHeight: 2,
                                        fontWeight: "bold",
                                    }}
                                >
                                    2019 - Sekarang
                                </h2>
                            </div>
                            <div>
                                <h3>Freelance Designer - fiverr</h3>
                                <p>
                                    Saya mengerjakan design vector dengan style
                                    anime jepang dan juga menerima jasa design
                                    logo dan juga jasa design lainnya.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginLeft: 70, width: 400 }}>
                            <div
                                style={{
                                    width: 240,
                                    height: 50,
                                    border: "1px solid yellow",
                                    textAlign: "center",
                                    marginBottom: 18,
                                }}
                            >
                                <h2
                                    style={{
                                        fontSize: 24,
                                        lineHeight: 2,
                                        fontWeight: "bold",
                                    }}
                                >
                                    2016 - Sekarang
                                </h2>
                            </div>
                            <div>
                                <h3>Musisi</h3>
                                <p>
                                    Saya tergabung kedalam salah satu band punk bersama teman di sekolah. Posisi di band adalah gitaris
                                </p>
                            </div>
                        </div>
                        <div style={{ marginLeft: 70, width: 400 }}>
                            <div
                                style={{
                                    width: 240,
                                    height: 50,
                                    border: "1px solid yellow",
                                    textAlign: "center",
                                    marginBottom: 18,
                                }}
                            >
                                <h2
                                    style={{
                                        fontSize: 24,
                                        lineHeight: 2,
                                        fontWeight: "bold",
                                    }}
                                >
                                    2016-2018
                                </h2>
                            </div>
                            <div>
                                <div></div>
                                <h3>Freelancer Videographer</h3>
                                <p>
                                Pernah membuat project film pendek untuk mewakili sekolah saya di festival seni tingkat provinsi
                                dan alhamdulillah berhasil mendapat juara 2.
                                </p>
                            </div>
                            <div>
                                <div></div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} style={{ backgroundColor: "#282836" }}>
                        <h1
                            style={{
                                textAlign: "center",
                                marginBottom: 30,
                                marginTop: 30,
                            }}
                        >
                            Education
                        </h1>

                        <div style={{ marginLeft: 70, width: 400 }}>
                            <div
                                style={{
                                    width: 240,
                                    height: 50,
                                    border: "1px solid yellow",
                                    textAlign: "center",
                                    marginBottom: 18,
                                }}
                            >
                                <h2
                                    style={{
                                        fontSize: 24,
                                        lineHeight: 2,
                                        fontWeight: "bold",
                                    }}
                                >
                                    2019 - Sekarang
                                </h2>
                            </div>
                            <div>
                                <h3>Universitas Amikom Yogyakarta</h3>
                                <p>
                                    Saya mengerjakan design vector dengan style
                                    anime jepang dan juga menerima jasa design
                                    logo dan juga jasa design lainnya.

                                </p>
                            </div>
                        </div>

                        <div style={{ marginLeft: 70, width: 400 }}>
                            <div
                                style={{
                                    width: 240,
                                    height: 50,
                                    border: "1px solid yellow",
                                    textAlign: "center",
                                    marginBottom: 18,
                                }}
                            >
                                <h2
                                    style={{
                                        fontSize: 24,
                                        lineHeight: 2,
                                        fontWeight: "bold",
                                    }}
                                >
                                    2016 - 2018
                                </h2>
                            </div>
                            <div>
                                <h3>SMAN - 1 Lingga</h3>
                                <p>
                                    Saya mengerjakan design vector dengan style
                                    anime jepang dan juga menerima jasa design
                                    logo dan juga jasa design lainnya.
                                </p>
                            </div>
                        </div>
                        <div style={{ marginLeft: 70, width: 400 }}>
                            <div
                                style={{
                                    width: 240,
                                    height: 50,
                                    border: "1px solid yellow",
                                    textAlign: "center",
                                    marginBottom: 18,
                                }}
                            >
                                <h2
                                    style={{
                                        fontSize: 24,
                                        lineHeight: 2,
                                        fontWeight: "bold",
                                    }}
                                >
                                    2013-2015
                                </h2>
                            </div>
                            <div>
                                <div></div>
                                <h3>SMPN 1 Lingga</h3>
                                <p>
                                    Saya mengerjakan design vector dengan style
                                    anime jepang dan juga menerima jasa design
                                    logo dan juga jasa design lainnya.
                                </p>
                            </div>
                            <div>
                                <div></div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

