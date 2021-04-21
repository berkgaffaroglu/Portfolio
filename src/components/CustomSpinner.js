import React from 'react'
import { Spinner } from 'react-bootstrap'
function CustomSpinner() {
    return (

        <div className="text-center" style={{ marginTop: "25%" }}>
            <Spinner animation="grow" size="lg" variant="success">
                <span className="sr-only">Yükleniyor...</span>
            </Spinner>
        </div>
    )
}

export default CustomSpinner
