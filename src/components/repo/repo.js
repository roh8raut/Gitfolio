import React from 'react';
import './repo.css';

const Repo = (props) =>  {
    const handleClick = () => {
        window.open(props.repoObj.url);
    }
    
    if(props.repoObj){
        
        return (                                 
               <div className="repo__card" onClick={handleClick}>
                   <h2>{props.repoObj.name}</h2>
                   <p>{props.repoObj.desc}</p>
                   <div className="section-footer">
                        <i className="fa fa-code" aria-hidden="true"></i>
                        <span style={{marginLeft: 5+"px"}}>{props.repoObj.language}</span>
                   </div>
               </div>
        )
    } else {
        return (
            <div className="repo__card" style={{height: 127+"px"}}>
                <h2 className="holder" style={{width: 100+"px"}}></h2>
                <p className="holder" style={{width: 280+"px"}}></p>
                <div className="holder" style={{width: 80+"px"}}></div>
            </div>
        )
    }
   
}

export default Repo;