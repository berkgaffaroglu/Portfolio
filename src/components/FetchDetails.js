import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Carousel, CarouselItem, Spinner, Alert } from 'react-bootstrap';
import CustomSpinner from './CustomSpinner';
import {TiCancel} from 'react-icons/ti'
export class FetchDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            project: '',
            currentUrl: '',
            Render: false,
            live_version: false,
            github_repository: false,
        }
    }

    componentWillMount() {
        this.fetchDetails(this.props.location.pathname)

    }

    fetchDetails(path) {
        fetch(`http://localhost:8000/api${path}`)
            .then(response => response.json())
            .then(setTimeout(() => {
                this.setState({
                    Render: true,
                })
            }, 500))
            .then(data =>
                this.setState({
                    project: data
                })
            )

    }
    render() {

        /* In here, Django's ImageField doesn't work and I manipulate strings to get the images from the api.*/
        function urlImage(imageUrl) {
            imageUrl = imageUrl.split('http://localhost:8000/')[1]
            return (`http://localhost:8000/api/${imageUrl}`)
        }
        var Project = this.state.project
        if (this.state.Render) {
            /* Mapping the extra images in the project for the carousel.*/
            var projectImageArray = this.state.project[1]
            if (projectImageArray) {
                const images = projectImageArray.map((project, index) =>

                    <CarouselItem key={index}>
                        <img className="project-detail-img" src={urlImage(project.image)} alt="Third slide" />
                    </CarouselItem>
                );
                return (
                    <div>

                        <center>
                            <Carousel className="bg-dark text-white p-3">

                                <CarouselItem>
                                    <img className="project-detail-img" src={urlImage(Project[0].image)} alt="Third slide" />
                                </CarouselItem>
                                {images}

                            </Carousel>
                        </center>

                        <div class="jumbotron jumbotron-fluid text-black" style={{backgroundColor:"#fcfcfc"}}>
                            <strong><h1 className="display-4 ml-4" style={{ textTransform: "uppercase" }}>{Project[0].title}</h1></strong>
                            <hr className="my-4 separator" />
                            <h3 className="lead ml-4" ><p className="text-danger" style={{ fontFamily: "Oswald" }}><b>Content:</b></p>{Project[0].content}</h3>
                            <hr className="my-4 separator" />
                            <h3 class="lead ml-4"><p className="text-danger" style={{ fontFamily: "Oswald" }}><b>Technologies Used:</b></p> {Project[0].backend_category}, {Project[0].frontend_category}</h3>
                            <hr className="my-4 separator" />





                            <h3 class="lead ml-4"><p className="text-danger" style={{ fontFamily: "Oswald" }}><b>Live Version</b></p> 
                            {Project[0].live_server != null ? <a href={Project[0].live_server}>Click here for the live version</a> : <p><TiCancel/> No</p>}
                            
                            
                            
                            </h3>






                            <hr className="my-4 separator" />
                            <h3 class="lead ml-4">
                                
                                <p className="text-danger" style={{ fontFamily: "Oswald" }}><b>Open Source</b></p>
                                {Project[0].live_server != null ? <a href={Project[0].live_server}>Click here for the code</a> : <p><TiCancel/> No</p>}
                            </h3>

                        </div>
                    </div>

                )
            } else {
                return (
                    <Alert variant="danger">
                        <Alert.Heading >Couldn't find anything!</Alert.Heading>
                        <p>
                            Looks like there are no project related to your search. Please try to search another title.
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

export default withRouter(FetchDetails)
