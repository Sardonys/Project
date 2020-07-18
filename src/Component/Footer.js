import React, {Component} from 'react' 
import { Dropdown} from 'react-bootstrap'
import './Nav.css'
class Footer extends Component{
    render(){
        return(
         <div className="big">
             <div className="medium">
                <h3>About</h3><hr></hr>
                <h3>Contact</h3>
             </div>
             <div className="small">
                 <h5>@copyright2020</h5>

             </div>
         </div>
           
        )
    }
}


export default Footer;