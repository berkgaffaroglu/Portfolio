import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'
export class Idle extends Component {
    render() {
        return (
            <div>
                <Alert variant="danger">
                    <Alert.Heading >Sorry! There was an error.</Alert.Heading>
                    <p>
                        Looks like the page that you are looking for either removed or doesn't exists.
        </p>
                </Alert>
            </div>
        )
    }
}

export default Idle
