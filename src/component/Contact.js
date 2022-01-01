import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMobileAlt,
  faEnvelope,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

import { FloatingLabel, Form, Button, Container } from 'react-bootstrap';

export default function Contact() {
  return (
    <Container fluid style={{ background: '#383a59' }}>
      <section className="section-contact">
        <div className="container">
          <div className="sub-section-contact">
            <div className="title-contact text-center">CONTACTS</div>
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
                      style={{ color: '#50fa7b' }}
                    />
                  </div>
                  <div className="col text-contact">Phone</div>
                  <div className="desc-contact">(+62)858-3540-4216</div>
                </div>
              </div>
              <div className="col d-flex justify-content-center">
                <div className="row gap-3">
                  <div className="col-md-1">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="icon-contact"
                      style={{ color: 'rgb(189, 147, 249)' }}
                    />
                  </div>
                  <div className="col text-contact">Email</div>
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
                      style={{ color: '#ffb86c' }}
                    />
                  </div>
                  <div className="col text-contact">Address</div>
                  <div className="desc-contact">Kepulauan Riau, Indonesia</div>
                </div>
              </div>
            </div>

            <div className="row form-contact">
              <div className="col-lg-7 sub-form-contact">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Nama"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="name@example.com"
                    style={{ backgroundColor: 'transparent', color: 'white' }}
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    style={{ backgroundColor: 'transparent', color: 'white' }}
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2" label="Pesan">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{
                      backgroundColor: 'transparent',
                      height: '200px',
                      color: 'white',
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
                    border: 'none',
                    fontSize: 20,
                  }}
                  className="btn-contact"
                >
                  Kirim
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
