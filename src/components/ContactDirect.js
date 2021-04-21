import React, { Component } from 'react'
import { Form, Alert } from 'react-bootstrap'
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
            fetch(`${this.props.websiteUrl}/api/contact/`, {
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
            var message = <Alert className="alert alert-success"><Alert.Heading ><span>Mesajınız gönderildi!</span> </Alert.Heading><p>Eğer daha hızlı cevap almak istiyorsanız <a href="mailto:berkgaffaroglu@gmail.com">berkgaffaroglu@gmail.com</a> adresine e-mail atabilirsiniz.</p></Alert>
        }
        if (this.state.hasErrors) {
            var message = <Alert className="alert alert-danger">
                <Alert.Heading>Mesajınız gönderilemedi.</Alert.Heading>
                <p>Lütfen gerekli tüm alanları doldurun.</p>
            </Alert>
        }
        return (
            <>
  
                {message}
                <div class="row">
                    <div class="col-12">
                < Form size="lg" onSubmit={this.handleSubmit} id="form" >
                    <Form.Group>
                        <Form.Label>Mesaj Başlığı {overlayInfo}</Form.Label>
                        <Form.Control id="title" onChange={this.handleChange} type="text" value={this.state.activeContact.title} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Mesaj İçeriği {overlayInfo}</Form.Label>
                        <Form.Control id="content" as="textarea" onChange={this.handleChange} value={this.state.activeContact.content} rows="3" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>E-mail'iniz {overlayInfo}</Form.Label>
                        <Form.Control id="e_mail" type="text" onChange={this.handleChange} value={this.state.activeContact.e_mail} rows="3" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Şirket Adı</Form.Label>
                        <Form.Control id="company_name" type="text" onChange={this.handleChange} value={this.state.activeContact.company_name} rows="3" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Skype</Form.Label>
                        <Form.Control id="skype" type="text" onChange={this.handleChange} value={this.state.activeContact.skype} rows="3" />
                    </Form.Group>
                    <ul>
                        <li key="987979472"><Form.Group><p className="text-muted">Lütfen  <span className="text-danger" style={{fontSize:"15px"}}>(<AiFillStar/>)</span> ile işaretlenmiş tüm alanları doldurun.</p></Form.Group></li>
                    </ul>
                    <Form.Group>

                        <button type="submit" className="btn btn-lg btn-success">Gönder</button>
                    </Form.Group>

                </Form >
                </div>
            </div>
            </>
        )
    }
}

export default ContactDirect
