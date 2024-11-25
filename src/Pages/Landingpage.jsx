//import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom'

function Landingpage() {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col sm={12} md={6}>
            <h1>
              Welcome to <span className="text-warning">Media Player</span>
            </h1>
            <p style={{ textAlign: "justify" }} className="mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias rerum in veritatis sint exercitationem ut, consequuntur,
              sequi aliquid minima aut adipisci unde cupiditate quos delectus,
              eveniet ducimus! Quae, dolor in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit tempora dolorum aliquam exercitationem aut officia porro a voluptatum? Praesentium voluptate veritatis in iusto placeat modi, mollitia dolores deleniti autem.
            </p>
           <Link to ="/home"> <button className="btn btn-warning mt-5">Get Started</button></Link>
          </Col>
          <Col sm={12} md={6} className="d-flex justify-content-center">
            <img
              src="https://i.pinimg.com/originals/88/4a/40/884a408310b28171aa1018f77dee2602.gif"
              alt="no image"
              style={{ width: "300px", height: "300px" }}
            />
          </Col>
        </Row>
      </Container>
      <div className="container-fluid mt-5">
        <div className="row mt-5">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1 className="text-center">Features</h1>
            <div className="row mt-5">
            <div className="col-md-4">
              <Card style={{ width: "100%" }} className="p-1">
                <Card.Img variant="top" src="https://designlessons.ru/800/600/https/cdn.dribbble.com/users/1111127/screenshots/3988788/audio.gif" className="w-100" style={{  height: "200px" }} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
            <Card style={{ width: "100%" }} className="p-1">
                <Card.Img variant="top" src="https://i.pinimg.com/originals/c6/c1/1d/c6c11d8ba0b9f26caf0a6a8ee3a3e78e.gif" className="w-100" style={{  height: "200px" }} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
            <Card style={{ width: "100%" }} className="p-1">
                <Card.Img variant="top" src="https://c.tenor.com/bVk4KX5znbEAAAAC/graphics-equalizer-colors.gif"className="w-100"  style={{  height: "200px" }}/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the  content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div className="row mt-5">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="row border mt-4 rounded-3 p-3">
            <div className="col-md-6 px-4 ">
              <h1 className="text-warning">Simple Fast and Powerful</h1>
              <div>
              <p><span className="fs-2">Play EveryThing</span> : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed vero, aspernatur tenetur asperiores placeat earum soluta voluptateLorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit tempora dolorum aliquam exercitationem </p>
              </div>
              <div>
              <p><span className="fs-2">Play EveryThing</span> : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed vero, aspernatur tenetur asperiores placeat earum soluta voluptateLorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit tempora dolorum aliquam exercitationem </p>
              </div>
              <div>
              <p><span className="fs-2">Play EveryThing</span> : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed vero, aspernatur tenetur asperiores placeat earum soluta voluptateLorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit tempora dolorum aliquam exercitationem </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mt-3 " style={{height:'90%'}} >
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/B2UBMTA57JI?si=xakWjCnMxc-e-jsw" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
        </div>
      </div>
    </>
  );
}

export default Landingpage;
