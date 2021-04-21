import React, { Component } from 'react'
import { AiOutlineProject } from 'react-icons/ai'
import CustomSpinner from './CustomSpinner'
import Project from './Project'

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
    var projectResponse = await (fetch(`${this.props.websiteUrl}/api/project-list/`))
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
      return (
        <React.Fragment>
          <h3 className="text-black text-center" style={{ fontFamily: "Oswald" }, { textTransform: 'uppercase' }}><strong> <AiOutlineProject />  geliştirdiğim projeler</strong></h3>
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
        <CustomSpinner />
      )
    }
  }

}

export default FetchAll
