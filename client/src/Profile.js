import React, { Component } from 'react';
import { Container, Jumbotron,Row,Col,Card } from 'reactstrap';
import { Media,CardBody,CardImg,CardTitle,CardText,CardSubtitle,CardImgOverlay } from 'reactstrap';

class Profile extends Component {
    constructor(props){
        super(props);
    }

    
  render()
   {
    return (
      <Jumbotron>
       <Container>
        <Media>
         <img src="..." class="mr-3" alt="Avatar"></img>
         <div class="media-body">
          <h1 class="mt-0">Username</h1>
          Bio
         </div>
        </Media>
       </Container>
      

       <Container>
         <div>
          <h3>Reviews</h3>
          <Card>           
          <CardImg top width="100%" src="/assets/318x180.svg" alt="Poster" />
           <CardBody>
            <CardTitle tag="h5">Movie Name</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Details</CardSubtitle>
            <CardText>Review for that movie</CardText>
            </CardBody>
          </Card>
         </div>
        </Container>
      </Jumbotron>
    );
   };
}

export default Profile