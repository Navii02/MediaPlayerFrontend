//import React from 'react'
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import {faFacebook,faInstagram,faLinkedin,faWhatsapp,faXTwitter} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className="p-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <h3 className="text-warning">
                <FontAwesomeIcon icon={faVideo} className="me-3" /> Media Player
              </h3>
              <p style={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                libero impedit similique temporibus eveniet sunt voluptatem,
                est, quidem excepturi illum perferendis officiis cumque qui ad
                repudiandae quisquam, laboriosam aliquam quo!
              </p>
            </div>
            <div className="col-md-2 d-md-flex justify-content-center mt-md-0">
              <div>
                <h3>Links</h3>
                <Link to='{/}'><p className="mt-3">Landing page</p></Link>
                <Link to='{/home}'><p>Home page</p></Link>
                <Link to='{/watchhistory}'><p>Watch History</p></Link>
              </div>
            </div>
            <div className="col-md-2 d-md-flex justify-content-center mt-4 mt-md-0">
              <div>
                <h3>Guides</h3>
                <p className="mt-3">React</p>
                <p>React Bootstrap</p>
                <p>Bootstrap</p>
              </div>
            </div>
            <div className="col-md-4">
              <h3>Contact Us</h3>
              <div className="mt-3 d-flex">
                <input type="text" placeholder="Email Id" className="form-control" />
                <button className="btn btn-warning ms-3">Subscribe</button>
              </div>
              <div className="d-flex justify-content-between mt-3">
              <FontAwesomeIcon icon={faInstagram} className="fa-2x" />
              <FontAwesomeIcon icon={faXTwitter} className="fa-2x" />
              <FontAwesomeIcon icon={faFacebook} className="fa-2x" />
              <FontAwesomeIcon icon={faWhatsapp} className="fa-2x" />
              <FontAwesomeIcon icon={faLinkedin} className="fa-2x" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
