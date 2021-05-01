import React, { Component } from 'react'
import { Nav, Form, Button, FormControl, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { withRouter } from 'react-router-dom'
import { MdSearch } from "react-icons/md";
import logo from '../logo2.png';
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
        if (this.state.value != "") {
            this.props.history.push(`/search/${this.state.value}`);
        } else {
            event.preventDefault();
        }
    }

    render() {
        return (
            
            <Navbar style={{ backgroundColor: "#02203c" , zIndex:"999"}} variant="dark" className="p-4 mb-4" expand="lg">

                <LinkContainer exact to='/'><Navbar.Brand><img src={logo} className="ml-lg-5 mr-lg-5"></img></Navbar.Brand></LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <br />
                    <Nav className="nav-element">
                        <LinkContainer exact to='/'><Nav.Link className="custom-navlink animate__animated animate__fadeIn animate__delay__2s"><span style={{ fontSize: "22px" }} className="text-uppercase mr-2">anasayfa</span></Nav.Link></LinkContainer>
                        <LinkContainer to='/projects'><Nav.Link className="custom-navlink animate__animated animate__fadeIn"><span style={{ fontSize: "22px" }} className="text-uppercase mr-2">projelerim</span></Nav.Link></LinkContainer>
                        <LinkContainer to='/certificates'><Nav.Link className="custom-navlink animate__animated animate__fadeIn"><span style={{ fontSize: "22px" }} className="text-uppercase mr-2">sertifikalarım</span></Nav.Link></LinkContainer>
                        <LinkContainer to='/about'><Nav.Link className="custom-navlink animate__animated animate__fadeIn"><span style={{ fontSize: "22px" }} className="text-uppercase mr-2">hakkımda</span></Nav.Link></LinkContainer>
                        <LinkContainer to='/contact/direct'><Nav.Link className="custom-navlink animate__animated animate__fadeIn"><span style={{ fontSize: "22px" }} className="text-uppercase mr-2">iletişim</span></Nav.Link></LinkContainer>
                    </Nav>
                    <Form className="mr-auto animate__animated animate__fadeIn"  onSubmit={this.handleSubmit} inline>
                        <FormControl size="lg" className="ml-lg-5" style={{width:"250px"}} value={this.state.value} onChange={this.handleChange} type="text" placeholder="Projelerde ara.." />
                        <Button size="lg" type="submit" className="ml-lg-1 ml-xs-3" variant="success"><MdSearch/></Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}

export default withRouter(Navigation)
