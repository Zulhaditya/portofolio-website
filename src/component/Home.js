import TypeWritter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faGithub,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons/';
import { NavLink, Route, Routes } from 'react-router-dom';
import Resume from './Resume';
import { Container } from 'react-bootstrap';
export default function Home() {
  return (
    <Container
      fluid
      className="g-0 main-container"
    >
      <section className="section">
        <h1 className="glitch">
          I'm Zulhaditya,
        </h1>

        <div className="typeWritter">
          <TypeWritter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typeWritter) => {
              typeWritter
                .typeString('UI/UX Designer and Front-End Developer.')
                .start()
                .pauseFor(3000)
                .deleteAll()
                .typeString('Based in Yogyakarta, Indonesia.')
                .start()
                .pauseFor(3000);
            }}
          />
        </div>

        <div className="resume">
          <NavLink to="resume" className="nav-item">
            <h3 className="clickHere">Click here to see my resume</h3>
          </NavLink>
        </div>
        <Routes>
          <Route path="/resume" element={<Resume />} />
        </Routes>

        <div className="flex-center">
          <a href="https://www.instagram.com/zulhaditya/">
            <FontAwesomeIcon
              icon={faInstagram}
              className="icon-3d"
              style={{ color: '#ff79c6', opacity: 1 }}
            />
          </a>
          <a href="https://web.facebook.com/hapiz.haditya.5">
            <FontAwesomeIcon
              icon={faFacebook}
              className="icon-3d"
              style={{ color: '#6272a4' }}
            />
          </a>
          <a href="https://github.com/Zulhaditya">
            <FontAwesomeIcon
              icon={faGithub}
              className="icon-3d"
              style={{ color: '#bd93f9' }}
            />
          </a>
          <a href="https://twitter.com/zulhadityaaa">
            <FontAwesomeIcon
              icon={faTwitter}
              className="icon-3d"
              style={{ color: ' #8be9fd ' }}
            />
          </a>
          <a href="https://www.youtube.com/channel/UCrFG9_7s0S8KQ3M-OvZx6qQ">
            <FontAwesomeIcon
              icon={faYoutube}
              className="icon-3d"
              style={{ color: ' #ff5555 ' }}
            />
          </a>
        </div>
      </section>
    </Container>
  );
}
