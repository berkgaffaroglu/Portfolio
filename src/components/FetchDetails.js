import React, { Component } from 'react'
import { withRouter, useLocation } from 'react-router-dom';
import { Carousel, CarouselItem, Alert } from 'react-bootstrap';
import CustomSpinner from './CustomSpinner';
import { TiCancel } from 'react-icons/ti'
import { AiOutlineLink } from 'react-icons/ai'
import { comaCreator, createSearchLink } from './Utils'
export class FetchDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            project: '',
            currentUrl: '',
            Render: false,
            live_version: false,
            github_repository: false,
            error: false

        }



    }

    componentWillMount() {
        this.fetchDetails(window.location.pathname)

    }

    createSearchLink(keyword) {
        return this.state.websiteUrl + '/search/' + keyword + '?';
    }

    async fetchDetails(path) {
        try {
            var projectResponse = await (fetch(`${this.props.websiteUrl}/api${path}`))
            var data = await projectResponse.json()
            if (projectResponse.status != 500) {
                this.setState({
                    project: data,
                    Render: true
                })
            }
        } catch {
            this.setState({
                error: true
            })
        }


    }
    render() {
        var websiteUrl = this.props.websiteUrl

        function urlImage(imageUrl) {
            imageUrl = imageUrl.split(websiteUrl)[1]
            return (`${websiteUrl}/api${imageUrl}`)
        }
        var Project = this.state.project


        if (this.state.Render) {
            const { frontend_category, backend_category, image, title, content, live_server, github_repository } = Project[0]
            /* Mapping the extra images in the project for the carousel.*/
            var projectImageArray = this.state.project[1]
            if (projectImageArray) {
                const images = projectImageArray.map((project, index) =>

                    <CarouselItem key={index}>
                        <img className="project-detail-img" src={urlImage(project.image)} alt="-" />
                    </CarouselItem>
                );
                return (
                    <div>

                        <center>
                            <Carousel className="project-detail-wrapper bg-dark text-white p-3">

                                <CarouselItem>
                                    <img className="project-detail-img" src={urlImage(image)} />
                                </CarouselItem>
                                {images}

                            </Carousel>
                        </center>

                        <div className="jumbotron jumbotron-fluid text-black" style={{ backgroundColor: "white" }}>

                            <h1 className="display-4 ml-4" style={{ textTransform: "uppercase" }}>
                                <strong>
                                    {title}
                                </strong>
                            </h1>

                            <hr />
                            
                            <h3 className="lead ml-4" >
                                <p className="details-header">
                                    <b>Proje İçeriği: </b>
                                </p>
                                {content}
                            </h3>

                            <h3 class="lead ml-4">
                                <p className="details-header">
                                    <b>Kullanılan Teknolojiler: </b>
                                </p>
                                <a target="_blank" rel="noopener noreferrer" href={createSearchLink(websiteUrl, backend_category)}>
                                    {backend_category}</a>
                                {comaCreator(backend_category, frontend_category)}
                                <a target="_blank" rel="noopener noreferrer" href={createSearchLink(websiteUrl, frontend_category)}>
                                    {frontend_category}
                                </a>
                            </h3>

                            <h3 class="lead ml-4"><p className="details-header"><b>Site: </b></p>

                                {live_server != null
                                    ?
                                    <a target="_blank" rel="noopener noreferrer" href={live_server}><span className="text-danger"><AiOutlineLink/> Siteye Git</span></a>
                                    :
                                    <span><TiCancel /> Yok</span>
                                }
                            </h3>
                            <h3 class="lead ml-4">
                                <p className="details-header"><b>Kod: </b></p>
                                {github_repository != null
                                    ?
                                    <a className="" target="_blank" rel="noopener noreferrer" href={github_repository}><span className="text-danger"><AiOutlineLink/> Kodu Gör</span></a>
                                    :
                                    <p><TiCancel /> Yok</p>
                                }
                            </h3>
                        </div>
                    </div>
                )
            }

        }
        else if (!this.state.Render && !this.state.error) {
            return (<CustomSpinner />)
        }
        else {
            return (
                <Alert variant="danger">
                    <Alert.Heading >Burada birşey yok gibi..</Alert.Heading>
                    <p>
                        Görünüşe göre aramanızla ilgili herhangi bir sonuç bulunamadı.
                    </p>
                </Alert>
            )
        }


    }
}

export default withRouter(FetchDetails)
