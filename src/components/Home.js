import React from 'react'
import {DiStackoverflow} from 'react-icons/di'
import {FaGithub} from 'react-icons/fa'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {GrLinkedin,GrCircleInformation, GrDocumentUser} from 'react-icons/gr'
import {RiAccountPinCircleLine} from 'react-icons/ri' 

function Home() {
    return (
        <div className="parentComponent">
            <h3 className="text-black text-center" style={{ fontFamily: "Oswald" }}><GrCircleInformation/>  Information About Me</h3>
                <hr className="separator" />
            <div className="row mb-5 mt-5">

                
                <div className="col-lg-4 col-md-6 col-sm-12 mb-5">

                    <h4 className="text-black" style={{ fontFamily: "Oswald" }}>Who am I? </h4>
                    <p className="text-black">
                    My name is Berk Gaffaroğlu. I am a Full Stack Web Developer and studying Software Engineering at Uskudar University in Turkey. 
                    Currently, I am in my second year. I love solving technical problems that are relatively hard. 
                    I like to push myself out of my comfort zone, so most I spend most of my time learning new technologies and coding.
                </p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                    <h4 className="text-black" style={{ fontFamily: "Oswald" }}>What are my technical skills? </h4>
                    <p className="text-black">
                    Programming languages that I know are Python, Javascript. In the back-end, I am comfortable using Django and PostgreSQL. 
                    In front-end, I can use React. 
                    Also, I am familiar with Vue.js. I have started coding 6 years ago but not regularly. 
                    For the past 2.5 years, I am coding continuously. I can learn any web-framework, technology, or programming language quickly.

         </p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <h4 className="text-black" style={{ fontFamily: "Oswald" }}>What is my personality? </h4>
                    <p className="text-black">
                    I am a team player and leader. I am a confident person.
                     I can adapt to pretty much every working environment.
                     I can handle stressful situations.
                     I can be focused on a task for a long time.
                     I am a person who loves his character. 


                        
</p>
                </div>
            </div>
            <div className="resumeSection mt-5">
                <h3 className="text-black text-center" style={{ fontFamily: "Oswald" }}><GrDocumentUser/>  My Resume</h3>
                <hr className="separator" />
                <div className="row">
                    <div className="col">
                        <p className="text-black text-center">The resume is important for candidates who applied for jobs. You can download my resume just by clicking <a href="#">here</a>.</p>
                    </div>

                </div>
            </div>
            <div className="mediaAccounts mb-5 mt-5">
                <h3 className="text-black text-center" style={{ fontFamily: "Oswald" }}><RiAccountPinCircleLine/>  My Accounts</h3>
                <hr className="separator" />
                <div className="row text-center">
                    
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3">
                        <a className="btn btn-lg btn-outline-dark social-media-button" target="_blank" href="https://stackoverflow.com/users/story/12211188"><h3 style={{fontFamily:"Oswald"}}><DiStackoverflow /> Stackoverflow</h3></a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3">
                        <a className="btn btn-lg btn-outline-dark social-media-button" target="_blank" href="https://github.com/berkgaffaroglu"><h3 style={{fontFamily:"Oswald"}}><FaGithub /> Github</h3></a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3">
                        <a className="btn btn-lg btn-outline-dark social-media-button" target="_blank" href="#"><h3 style={{fontFamily:"Oswald"}}><AiFillTwitterSquare/> Twitter</h3></a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3">
                        <a className="btn btn-lg btn-outline-dark social-media-button" target="_blank" href="#"><h3 style={{fontFamily:"Oswald"}}><GrLinkedin/> Linkedin</h3></a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
