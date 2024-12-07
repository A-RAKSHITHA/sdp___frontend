import React from 'react'
import CommonSection from '../shared/CommonSection'
import '../styles/events.css'
import eventData from '../assets/data/tours'
import EventCard from '../shared/EventCard'
import SearcBar from '../shared/SearchBar'
import { Container, Row , Col } from 'reactstrap'
const Events = () => {
  return (<>
    <CommonSection title={'All Events'}/>
    <section>
      <Container>
        <Row>
          <SearcBar />
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          {
            eventData?.map(tour => (
            <Col lg="3" key={tour.id}>
            <EventCard tour={tour}/>
            </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  </>
  )
}

export default Events