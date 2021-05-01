import React, { Component } from 'react';
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import CustomSpinner from './CustomSpinner';
class About extends Component {
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
        this.setState({
            data: data,
            Render: true
        })


    }

    render() {
        
        if (this.state.Render) {
            var data = this.state.data[0][0]
            return (
                <>
                    <h3 className="text-black text-center" style={{ textTransform: 'uppercase' }}><strong><AiOutlineQuestionCircle /> hakkımda</strong></h3>
                    <hr className="separator" />
                    <div className="row text-center">

                        <div className="col-lg-4 col-md-6 col-sm-12 mb-5">

                            <h4 className="information-header">{data.first_section_header}</h4>
                            <p className="information-description">
                                {data.first_section_description}
                            </p>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                            <h4 className="information-header">{data.second_section_header}</h4>
                            <p className="information-description">
                                {data.second_section_description}
                            </p>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                            <h4 className="information-header">{data.third_section_header}</h4>
                            <p className="information-description">
                                {data.third_section_description}
                            </p>
                        </div>


                    </div>
                </>
            );
        } else {
            return <CustomSpinner />
        }
    }
}

export default About;