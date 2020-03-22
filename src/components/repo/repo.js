import React from 'react';
import './repo.css';
import Placeholder from '../placeholder/placeholder';


const Repo = (props) =>  {
    const handleClick = () => {
        window.open(props.repoObj.url);
    }
    // console.log("repoObj,", props.repoObj)
    const repoObj = props.repoObj;
        
        return (                                 
               <div className="repo__card" data-aos="fade-up" onClick={handleClick}>
                     <h2>{(repoObj && repoObj.name) || <Placeholder width="150"/>}</h2>
                    <div>{(repoObj && repoObj.desc) || <Placeholder width="350"/>}</div>
                    <div className="section-footer">
                        {
                            (repoObj && repoObj.language) ? 
                            <>
                                <i className="fa fa-code" aria-hidden="true"></i>
                                <span style={{marginLeft: 5+"px"}}>{repoObj.language}</span> 
                                </> :
                            <Placeholder width="100"/>
                        }
                    </div>
               </div>
        )
}

export default Repo;