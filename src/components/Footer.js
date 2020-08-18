import React from 'react'
import {GiPowerLightning} from 'react-icons/gi'

function Footer() {
    return (

        <footer className="footer fixed-bottom bg-dark text-white text-center p-2">
            <div>
                <strong  style={{ fontFamily: "Pangolin" }} className="text-success"><GiPowerLightning/> Powered by <a style={{color:"white"}} href="https://www.django-rest-framework.org/" target="_blank">Django Rest API</a> & <a style={{color:"white"}} href="https://reactjs.org/" target="_blank">React.js</a></strong>
            </div>
        </footer>

    )
}

export default Footer
