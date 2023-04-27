import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './CrewCard.css'


const CrewCard = () => {
    return (
        <>
            <div className='CrewCard'>
                <img src='https://avenir.phoenixnsec.in/static/media/kumar_shashank.12b91ec142502f75040c.jpeg' alt='' />
                <p className='CrewCard-name'> Kumar Shashank</p>
                <p className='CrewCard-role'> Team Member </p>
                <div className='social-container'>
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
                            href="https://www.instagram.com/inceptra.it/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <li title="Instagram">
                                <FacebookIcon />
                            </li>
                        </a>
                        <a
                            href="https://linkedin.com/in/1711shashank"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <li title="GitHub">
                                <LinkedInIcon />
                            </li>
                        </a>

                    </ul>
                </div>

            </div>

        </>
    )
}

export default CrewCard
