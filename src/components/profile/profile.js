import React from 'react';
import './profile.css';
import Placeholder from '../placeholder/placeholder';

import twitterIcon from '../../assets/icons/twitter.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import personIcon from '../../assets/icons/person.svg';
import locationIcon from '../../assets/icons/location.svg';

const Profile = (props) =>  {
  
    const userObj = props.userObj;
    // if(userObj){
        
    return (
        <div className="profile-container">
            <div className="content">
                <div className="avatar">
                    <img src={userObj.avatar_url} alt="avatar" onLoad={(e) => e.target.style.display = "block"}/>
                </div>
                <div className="content__name">
                    <span>{(userObj&&userObj.login) || <Placeholder width="100"/>}</span>                                  
                </div>
                <div className="content__link">
                    <a href="https://github.com/roh8raut">@rohit_raut</a>
                </div>

                <div className="content__addinfo">
                    <p className="content__addinfo--location">
                    <img src={locationIcon} alt="twitter-icon" className="width__2"/>
                        <span>Mumbai</span>
                    </p>

                    <p className="content__addinfo--available">
                        <img src={personIcon} alt="twitter-icon" className="width__2"/>
                        <span>Available</span>
                    </p>

                    <p className="content__addinfo--social">
                        <a href="https://twitter.com/wierdorohit123"><img src={twitterIcon} alt="twitter-icon" className="width__2"/></a>
                        <a href="https://in.linkedin.com/in/rohitraut1996"><img src={linkedinIcon} className="width__2" alt="linkedin icon"/></a>
                    </p>
                </div>                               
            </div>
        </div>
    )
    //  } else {
    //     return (<p>Loading....</p>)
    // }
}

export default Profile;