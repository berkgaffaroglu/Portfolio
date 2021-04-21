import React, { Component } from 'react'
import {Alert} from 'react-bootstrap'
import Project from './Project'
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

  async fetchAllProjects() {
    var current_location = this.props.location.pathname
    var projectResponse = await (fetch(`${this.props.websiteUrl}/api${current_location}`))
    var data = await projectResponse.json()
    this.setState({
      projectList: data,
      Render: true
    })
  }



  render() {
    var projects = this.state.projectList
    const websiteUrl = this.props.websiteUrl
    if (this.state.Render) {
      if (projects.length != 0) {

        return (
          <React.Fragment>
            <Alert variant="success animate__animated animate__pulse">
              <Alert.Heading><span>Aramanız için {projects.length} sonuç bulundu.</span></Alert.Heading>
              <p>
                Proje ismi, önyüz ve arkayüz teknolojileri bakımından arama yapabilirsiniz.
              </p>
            </Alert>
            <div className="row" style={{ marginBottom: "200px" }}>

              {projects.map((project, index) => {
                function urlImage(imageUrl) {
                  return (`${websiteUrl}/api` + imageUrl)
                }
                function urlDetail(detailUrl) {
                  return ("/project-detail/" + detailUrl)
                }
                return (
                  <div key={index} className="col-lg-4 col-md-6 col-sm-11 col-xs-12 mt-4">
                    <Project
                      websiteUrl={websiteUrl}
                      url_detail={urlDetail(project.slug)}
                      url_image={urlImage(project.image)}
                      project_title={project.title}
                      project_description={project.description}
                      project_backend_category={project.backend_category}
                      project_frontend_category={project.frontend_category}
                    />
                  </div>
                )
              })}
            </div>
          </React.Fragment>
        )
      } else {
        return (
          <Alert variant="danger animate__animated animate__shakeX">
            <Alert.Heading ><span>Sonuç bulunamadı.</span></Alert.Heading>
            <p>
              Görünüşe göre aramanızla ilgili herhangi bir sonuç bulunamadı.
        </p>
          </Alert>
        )
      }
    } else {
      return (
        <CustomSpinner />
      )
    }
  }

}

export default withRouter(FetchAll)
