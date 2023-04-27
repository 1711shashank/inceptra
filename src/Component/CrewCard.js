import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './CrewCard.css'


const CrewCard = ({crewMemberData}) => {
    return (
        <>
            <div className='CrewCard'>
                <img src={crewMemberData.photo} alt='' />
                <p className='CrewCard-name'> {crewMemberData.name} </p>
                <p className='CrewCard-role'> {crewMemberData.role} </p>
                {/* <div className='social-container'>
                    <ul className="list-unstyled">
                        <a
                            href={crewMemberData.instaId}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <li title="Instagram">
                                <InstagramIcon />
                            </li>
                        </a>
                        <a
                            href={crewMemberData.facebookId}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <li title="Instagram">
                                <FacebookIcon />
                            </li>
                        </a>
                        <a
                            href={crewMemberData.LinkedInId}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <li title="GitHub">
                                <LinkedInIcon />
                            </li>
                        </a>

                    </ul>
                </div> */}

            </div>

        </>
    )
}

export default CrewCard
