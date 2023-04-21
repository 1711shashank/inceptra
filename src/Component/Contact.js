import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./Contact.css"

const Contact = () => {
    return (
        <>
            <div className='contact'>
                <div className='comp-title'> Contact Us </div>
                <div className='contact-body'>
                    <div className='contact-row'>
                        <p className='contact-row-head'>Event Conveners</p>
                        <p className='contact-row-text'>Sukanta Sir</p>
                        <p className='contact-row-text'>Partho Sir</p>
                        <p className='contact-row-text'>Sourabh Mitra Sir</p>
                        <p className='contact-row-text'>Soumen Sir</p>
                    </div>
                    <div className='contact-row'>
                        <p className='contact-row-head'>Event Coordinator</p>
                        <p className='contact-row-text'>Pradip Roy</p>
                        <p className='contact-row-text'>Kush Singh</p>
                        <p className='contact-row-text'>Raajbir Bajpai</p>
                        <p className='contact-row-text'>Navneet Mishra</p>
                    </div>
                    <div className='contact-row'>
                        <p className='contact-row-head'>Event Coordinator</p>
                        <p className='contact-row-text'>Sayan Roy</p>
                        <p className='contact-row-text'>Roshan Kumar</p>
                    </div>

                </div>
                {/* <div className='contact-social'>
                    <ul className="list-unstyled">
                        <a
                            href="https://www.instagram.com/inceptra.it/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <li title="Instagram">
                                <InstagramIcon />
                            </li>
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=100066951625772"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <li title="Facebook">
                                <FacebookIcon />
                            </li>
                        </a>
                    </ul>
                </div> */}
            </div>

        </>
    )
}

export default Contact
