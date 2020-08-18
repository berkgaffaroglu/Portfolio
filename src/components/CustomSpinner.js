import React from 'react'
import {Spinner} from 'react-bootstrap'
function CustomSpinner() {
    return (
        <div className="text-center" style={{marginTop:"25%"}}>
            <Spinner animation="grow" variant="success">
              <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    )
}

export default CustomSpinner
