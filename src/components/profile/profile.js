import React from 'react';
import './profile.css';

const Profile = (props) =>  {
  
    const userObj = props.userObj;
    if(userObj){
        
    return (
        <div className="profile-container">
            <div className="content">
                <div className="avatar">
                    <img src={userObj.avatar_url} alt="avatar" onLoad={(e) => e.target.style.display = "block"}/>
                </div>
                <div className="content__name">
                    <span>{userObj.login}</span>                                      
                </div>
                <div className="content__link">
                    <a href="https://github.com/roh8raut">@rohit_raut</a>
                </div>

                <div className="content__addinfo">
                    <p className="content__addinfo--location">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        <span>Mumbai</span>
                    </p>

                    <p className="content__addinfo--available">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <span>Available</span>
                    </p>

                    <p className="content__addinfo--social">
                        <a href="https://twitter.com/wierdorohit123"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="https://in.linkedin.com/in/rohitraut1996"><i style={{marginLeft: 20+"px"}} className="fa fa-linkedin" aria-hidden="true"></i></a>
                    </p>
                </div>                               
            </div>
        </div>
    )
     } else {
        return (<p>Loading....</p>)
    }
}

export default Profile;