import React,{useRef} from 'react'
import './search-bar.css'
import { Col, Form ,FormGroup } from 'reactstrap'


const SearcBar = () => {
    const locationRef = useRef('')
    const maxGroupSizeRef = useRef(0)

    const searchHandler = () =>{
        const location = locationRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value
        if(location===''|| maxGroupSize==='' ){
            return alert('All fields are required!')
        }
    }

  return <Col lg='12'>
    <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
        <FormGroup className="d-flex gap-3 form__group form-group-fast">
            <span><i class="ri-map-pin-line"></i></span>
            <div>
                <h6>platform</h6>
                <input type="text" placeholder="where to conduct ?" ref={locationRef}/>
            </div>
        </FormGroup>
        <FormGroup className="d-flex gap-3 form__group form-group-fast">
            <span><i class="ri-group-line"></i></span>
            <div>
                <h6>Max people</h6>
                <input type="text" placeholder="0" ref={maxGroupSizeRef}/>
            </div>
        </FormGroup>
        <span className="search__icon" type='submit' onClick={searchHandler}>
            <i class="ri-search-line"></i>
        </span>
        </Form>
    </div>
  </Col>
};
export default SearcBar;
