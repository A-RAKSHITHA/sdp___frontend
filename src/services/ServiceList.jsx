import React from 'react';
import ServiceCard from './ServiceCard';
import { Col, Container, Row } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Webinars",
    desc: "Online educational sessions and presentations",
    route: "/events/webinars"
  },
  {
    imgUrl: customizationImg,
    title: "Conferences",
    desc: "Large-scale professional gatherings and meetings",
    route: "/events/conferences"
  },
  {
    imgUrl: guideImg,
    title: "Workshops",
    desc: "Interactive learning and hands-on sessions",
    route: "/events/workshops"
  },
];

const ServiceList = () => {
  const navigate = useNavigate();

  const handleServiceClick = (route) => {
    navigate(route);
  };

  return (
    <Container>
      <Row>
        {servicesData.map((item, index) => (
          <Col lg="3" key={index}>
            <ServiceCard 
              item={item} 
              onClick={() => handleServiceClick(item.route)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServiceList;
