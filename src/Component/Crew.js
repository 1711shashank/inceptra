import React from 'react'
import CrewCard from './CrewCard'
import './Crew.css'

const Crew = () => {

    const crewMembersArray = [
        {
            id: 1,
            name: 'Kumar Shashank',
            role: 'Team Member',
            photo: 'https://avenir.phoenixnsec.in/static/media/kumar_shashank.12b91ec142502f75040c.jpeg',
            instaId: 'https://www.instagram.com/1711shashank',
            facebookId: 'https://www.instagram.com/1711shashank',
            LinkedInId: 'https://www.instagram.com/1711shashank',
        },
        {
            id: 2,
            name: 'Kumar Shashank',
            role: 'Team Member',
            photo: 'https://avenir.phoenixnsec.in/static/media/kumar_shashank.12b91ec142502f75040c.jpeg',
            instaId: 'https://www.instagram.com/1711shashank',
            facebookId: 'https://www.instagram.com/1711shashank',
            LinkedInId: 'https://www.instagram.com/1711shashank',
        },
        {
            id: 3,
            name: 'Kumar Shashank',
            role: 'Team Member',
            photo: 'https://avenir.phoenixnsec.in/static/media/kumar_shashank.12b91ec142502f75040c.jpeg',
            instaId: 'https://www.instagram.com/1711shashank',
            facebookId: 'https://www.instagram.com/1711shashank',
            LinkedInId: 'https://www.instagram.com/1711shashank',
        },
        {
            id: 4,
            name: 'Kumar Shashank',
            role: 'Team Member',
            photo: 'https://avenir.phoenixnsec.in/static/media/kumar_shashank.12b91ec142502f75040c.jpeg',
            instaId: 'https://www.instagram.com/1711shashank',
            facebookId: 'https://www.instagram.com/1711shashank',
            LinkedInId: 'https://www.instagram.com/1711shashank',
        },
        {
            id: 5,
            name: 'Kumar Shashank',
            role: 'Team Member',
            photo: 'https://avenir.phoenixnsec.in/static/media/kumar_shashank.12b91ec142502f75040c.jpeg',
            instaId: 'https://www.instagram.com/1711shashank',
            facebookId: 'https://www.instagram.com/1711shashank',
            LinkedInId: 'https://www.instagram.com/1711shashank',
        },
        {
            id: 6,
            name: 'Kumar Shashank',
            role: 'Team Member',
            photo: 'https://avenir.phoenixnsec.in/static/media/kumar_shashank.12b91ec142502f75040c.jpeg',
            instaId: 'https://www.instagram.com/1711shashank',
            facebookId: 'https://www.instagram.com/1711shashank',
            LinkedInId: 'https://www.instagram.com/1711shashank',
        },
        {
            id: 7,
            name: 'Kumar Shashank',
            role: 'Team Member',
            photo: 'https://avenir.phoenixnsec.in/static/media/kumar_shashank.12b91ec142502f75040c.jpeg',
            instaId: 'https://www.instagram.com/1711shashank',
            facebookId: 'https://www.instagram.com/1711shashank',
            LinkedInId: 'https://www.instagram.com/1711shashank',
        },
        {
            id: 8,
            name: 'Kumar Shashank',
            role: 'Team Member',
            photo: 'https://avenir.phoenixnsec.in/static/media/kumar_shashank.12b91ec142502f75040c.jpeg',
            instaId: 'https://www.instagram.com/1711shashank',
            facebookId: 'https://www.instagram.com/1711shashank',
            LinkedInId: 'https://www.instagram.com/1711shashank',
        }
    ]

    return (
        <>
            <div className='Crew'>
                <div className='comp-title'> <span> Crew Members </span>  </div>
                <div className='Crew-card'>
                    {
                        crewMembersArray.map((curCrewMemberData) => (
                            <div key={curCrewMemberData.id}>
                                <CrewCard crewMemberData={curCrewMemberData} />
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default Crew
