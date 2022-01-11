import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMobileAlt,
    faEnvelope,
    faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import { send } from "emailjs-com";
import { useState } from "react";
import { FloatingLabel, Form, Button, Container, Modal } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton style={{ color: "rgb(80, 250, 123)" }}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Successfully sent a message!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Thank you for your attention.</h4>
                <p>
                    I will reply to your message as soon as possible so we can
                    work together.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} className="btn-danger">
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default function Contact() {
    const [toSend, setToSend] = useState({
        from_name: "",
        from_email: "",
        message: "",
    });

    const [modalShow, setModalShow] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        setModalShow(true);

        send(
            "service_h2hbhlv",
            "template_3t2jdk6",
            toSend,
            "user_uT3vLIBHiym7FfkLaYywZ"
        )
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                setToSend({
                    from_name: "",
                    from_email: "",
                    message: "",
                });
            })
            .catch((err) => {
                console.log("FAILED...", err);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <Container fluid style={{ background: "#383a59" }}>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <section className="section-contact">
                <div className="container">
                    <div className="sub-section-contact">
                        <div className="title-contact text-center">
                            CONTACTS
                        </div>
                        <div className="sub-title-contact text-center">
                            Send a messages if you want to work with me.
                        </div>
                        <div className="row" style={{ marginBottom: 50 }}>
                            <div className="col d-flex justify-content-center">
                                <div className="row gap-2">
                                    <div className="col-md-1">
                                        <FontAwesomeIcon
                                            icon={faMobileAlt}
                                            className="icon-contact"
                                            style={{ color: "#50fa7b" }}
                                        />
                                    </div>
                                    <div className="col text-contact">
                                        Phone
                                    </div>
                                    <div className="desc-contact">
                                        (+62)858-3540-4216
                                    </div>
                                </div>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <div className="row gap-3">
                                    <div className="col-md-1">
                                        <FontAwesomeIcon
                                            icon={faEnvelope}
                                            className="icon-contact"
                                            style={{
                                                color: "rgb(189, 147, 249)",
                                            }}
                                        />
                                    </div>
                                    <div className="col text-contact">
                                        Email
                                    </div>
                                    <div className="desc-contact">
                                        muhammad.hapiz@students.amikom.ac.id
                                    </div>
                                </div>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <div className="row gap-2">
                                    <div className="col-md-1">
                                        <FontAwesomeIcon
                                            icon={faMapMarkerAlt}
                                            className="icon-contact"
                                            style={{ color: "#ffb86c" }}
                                        />
                                    </div>
                                    <div className="col text-contact">
                                        Address
                                    </div>
                                    <div className="desc-contact">
                                        Yogyakarta, Indonesia
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Form
                            onSubmit={onSubmit}
                            name="contact-form"
                            className="row form-contact"
                        >
                            <div className="col-lg-7 sub-form-contact">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Name"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        type="text"
                                        name="from_name"
                                        value={toSend.from_name}
                                        onChange={handleChange}
                                        placeholder="your name"
                                        style={{
                                            backgroundColor: "transparent",
                                            color: "white",
                                        }}
                                    />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        type="email"
                                        name="from_email"
                                        value={toSend.from_email}
                                        onChange={handleChange}
                                        placeholder="name@example.com"
                                        style={{
                                            backgroundColor: "transparent",
                                            color: "white",
                                        }}
                                    />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingTextarea2"
                                    label="Messages"
                                >
                                    <Form.Control
                                        as="textarea"
                                        name="message"
                                        value={toSend.message}
                                        onChange={handleChange}
                                        placeholder="Leave a comment here"
                                        style={{
                                            backgroundColor: "transparent",
                                            height: "200px",
                                            color: "white",
                                        }}
                                    />
                                </FloatingLabel>
                                <Button
                                    variant="secondary"
                                    style={{
                                        marginTop: 20,
                                        width: 123,
                                        height: 50,
                                        fontWeight: 600,
                                        border: "none",
                                        fontSize: 20,
                                    }}
                                    className="btn-contact"
                                    type="submit"
                                >
                                    Send
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </section>
        </Container>
    );
}
