/* eslint-disable jsx-a11y/anchor-is-valid */
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from "react"
import "./Navbar.css"
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();

    const [Mobile, setMobile] = useState(false)

    const handalCrew = () => {
        navigate("/Crew");
    }

    return (
        <>
            <nav className='navbar'>
                <img className='navbar-avatar' src={require('../Assets/InceptraLogo.png')} alt='' />
                <p style={{fontFamily:'Patrick Hand', color:'#BF0101', fontSize:'4rem'}}>Inceptra 23</p>
                <div className={Mobile ? "navbar-mobile" : "navbar-links"} onClick={() => setMobile(false)}>
                    <a href='#Home'> Home</a>
                    <a href='#About'> About</a>
                    <a href='#Gallery'> Gallery</a>
                    <a href='#Sponsors'> Sponsors</a>
                    <a href='' onClick={handalCrew}> Crew</a>
                    {/* <a href='#Contact'> Contact</a> */}
                    {/* <a href='https://drive.google.com/file/d/1yH6OhQaEebrM7rr7w6rpDOAoEzOs-IyD/view?usp=drivesdk' target="_blank" rel="noreferrer"> Brochure</a> */}
                    <a href='https://photos.app.goo.gl/WwiqrCKiFmgY4Adt5' target="_blank" rel="noreferrer"> Pre-Inceptra Images</a>
                </div>
                <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
                    {Mobile ? <CloseIcon /> : <DensityMediumIcon />}
                </button>
            </nav>
        </>
    )
}
export default Navbar;