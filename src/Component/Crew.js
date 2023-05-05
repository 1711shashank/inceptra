import React from 'react'
import CrewCard from './CrewCard'
import './Crew.css'

const Crew = () => {

    const crewMembersArray = [
        {
            id: 1,
            name: 'Kumar Shashank',
            role: 'COORDINATOR',
            photo: 'https://avenir.phoenixnsec.in/static/media/kumar_shashank.12b91ec142502f75040c.jpeg',
            instaId: 'https://www.instagram.com/1711shashank',
            facebookId: 'https://www.instagram.com/1711shashank',
            LinkedInId: 'https://www.instagram.com/1711shashank',
        },
        {
            id: 2,
            name: 'Sayan Roy',
            role: 'General Secretary',
            photo: require('../Assets/CrewImage/SayanRoy.jpeg'),
            instaId: 'https://instagram.com/roy_babuu?igshid=ZDdkNTZiNTM=',
            facebookId: 'https://www.facebook.com/profile.php?id=100009912271527&mibextid=ZbWKwL',
            LinkedInId: 'https://www.facebook.com/profile.php?id=100009912271527&mibextid=ZbWKwL',
        },
        {
            id: 3,
            name: 'Vaibhav Raj',
            role: 'Accounts Team',
            photo: require('../Assets/CrewImage/VAIBHAV-RAJ.jpeg'),
            instaId: 'https://instagram.com/vaibhav_rajkumar_',
            facebookId: 'https://www.facebook.com/kundan.rouniyaar',
            LinkedInId: 'https://www.linkedin.com/in/vaibhav-raj-177467246',
        },
        {
            id: 4,
            name: 'Kush Kumar',
            role: 'Cultural Head',
            photo: require('../Assets/CrewImage/Kush.jpg'),
            instaId: 'https://instagram.com/kushsingh_rathor?igshid=ZDdkNTZiNTM=',
            facebookId: 'https://www.facebook.com/kush.singhrandhavaat',
            LinkedInId: 'https://www.linkedin.com/in/kush-kumar-7869b5191',
        },
        {
            id: 5,
            name: 'Ayush Kumar',
            role: 'Treasurer',
            photo: require('../Assets/CrewImage/ayush.png'),
            instaId: 'https://www.facebook.com/profile.php?id=100006647416897',
            facebookId: 'https://www.facebook.com/profile.php?id=100006647416897',
            LinkedInId: 'https://www.linkedin.com/in/ayush-kumar-6bbb541a2',
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
