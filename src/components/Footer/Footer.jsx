import React from 'react'
import './footer.css'
import { Container, Row,Col,ListGroup,ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
const quick__links = [
  {
      path:'/home',
      display:'Home'
  },
  {
      path:'/about',
      display:'About'
  },
  {
      path:'/events',
      display:'Events'
  },
  
];
const quick__links2 = [
  {
      path:'/gallery',
      display:'Gallery'
  },
  {
      path:'/login',
      display:'Login'
  },
  {
      path:'/register',
      display:'Register'
  },
  
];
const Footer = () => {
  const year=new Date().getFullYear()
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='3'>
        <div className="logo">
          <img src={logo} alt="" />
          <p>Join us for an unforgettable experience filled with learning, inspiration, and fun activities designed to bring people together from all over the world.</p>
          <div className="social__links d-flex align-items-center gap-4">
            <span>
              <Link to='#'><i class="ri-github-fill"></i></Link>
            </span>
          </div>
        </div>
        </Col>
        <Col lg='3'>
        <h5 className="footer__link-title">Discover</h5>
        <ListGroup className="footer__quick-links">
          {
            quick__links.map((item,index)=>(
              <ListGroupItem key={index} className='ps-0 border-0'>
                <Link to={item.path}>{item.display}</Link>
              </ListGroupItem>
            )
            )
          }

        </ListGroup>
        </Col>
        <Col lg="3">
        <h5 className="footer__link-title">Quick links</h5>
        <ListGroup className="footer__quick-links">
          {
            quick__links2.map((item,index)=>(
              <ListGroupItem key={index} className='ps-0 border-0'>
                <Link to={item.path}>{item.display}</Link>
              </ListGroupItem>
            )
            )
          }

        </ListGroup>
        </Col>
        <Col lg='12' className="text-center pt-5">
        <p className="copyright">Copyright {year}, design and developed by our Team. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer
