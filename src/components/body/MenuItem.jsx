import React, {Fragment} from 'react';
import {Card, Col, Container} from 'react-bootstrap';
import image from '../../data/dishes';



const MenuItem = props => {
    
    return(
        <div>
          <Fragment>
      <Container>
        <Col>
 
            <Card style={{ width: '25rem', marginTop: '15px'}}>
      <Card.Img variant="top" src={props.dish.image} style={{ cursor:"pointer" }} onClick={ props.DishSelect} width="350px" height="350px"/>
      <Card.Body>
        <Card.Title  >{props.dish.name}</Card.Title>
        <Card.Text>
          {props.dish.description}
        </Card.Text>
        <p><b>Price: {props.dish.price}</b></p>
        <p><b>Label:{props.dish.label}</b></p>
        
      </Card.Body>
      
    </Card>
    </Col>
      </Container>
          </Fragment>
        </div>
    )
}

export default MenuItem;