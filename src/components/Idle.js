import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'
export class Idle extends Component {
    render() {
        return (
            <div>
                <Alert variant="danger">
                    <Alert.Heading >Aradığınız sayfa bulunamadı.</Alert.Heading>
                    <p>
                        Görünüşe göre aradığınız sayfa bu sitede yok.
        </p>
                </Alert>
            </div>
        )
    }
}

export default Idle
