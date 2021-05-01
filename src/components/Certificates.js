import React, { Component } from 'react'
import CustomSpinner from './CustomSpinner'
import { Carousel } from 'react-bootstrap'
import {AiOutlineSafetyCertificate} from 'react-icons/ai'
import {MdStars} from 'react-icons/md'
export class Certificate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: '',
            Render: false
        }
        this.fetchImages = this.fetchImages.bind(this)
    }

    componentWillMount() {
        this.fetchImages()
    }

    async fetchImages() {
        var generalInfoResponse = await (fetch(`${this.props.websiteUrl}/api/general-information/`))
        var data = await generalInfoResponse.json()
        this.setState({
            data: data,
            Render: true
        })


    }
    urlImage(imageUrl) {
        var imageUrl = imageUrl.split(this.props.websiteUrl)[1]
        return (`${this.props.websiteUrl}/api` + imageUrl)
    }
    render() {

        if (this.state.Render) {
            const images_array = this.state.data[1]
            if (images_array) {

                const images = images_array.map((img, index) =>

                    < Carousel.Item key={index} >
                        <center>
                        <img className="d-block w-75" src={this.urlImage(img.image)} ></img>
                        </center>
                    </Carousel.Item >
                );



                return (
                    <>
                    <h3 className="text-black text-center" style={{ fontFamily: "Oswald" }, { textTransform: 'uppercase' }}><strong> <AiOutlineSafetyCertificate />  kazandığım sertifikalar</strong></h3>
                    <hr className="separator" />
                    <div className="certificates p-5 m-5 bg-dark">
                    <Carousel variant="dark" className="certificates_slider carousel-dark slides animate__animated animate__fadeIn">
                        {images}
                    </Carousel>
                   </div>
                   
                   <p className="text-center mb-5" style={{fontSize:"20px"}}><MdStars/> <a href="https://www.upwork.com/" rel="noopener noreferrer" target="_blank"><strong className="text-success">Upwork</strong></a> sitesi bir uzaktan çalışma servisidir. Gördüğünüz sertifika ise kesin kazanç göstergesidir. Verdiğim yazılım hizmeti karşılığında <strong>120$</strong> kazandığımı göstermektedir. <a href="https://www.udemy.com/" rel="noopener noreferrer" target="_blank"><strong className="text-danger">Udemy</strong></a> sertifikalarıysa tamamladığım kursların göstergesidir.</p>
                    
                    </>

                )
            } else {
                return "Bulunamadı";
            }



        } else {
            return <CustomSpinner />
        }
    }
}

export default Certificate