import React, { Component } from 'react'
import { Form, Button, Alert, OverlayTrigger, Tooltip, Image } from 'react-bootstrap'
import {AiFillStar} from 'react-icons/ai'
export class ContactDirect extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasErrors: false,
            showMessage: false,
            activeContact: {
                title: '',
                content: '',
                company_name: '',
                e_mail: '',
                skype: '',
            },
        }
        this.getCookie = this.getCookie.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        if (e.target.id === 'title') {
            this.setState({
                activeContact: {
                    ...this.state.activeContact,
                    title: e.target.value
                }
            });

        } else if (e.target.id === 'content') {
            this.setState({
                activeContact: {
                    ...this.state.activeContact,
                    content: e.target.value
                }
            });

        } else if (e.target.id === 'company_name') {
            this.setState({
                activeContact: {
                    ...this.state.activeContact,
                    company_name: e.target.value
                }
            });

        } else if (e.target.id === 'e_mail') {
            this.setState({
                activeContact: {
                    ...this.state.activeContact,
                    e_mail: e.target.value
                }
            });

        } else if (e.target.id === 'skype') {
            this.setState({
                activeContact: {
                    ...this.state.activeContact,
                    skype: e.target.value,
                }
            });

        }
    }

    handleSubmit(event) {
        if (this.state.activeContact.title != "" && this.state.activeContact.content != "" && this.state.activeContact.e_mail != "") {
            var csrftoken = this.getCookie('csrftoken')
            fetch("http://berkgaffaroglu.com/api/contact/", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'X-CSRFToken': csrftoken,
                },
                body: JSON.stringify(this.state.activeContact)
            })
                .then(
                    this.setState({
                        showMessage: true,
                        hasErrors: false,
                    })
                )
                .then(
                    this.setState({
                        activeContact: {
                            title: '',
                            content: '',
                            company_name: '',
                            e_mail: '',
                            skype: '',
                        }
                    })
                )
        } else {
            this.setState({
                hasErrors: true,
                showMessage: false,
            })
        }
        event.preventDefault()
    }

    getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    render() {
        const overlayInfo = (
            <span className="text-danger" style={{fontSize:"15px"}}> (<AiFillStar/>)</span>
        )

        if (this.state.showMessage) {
            var message = <Alert className="alert alert-success"><Alert.Heading ><span style={{fontFamily:"Oswald"}}>Your message sent!</span> </Alert.Heading><p style={{fontFamily:"Raleway"}}>This message sent to my admin page which I regularly check. 
                If you want a faster response please use my e-mail <a href="mailto:berk.gaffaroglu@gmail.com">berk.gaffaroglu.gmail.com</a> I will try to return to your message as soon as possible.</p></Alert>
        }
        if (this.state.hasErrors) {
            var message = <Alert className="alert alert-danger">
                <Alert.Heading>Your message couldn't send</Alert.Heading>
                <p>Please fill the areas that are required.</p>
            </Alert>
        }
        return (
            <React.Fragment>
                {message}
                < Form onSubmit={this.handleSubmit} id="form" >
                    <Form.Group>
                        <Form.Label>Title {overlayInfo}</Form.Label>
                        <Form.Control id="title" onChange={this.handleChange} type="text" value={this.state.activeContact.title} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Content {overlayInfo}</Form.Label>
                        <Form.Control id="content" as="textarea" onChange={this.handleChange} value={this.state.activeContact.content} rows="3" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>E- mail {overlayInfo}</Form.Label>
                        <Form.Control id="e_mail" type="text" onChange={this.handleChange} value={this.state.activeContact.e_mail} rows="3" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control id="company_name" type="text" onChange={this.handleChange} value={this.state.activeContact.company_name} rows="3" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Skype</Form.Label>
                        <Form.Control id="skype" type="text" onChange={this.handleChange} value={this.state.activeContact.skype} rows="3" />
                    </Form.Group>
                    <ul>
                        <li key="987979472"><Form.Group><p className="text-muted">Please fill the required fields that have the symbol  <span className="text-danger" style={{fontSize:"15px"}}>(<AiFillStar/>)</span></p></Form.Group></li>
                    </ul>
                    <Form.Group>

                        <button type="submit" className="btn btn-lg btn-success">Send</button>
                    </Form.Group>

                </Form >
            </React.Fragment>
        )
    }
}

export default ContactDirect
