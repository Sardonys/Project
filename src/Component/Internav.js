import React, {Component} from 'react' 
import {Card, Button} from 'react-bootstrap'
import './Nav.css'
class Internav extends Component{
    render(){
        return(
            <div className="justify-content-center">
                <h1>Available Interns</h1>
            <div className="d-flex m-2">
            <Card style={{ width: '18rem', margin:'10px' }}>
            <Card.Body>
              <Card.Title>Company Name</Card.Title>
              <Card.Text>
                Post:
              </Card.Text>
              <Button variant="primary">Apply Now</Button>
            </Card.Body>
          </Card>
        
           <Card style={{ width: '18rem', margin:'10px' }}>
           <Card.Body>
             <Card.Title>Company Name</Card.Title>
             <Card.Text>
               Post:
             </Card.Text>
             <Button variant="primary">Apply Now</Button>
           </Card.Body>
         </Card>
         <Card style={{ width: '18rem', margin:'10px' }}>
           <Card.Body>
             <Card.Title>Company Name</Card.Title>
             <Card.Text>
               Post:
             </Card.Text>
             <Button variant="primary">Apply Now</Button>
           </Card.Body>
         </Card>

         <Card style={{ width: '18rem', margin:'10px' }}>
            <Card.Body>
              <Card.Title>Company Name</Card.Title>
              <Card.Text>
                Post:
              </Card.Text>
              <Button variant="primary">Apply Now</Button>
            </Card.Body>
          </Card>
         
         </div>

<div className="d-flex m-2">
<Card style={{ width: '18rem', margin:'10px' }}>
<Card.Body>
  <Card.Title>Company Name</Card.Title>
  <Card.Text>
    Post:
  </Card.Text>
  <Button variant="primary">Apply Now</Button>
</Card.Body>
</Card>

<Card style={{ width: '18rem', margin:'10px' }}>
<Card.Body>
 <Card.Title>Company Name</Card.Title>
 <Card.Text>
   Post:
 </Card.Text>
 <Button variant="primary">Apply Now</Button>
</Card.Body>
</Card>
<Card style={{ width: '18rem', margin:'10px' }}>
<Card.Body>
 <Card.Title>Company Name</Card.Title>
 <Card.Text>
   Post:
 </Card.Text>
 <Button variant="primary">Apply Now</Button>
</Card.Body>
</Card>

<Card style={{ width: '18rem', margin:'10px' }}>
<Card.Body>
  <Card.Title>Company Name</Card.Title>
  <Card.Text>
    Post:
  </Card.Text>
  <Button variant="primary">Apply Now</Button>
</Card.Body>
</Card>

</div>
</div>
        )
    }
}

export default Internav;