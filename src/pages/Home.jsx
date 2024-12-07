import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import Subtitle from './../shared/Subtitle';
import experienceImg from '../assets/images/experience.png';
import SearchBar from './../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedEventsList from '../components/Featured-events/FeaturedEventsList';
import Testimonials from '../components/Testimonial/Testimonials';

const Home = () => {
  const navigate = useNavigate();
  
  // Simulate an authentication check
  const isAuthenticated = localStorage.getItem('isAuthenticated'); // Replace this with your actual auth logic

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/home'); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Know Before You Go'} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Events are the gateways to unforgettable{''}
                  <span className="highlight"> moments</span>
                </h1>
                <p>
                  Events are unique opportunities to bring people together, create cherished
                  memories, and celebrate life special moments. From joyful weddings and vibrant music
                  festivals to inspiring workshops and charity galas, each event tells a story and
                  fosters meaningful connections. They leave lasting impressions, much like the
                  unforgettable adventures of traveling.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="md-5">
              <Subtitle subtitle={'Explore'} />
              <h2 className="featured__event-title">Our featured events</h2>
            </Col>
            <FeaturedEventsList />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={'Experience'} />
                <h2>
                  With our all experience <br /> we will serve You
                </h2>
              </div>
              <div className="counter__wrapped d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>10k+</span>
                  <h6>Attendees served</h6>
                </div>
                <div className="counter__box">
                  <span>8+</span>
                  <h6>Years in events</h6>
                </div>
                <div className="counter__box">
                  <span>30k+</span>
                  <h6>Events powered</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={'Customer Review'} />
              <h2 className="testimotial__title">What Our Customers say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
