import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from "react"
import "./Navbar.css"


const Navbar = () => {
    const [Mobile, setMobile] = useState(false)
    return (
        <>
            <nav className='navbar'>
                <img className='navbar-avatar' src={require('../Assets/nsecLogo1.png')} alt='' />
                <div className={Mobile ? "navbar-mobile" : "navbar-links"} onClick={() => setMobile(false)}>
                    <a href='#Home'> Home</a>
                    <a href='#About'> About</a>
                    <a href='#Gallery'> Gallery</a>
                    <a href='#Sponsors'> Sponsors</a>
                    <a href='#Contribute'> Contribute</a>
                    <a href='#Team'> Team</a>
                    <a href='#Contact'> Contact</a>
                </div>
                <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
                    {Mobile ? <CloseIcon /> : <DensityMediumIcon />}
                </button>
            </nav>
        </>
    )
}
export default Navbar;