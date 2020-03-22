import React from 'react';
import './profile.css';
import Placeholder from '../placeholder/placeholder';


const Profile = (props) =>  {
  
    const userObj = props.userObj;
    // if(userObj){
        
    return (
        <div className="profile-container">
            <div className="content">
                <div className="avatar">
                    <img src={userObj.avatar_url} alt="avatar" onLoad={(e) => e.target.style.display = "block"}/>
                </div>
                <div className="content__name" data-aos="fade-dow" data-aos-duration="1000">
                    <span>{(userObj&&userObj.login) || <Placeholder width="100"/>}</span>                                  
                </div>
                <div className="content__link" data-aos="fade-right" data-aos-duration="1200">
                    <a href="https://github.com/roh8raut">@rohit_raut</a>
                </div>

                <div className="content__addinfo">
                    <p className="content__addinfo--location" data-aos="fade-right" data-aos-duration="1400">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        <span>Mumbai</span>
                    </p>

                    <p className="content__addinfo--available" data-aos="fade-right" data-aos-duration="1600">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <span>Available</span>
                    </p>

                    <p className="content__addinfo--social" data-aos="fade-right" data-aos-duration="1000">
                        <a href="https://twitter.com/wierdorohit123"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="https://in.linkedin.com/in/rohitraut1996"><i style={{marginLeft: 20+"px"}} className="fa fa-linkedin" aria-hidden="true"></i></a>
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