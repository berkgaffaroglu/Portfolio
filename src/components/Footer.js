import React from 'react'
import {GiPowerLightning} from 'react-icons/gi'

function Footer() {
    return (

        <footer style={{backgroundColor:"#212121"}} className="footer fixed-bottom text-white text-center">
            <div>
                <span style={{ fontFamily: "Oswald" }}><GiPowerLightning/> Powered by <a style={{color:"#c2f2cf"}} href="https://www.django-rest-framework.org/" rel="noopener noreferrer" target="_blank">Django Rest API</a> & <a style={{color:"#c2f2cf"}} href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">React.js</a>
                </span>
            </div>
        </footer>

    )
}

export default Footer
