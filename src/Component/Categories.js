import React, {Component} from 'react' 
import { Card} from 'react-bootstrap'
import './Nav.css'
class Categories extends Component{
    render(){
        return(
          
            <div className="justify-content-center">
            <h1>Categories</h1>
        <div className="d-flex m-2">
        <Card style={{ width: '18rem', margin:'10px' }}>
        <Card.Body>
          <Card.Title>Developer</Card.Title>
        </Card.Body>
      </Card>

      
        <Card style={{ width: '18rem', margin:'10px' }}>
        <Card.Body>
          <Card.Title>Networking</Card.Title>
        </Card.Body>
      </Card>

      
        <Card style={{ width: '18rem', margin:'10px' }}>
        <Card.Body>
          <Card.Title>Desinger</Card.Title>
        </Card.Body>
      </Card>

      
        <Card style={{ width: '18rem', margin:'10px' }}>
        <Card.Body>
          <Card.Title>Data Science</Card.Title>
        </Card.Body>
      </Card>

    
    </div>
       
     
     </div>
           
        )
    }
}

export default Categories;