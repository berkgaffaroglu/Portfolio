import React, { Component } from 'react'
import { Card, ListGroupItem, ListGroup, Spinner, Alert, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { withRouter } from 'react-router-dom'
import CustomSpinner from './CustomSpinner'
export class FetchAll extends Component {
  constructor(props) {
    super(props)

    this.state = {
      projectList: [],
      current_location: '',
      Render: false,


    }
    this.fetchAllProjects = this.fetchAllProjects.bind(this)

  }
  componentWillMount() {
    this.fetchAllProjects()
  }

  fetchAllProjects() {
    var current_location = this.props.location.pathname
    fetch(`http://localhost:8000/api${current_location}`)
      .then(response => response.json())
      .then(setTimeout(() => {
        this.setState({
          Render: true,
        })
      }, 500))
      .then(data =>
        this.setState({
          projectList: data
        })
      )
  }



  render() {
    var projects = this.state.projectList
    if (this.state.Render) {
      if (projects.length != 0) {
        return (
          <React.Fragment>
            <Alert variant="success">
              <Alert.Heading><span style={{fontFamily:"Raleway"}}>There are {projects.length} results for your search. </span></Alert.Heading>
              <p style={{fontFamily:"Raleway"}}>
              You can search by title, back-end or front-end technology.
              </p>
            </Alert>
            <div className="row" style={{ marginBottom: "200px" }}>

              {projects.map(function (project, index) {
                function urlImage(imageUrl) {
                  return ("http://localhost:8000/api" + imageUrl)
                }
                function urlDetail(detailUrl) {
                  return ("/project-detail/" + detailUrl)
                }
                return (
                  <div className="col-lg-4 col-md-6 col-sm-11 col-xs-12 mt-4">
                  <Card key={index} className="project-card text-center">
                    <LinkContainer to={urlDetail(project.slug)}><Card.Img variant="top" className="project-card-image" src={urlImage(project.image)} /></LinkContainer>
                    <Card.Body><Card.Title><h2 style={{textTransform:"uppercase"},{fontFamily:"Raleway"}}>{project.title}</h2> <hr style={{border:"1px solid #cccccc"}}/></Card.Title>
                    <Card.Text><p style={{fontFamily:"Raleway"}}>{project.description}</p></Card.Text>
                    </Card.Body>
                    
                    <ListGroup className="list-group-flush"><ListGroupItem ><p style={{fontFamily:"Raleway"}}>Technologies used: {project.backend_category}, {project.frontend_category}</p></ListGroupItem></ListGroup>
                    <Card.Body><LinkContainer to={urlDetail(project.slug)}><Button className="details-button" variant="success btn"> <h3 style={{textTransform:"uppercase"},{fontFamily:"Oswald"}}> DETAILS </h3> </Button></LinkContainer></Card.Body>
                  </Card>
                </div>
                )
              })}
            </div>
          </React.Fragment>
        )
      } else {
        return (
          <Alert variant="danger">
            <Alert.Heading ><span style={{fontFamily:"Raleway"}}>Couldn't find anything!</span></Alert.Heading>
            <p style={{fontFamily:"Raleway"}}>
              Looks like there is no project with that title. Please try to search another title.
        </p>
          </Alert>
        )
      }
    } else {
      return (
        <CustomSpinner/>
      )
    }
  }

}

export default withRouter(FetchAll)
