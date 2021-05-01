import React, { Component } from 'react'
import { DiStackoverflow } from 'react-icons/di'
import { FaGithub } from 'react-icons/fa'
import { GrLinkedin, GrCircleInformation, GrDocumentUser } from 'react-icons/gr'
import { RiAccountPinCircleLine } from 'react-icons/ri'
import CustomSpinner from './CustomSpinner'
import { AiOutlineProject } from 'react-icons/ai'
import Project from './Project'
import first from "../images/sliders/1.png"
import second from "../images/sliders/2.png"
import third from "../images/sliders/3.png"
import fourth from "../images/sliders/4.png"
import fifth from "../images/sliders/5.png"
import linkedin from "../LinkedIn.png"
import github from "../git.png"
import stackoverflow from "../stackoverflow.png"
import resume from "../resume.png"
import { Carousel } from 'react-bootstrap'
import Certificate from './Certificates'
import Resume from './Resume'
import About from './About'

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: '',
            Render: false
        }
        this.fetchAll = this.fetchAll.bind(this)
    }

    componentWillMount() {
        this.fetchAll()
    }

    async fetchAll() {
        var generalInfoResponse = await (fetch(`${this.props.websiteUrl}/api/general-information/`))
        var data = await generalInfoResponse.json()
        var projectResponse = await (fetch(`${this.props.websiteUrl}/api/project-list/`))
        var projectList = await projectResponse.json()
        this.setState({
            data: data,
            projectList: projectList,
            Render: true
        })


    }

    render() {
        var projects = this.state.projectList
        const websiteUrl = this.props.websiteUrl
        
        if (this.state.Render) {
            var data = this.state.data[0][0]

            return (
                <div className="text-dark text-center" style={{ backgroundColor: "white" }}>
                    <Carousel className="mb-5 slides animate__animated animate__fadeIn">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={first}
                                alt="First"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <a href="http://memorychallange.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                                <img
                                    className="d-block w-100"
                                    src={second}
                                    alt="Memorychallange"
                                />
                            </a>
                        </Carousel.Item>
                        <Carousel.Item>
                            <a href="https://github.com/berkgaffaroglu/portfolio" rel="noopener noreferrer" target="_blank">
                                <img
                                    className="d-block w-100"
                                    src={third}
                                    alt="Portfolio"
                                />
                            </a>
                        </Carousel.Item>
                        <Carousel.Item>
                            <a href="http://nasaapiproject.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                                <img
                                    className="d-block w-100"
                                    src={fourth}
                                    alt="Nasa API Project"
                                />
                            </a>
                        </Carousel.Item>
                        <Carousel.Item>
                            <a href="http://ebayscraperapp.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                                <img
                                    className="d-block w-100"
                                    src={fifth}
                                    alt="Ebayscraperapp"
                                />
                            </a>
                        </Carousel.Item>
                    </Carousel>
                    <div className="whoami animate__animated animate__fadeInUp mt-5">
                        <About websiteUrl={websiteUrl}/>
                    </div>
                    <div className="resumeSection animate__animated animate__fadeInUp">
                    
                        <Resume />

                    </div>
                    <div className="mediaAccounts animate__animated animate__fadeInUp mb-5 mt-5 animate__delay-1s">
                        <h3 className="text-center text-uppercase"><RiAccountPinCircleLine /> <strong>hesaplarım</strong></h3>
                        <hr className="separator" />
                        <div className="row text-center">

                            <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3">
                                <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-light">
                                    <img src={linkedin} className="img-fluid social-media-button" />
                                </a>

                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3">
                                <a href={data.github_link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
                                    <img src={github} className="img-fluid social-media-button" />
                                </a>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3">
                                <a href={data.stackoverflow_link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
                                    <img src={stackoverflow} className="img-fluid social-media-button" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="certificates animate__animated animate__fadeInUp mb-5 mt-5 animate__delay-1s">
                    <Certificate websiteUrl={websiteUrl}/>
                    </div>
                    <div className="projects_developed animate__animated animate__fadeInUp animate__delay-1s">
                        <h3 className="text-black text-center mt-5" style={{ textTransform: 'uppercase' }}><strong> <AiOutlineProject /> geliştirdiğim projeler neler?</strong></h3>
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


                    </div>


                </div>
            )
        }
        else { return (<CustomSpinner />) }
    }
}

export default Home
