import React from 'react'
import { GiPowerLightning } from 'react-icons/gi'

function Footer(props) {
    
    return (
        
        <footer style={{ backgroundColor: "#02203c"}} className={"footer text-white text-center p-4 animate__delay-5s animate__animated animate__fadeOut " + props.sticky}>
            <div>
                <span style={{fontSize:"22px"}}>Berk Hüseyin Gaffaroğlu © 2021 Tüm Hakları Saklıdır.
                </span>
            </div>
        </footer>

    )
}

export default Footer
