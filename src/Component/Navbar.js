/* eslint-disable jsx-a11y/anchor-is-valid */
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from "react"
import "./Navbar.css"
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();

    const [Mobile, setMobile] = useState(false)

    const handalClick = () => {
        console.log('sfdlnv');
        navigate("/Crew");
    }

    return (
        <>
            <nav className='navbar'>
                <img className='navbar-avatar' src={require('../Assets/InceptraLogo.png')} alt='' />
                <div className={Mobile ? "navbar-mobile" : "navbar-links"} onClick={() => setMobile(false)}>
                    <a href='#Home'> Home</a>
                    <a href='#About'> About</a>
                    <a href='#Gallery'> Gallery</a>
                    <a href='#Sponsors'> Sponsors</a>
                    <a href='' onClick={handalClick}> Crew</a>
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