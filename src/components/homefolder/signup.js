import React, { Component } from "react";
import {  FormGroup, FormControl, ControlLabel,Button } from "react-bootstrap";
import "./Signup.css";
import fire from './Fire';
import { Redirect } from 'react-router-dom';
import  Navbar from './Nav-bar';
import Particles from 'react-particles-js';

const particleOpt={
  particles:{
      number:{
          value:150,
          density:{
              enable:true,
              value_area:800
          }
      },
      color:{
          value:"#b61924"
      }
  }
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: "",
      user:null
     
    };
    
  }
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
        
      }
    });
  }
  
  
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
      this.props.history.push("/dashboard")
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
        this.props.history.push("/signup");
      })
  }
  render() {
    return (
<div>
      <Navbar/>
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="Name" bsSize="large">
            <ControlLabel>First Name</ControlLabel>
            <FormControl
              type="email"
              name="Name"
              placeholder="FirstName"
              value={this.state.FirstName}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="Name" bsSize="large">
            <ControlLabel>Last Name</ControlLabel>
            <FormControl
              type="email"
              name="LastName"
              placeholder="LastName"
              value={this.state.LastName}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
               value={this.state.password}
               onChange={this.handleChange}
              type="password"
              name="password" 
              placeholder="Password"
              id="exampleInputPassword1" 
               
            />
          </FormGroup>
           {/* <input type = "button" value = "log in" bsSize="large"  block onClick={this.loginHandle}/> */}
        
           <Button
            block
            bsSize="large"
            onClick={this.signup}
            //disabled={!this.validateForm()}
            type="submit"
          >
            Signup
          </Button>
          
        </form>
      </div>
      <Particles 
              params={particleOpt}/>
      </div>
    );
  }
}
export default Login;