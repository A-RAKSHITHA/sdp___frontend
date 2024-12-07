import React from 'react'
import EventCard from '../../shared/EventCard'
import tourData from '../../assets/data/tours'
import { Col } from 'reactstrap'
const FeaturedEventsList = () => {
  return <>
  {
    tourData?.map(tour =>( 
        <Col lg="3" className="mb-4" key={tour.id}>
            <EventCard tour={tour}/>
        </Col>
    ))
  }
  </>
}

export default FeaturedEventsList