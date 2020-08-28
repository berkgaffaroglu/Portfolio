import React, { Component } from 'react'
import { Nav, Form, Button, FormControl,Navbar, NavDropdown} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { withRouter } from 'react-router-dom'
import {MdSearch} from "react-icons/md";
import {AiFillHome} from "react-icons/ai";

class Navigation extends Component {
    constructor(state) {
        super(state);
        this.state = {
            activeKey: null,
            value: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey
        })
    }
    handleChange(event) {

        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        if(this.state.value != "") {
        this.props.history.push(`/search/${this.state.value}`);
        } else {
            event.preventDefault();
        }
    }

    render() {

        return (
            <Navbar style={{backgroundColor:"#212121"}} className="p-2 mb-5" variant="dark" expand="lg">
                <LinkContainer exact to='/'><Navbar.Brand><span className="nav-element-header">Berk Gaffaroglu</span></Navbar.Brand></LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav-element">
                    <LinkContainer exact to='/'><Nav.Link style={{marginBottom:"100px"}} className="custom-navlink">Home</Nav.Link></LinkContainer>
                    <LinkContainer to='/projects'><Nav.Link className="custom-navlink">Projects</Nav.Link></LinkContainer>
                    <LinkContainer to='/contact/direct'><Nav.Link className="custom-navlink">Contact</Nav.Link></LinkContainer>
                    </Nav>
                    <Form className="mr-auto"  onSubmit={this.handleSubmit} inline>
                        <FormControl className="ml-lg-5" style={{width:"250px"}} value={this.state.value} onChange={this.handleChange} type="text" placeholder="Search in projects" />
                        <Button type="submit" className="ml-lg-1 ml-xs-3" variant="success"><MdSearch/></Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            

        )
    }
}

export default withRouter(Navigation)
