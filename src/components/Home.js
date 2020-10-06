import React, { Component } from 'react'
import { DiStackoverflow } from 'react-icons/di'
import { FaGithub } from 'react-icons/fa'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { GrLinkedin, GrCircleInformation, GrDocumentUser } from 'react-icons/gr'
import { RiAccountPinCircleLine } from 'react-icons/ri'
import CustomSpinner from './CustomSpinner'

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: '',
            Render: false
        }
    }

    componentWillMount() {
        this.fetchGeneralInformation()
    }

    async fetchGeneralInformation() {
        var generalInfoResponse = await (fetch(`${this.props.websiteUrl}/api/general-information/`))
        var data = await generalInfoResponse.json()
        this.setState({
            data: data,
            Render: true
        })

    }

    render() {

        if (this.state.Render) {
            return (

                <div className="parentComponent">

                    <h3 className="text-black text-center" style={{ fontFamily: "Oswald" }}><GrCircleInformation />  Information About Me</h3>
                    <hr className="separator" />
                    <div className="row mb-5 mt-5">

                        <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                            {this.state.who_am_i}
                            <h4 className="text-black" style={{ fontFamily: "Oswald" }}>Who am I? </h4>
                            <p className="text-black">
                                {this.state.data[0].who_am_i}
                </p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                            <h4 className="text-black" style={{ fontFamily: "Oswald" }}>What are my technical skills? </h4>
                            <p className="text-black">
                            {this.state.data[0].what_are_my_technical_skills}

         </p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <h4 className="text-black" style={{ fontFamily: "Oswald" }}>What is my personality? </h4>
                            <p className="text-black">
                            {this.state.data[0].what_is_my_personality}
        </p>
                        </div>
                    </div>
                    <div className="resumeSection mt-5">
                        <h3 className="text-black text-center" style={{ fontFamily: "Oswald" }}><GrDocumentUser />  My Resume</h3>
                        <hr className="separator" />
                        <div className="row">
                            <div className="col">
                                <p className="text-black text-center">The resume is important for candidates who applied for jobs. You can download my resume just by clicking <a href="#">here</a>.</p>
                            </div>

                        </div>
                    </div>
                    <div className="mediaAccounts mb-5 mt-5">
                        <h3 className="text-black text-center" style={{ fontFamily: "Oswald" }}><RiAccountPinCircleLine />  My Accounts</h3>
                        <hr className="separator" />
                        <div className="row text-center">

                            <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3">
                                <a className="btn btn-lg btn-outline-dark social-media-button" target="_blank" rel="noopener noreferrer" href={this.state.data[0].stackoverflow_link}><h3 style={{ fontFamily: "Oswald" }}><DiStackoverflow /> Stackoverflow</h3></a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3">
                                <a className="btn btn-lg btn-outline-dark social-media-button" target="_blank" rel="noopener noreferrer" href={this.state.data[0].github_link}><h3 style={{ fontFamily: "Oswald" }}><FaGithub /> Github</h3></a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3">
                                <a className="btn btn-lg btn-outline-dark social-media-button" target="_blank" rel="noopener noreferrer" href={this.state.data[0].twitter}><h3 style={{ fontFamily: "Oswald" }}><AiFillTwitterSquare /> Twitter</h3></a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3">
                                <a className="btn btn-lg btn-outline-dark social-media-button" target="_blank" rel="noopener noreferrer" href={this.state.data[0].linkedin}><h3 style={{ fontFamily: "Oswald" }}><GrLinkedin /> Linkedin</h3></a>
                            </div>

                        </div>
                    </div>
                </div>
            )
        }
        else { return (<CustomSpinner />) }
    }
}

export default Home
