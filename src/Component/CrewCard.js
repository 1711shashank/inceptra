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
                <div className='social-container'>
                    <ul className="list-unstyled">
                        <a
                            href={crewMemberData.instaId}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <li title="Instagram">
                                <InstagramIcon style={{color:'#D73883'}} />
                            </li>
                        </a>
                        <a
                            href={crewMemberData.facebookId}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <li title="Instagram">
                                <FacebookIcon style={{color:'#3D5897'}}/>
                            </li>
                        </a>
                        <a
                            href={crewMemberData.LinkedInId}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <li title="GitHub">
                                <LinkedInIcon style={{color:'#0074B6'}}/>
                            </li>
                        </a>

                    </ul>
                </div>

            </div>

        </>
    )
}

export default CrewCard
