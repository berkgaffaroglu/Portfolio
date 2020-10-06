import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import ContactDirect from './ContactDirect'
import { GrContact } from 'react-icons/gr'
import { MdEmail } from 'react-icons/md'
import { RiInformationLine } from 'react-icons/ri'
import {IoMdContact} from 'react-icons/io'

class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showMessage: false,
            content: <ContactDirect websiteUrl={this.props.websiteUrl} />,

        }

    }



    render() {
        const handleSelect = (eventKey) => {
            if (eventKey == 0) {
                this.setState({
                    content: <ContactDirect websiteUrl={this.props.websiteUrl}/>
                })
            } else if (eventKey == 1) {
                this.setState({
                    content:
                        <center>
                            <div className="row" style={{ marginTop: "30px" }}>
                                <div className="col-md-6 mt-3 mb-3">
                                    <h1><MdEmail /></h1>
                                    <p>berk.gaffaroglu@gmail.com</p>
                                </div>
                            </div>
                        </center>
                })
            }
        };

        return (
            <React.Fragment>
                <h3 className="text-black text-center" style={{ fontFamily: "Oswald" } , { textTransform: 'uppercase' }}><strong> <IoMdContact />  Contact</strong></h3>
                <hr className="separator" />
                <Nav variant="tabs" onSelect={handleSelect} defaultActiveKey='/contact/direct'>

                    <Nav.Item>
                        <LinkContainer exact to="/contact/direct"><Nav.Link eventKey="0" ><GrContact /> <span style={{ fontFamily: "Raleway" }}>Direct</span></Nav.Link></LinkContainer>
                    </Nav.Item>
                    <Nav.Item>
                        <LinkContainer exact to="/contact/information"><Nav.Link eventKey="1"><RiInformationLine /> <span style={{ fontFamily: "Raleway" }}>Information</span></Nav.Link></LinkContainer>
                    </Nav.Item>

                </Nav>

                <div className="container mt-3" style={{ marginBottom: "200px" }} >
                    {this.state.content}
                </div>

            </React.Fragment>
        )
    }
} export default Contact
