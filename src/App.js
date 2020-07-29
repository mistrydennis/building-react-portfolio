import React, { Component } from 'react';
import {BrowserRouter as  Router, Route, Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Button} from 'react-bootstrap';
import history from './history';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import './App.css';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      title: 'Dennis Mistry',
      headerLinks :[
        {title:'Home',path:'/'},
        {title:'About',path:'/about'},
        {title:'Contact',path:'/contact'}
      ],
      home:{
        title: '"A winner never quits and a quitter never wins"',
        subtitle: 'Explore to discover',
        text: 'Information about me and my projects'
      },
      about:{
        title: 'About me'
    
      },
      contact:{
        title: 'Lets get in touch'
        
      }
    }
  }
  changerouteHandler = () =>{
  //  return (
  //   // 
  //   console.log("This is clicked")
  //   );
  this.setState({submitted:true});    
}
  render()
  {

   
    return (
      <Router>
        <Container className="p-0" fluid={true}>
        
          <Navbar className="border-bottom" bg="transparent" expand="lg"  >
            <Nav>
              <Link className="nav-link" to ="/">Dennis Mistry</Link>
            </Nav>
            
            
             

            
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          
          <Footer />

        </Container>

      </Router>
    
      );
  }

}

export default App;
