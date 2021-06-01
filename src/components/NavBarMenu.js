import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCoffee,faEdit,faTrash,faHome,faList,faPlus,faSearch,faInfo } from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
class NavBarMenu extends Component {
    state = {  }
    render() { 
        return ( 
            
            <div>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Resturant</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home"><Link to="/"><FontAwesomeIcon icon={faHome}/>Home</Link></Nav.Link>
      <Nav.Link href="#link"><Link to="/list"><FontAwesomeIcon icon={faList}/>List</Link></Nav.Link>
      <Nav.Link href="#home"><Link to="/create"><FontAwesomeIcon icon={faPlus}/>Create</Link></Nav.Link>
      <Nav.Link href="#home"><Link to="/search"><FontAwesomeIcon icon={faSearch}/>Search</Link></Nav.Link>
     {
         localStorage.getItem('login') ? 
         <Nav.Link href="#home"><Link to="/logout"><FontAwesomeIcon icon={faSearch}/>Logout</Link></Nav.Link>
  :  
  <Nav.Link href="#home"><Link to="/login"><FontAwesomeIcon icon={faSearch}/>Login</Link></Nav.Link>
    
        }
     
     

       </Nav>
 
  </Navbar.Collapse>
</Navbar> 

</div>
 );
    }
}
 
export default NavBarMenu; 