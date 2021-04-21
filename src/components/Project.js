import React, { Component } from 'react'
import { Card, ListGroupItem, ListGroup, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
class Project extends Component {
    constructor(props) {
        super(props)

        this.state = {
            websiteUrl: this.props.websiteUrl,
            url_detail: this.props.url_detail,
            url_image: this.props.url_image,
            project_title: this.props.project_title,
            project_description: this.props.project_description,
            project_backend_category: this.props.project_backend_category,
            project_frontend_category: this.props.project_frontend_category,


        }
    }
    createSearchLink(keyword){
        return this.state.websiteUrl + '/search/' + keyword + '?';      
    }
    render() {
        
        const {url_detail, url_image, project_title, project_description, project_backend_category, project_frontend_category } = this.state;
        return (
            <Card className="project-card text-center animate__animated animate__fadeIn">
                <LinkContainer to={url_detail}><Card.Img variant="top" className="project-card-image" src={url_image} /></LinkContainer>
                <Card.Body><Card.Title><LinkContainer to={url_detail}><h2 className="project-title" style={{ textTransform: "uppercase" }}>{project_title}</h2></LinkContainer><hr /></Card.Title>
                    <Card.Text><span ><strong>Açıklama:</strong> {project_description}</span></Card.Text>
                </Card.Body>

                <ListGroup className="list-group-flush">
                    <ListGroupItem >
                        <p>
                            <strong>Kullanılan Teknolojiler: </strong>
                            <a target="_blank" rel="noopener noreferrer" href={this.createSearchLink(project_backend_category)}>
                                {project_backend_category} 
                            </a>
                            {project_backend_category != null && project_frontend_category != null ? ' ve ' : ''}
                            <a target="_blank" rel="noopener noreferrer" href={this.createSearchLink(project_frontend_category)}>
                                 {project_frontend_category}
                            </a>
                        </p>
                    </ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <LinkContainer to={url_detail}>
                        <Button className="details-button" variant="success btn">
                            <h3 style={{ textTransform: "uppercase" }, { fontFamily: "Oswald" }}> DETAYLAR </h3>
                        </Button>
                    </LinkContainer>
                </Card.Body>
            </Card>
        )
    }
}


export default Project