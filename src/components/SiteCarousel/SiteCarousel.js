import React from 'react';
import './SiteCarousel.css';
import { Container, Row, Col } from 'reactstrap';


class SiteCarousel extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Container>
			<Row>
          <Col sm="12" lg="4">.col</Col>
          <Col sm="12" lg="4">.col</Col>
          <Col sdm="12" lg="4">.col</Col>
					</Row>
					<Row>
					<Col sm="12" lg="4">.col</Col>
          <Col sm="12" lg="4">.col</Col>
          <Col sm="12" lg="4">.col</Col>
					</Row>
					</Container>
		)};
}

export default SiteCarousel;