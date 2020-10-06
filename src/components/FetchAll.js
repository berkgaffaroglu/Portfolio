import React, { Component } from 'react'
import { Card, ListGroupItem, ListGroup, Button, Spinner } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { AiOutlineProject } from 'react-icons/ai'
import CustomSpinner from './CustomSpinner'

export class FetchAll extends Component {
  constructor(props) {
    super(props)

    this.state = {
      projectList: [],
      Render: false,

    }
    this.fetchAllProjects = this.fetchAllProjects.bind(this)
  }
  componentWillMount() {
    this.fetchAllProjects()
  }

  async fetchAllProjects() {
      var projectResponse = await(fetch(`${this.props.websiteUrl}/api/project-list/`))
      var data = await projectResponse.json()
      this.setState({
        projectList: data,
        Render:true
      })
  }



  render() {
    var projects = this.state.projectList
    const websiteUrl = this.props.websiteUrl
    if (this.state.Render) {
      return (
        <React.Fragment>
          <h3 className="text-black text-center" style={{ fontFamily: "Oswald" }, { textTransform: 'uppercase' }}><strong> <AiOutlineProject />  Projects</strong></h3>
          <hr className="separator" />
          <div className="row" style={{ marginBottom: "200px" }}>

            {projects.map(function (project, index) {
              function urlImage(imageUrl) {
                return (`${websiteUrl}/api` + imageUrl)
              }
              function urlDetail(detailUrl) {
                return ("/project-detail/" + detailUrl)
              }
              return (
                <div key={index} className="col-lg-4 col-md-6 col-sm-11 col-xs-12 mt-4">
                  <Card  className="project-card text-center">
                    <LinkContainer to={urlDetail(project.slug)}><Card.Img variant="top" className="project-card-image" src={urlImage(project.image)} /></LinkContainer>
                    <Card.Body><Card.Title><LinkContainer to={urlDetail(project.slug)}><h2 className="project-title" style={{ textTransform: "uppercase" }, { fontFamily: "Raleway" }}>{project.title}</h2></LinkContainer><hr style={{ border: "1px solid #cccccc" }} /></Card.Title>
                      <Card.Text><span style={{ fontFamily: "Raleway" }}>{project.description}</span></Card.Text>
                    </Card.Body>

                    <ListGroup className="list-group-flush"><ListGroupItem ><p style={{ fontFamily: "Raleway" }}>Technologies used: {project.backend_category} {project.backend_category != null && project.frontend_category != null ? ',' : ''} {project.frontend_category}</p></ListGroupItem></ListGroup>
                    <Card.Body><LinkContainer to={urlDetail(project.slug)}><Button className="details-button" variant="success btn"> <h3 style={{ textTransform: "uppercase" }, { fontFamily: "Oswald" }}> DETAILS </h3> </Button></LinkContainer></Card.Body>
                  </Card>
                </div>
              )
            })}
          </div>

        </React.Fragment>
      )
    } else {
      return (
        <CustomSpinner />
      )
    }
  }

}

export default FetchAll
