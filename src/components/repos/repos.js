import React from 'react';
import './repos.css';
import Repo from '../repo/repo';

const Repos = (props) =>  {
   const {repoObj, isLoaded} = props;

   if(isLoaded && repoObj) {
       
    return (
        <>                       
            <div className="repos-container">
                <h1 className="work">Work.</h1>
                <div className="repo-container">
                    {
                        repoObj.map((obj) => {
                            return <Repo key={obj.id} repoObj={obj}/>  
                        })
                    }                                     
                </div>                
            </div>

        </>
    )
    } else {
        var repoHolder = [];
        for(let i = 0; i < 8; i++) {
            repoHolder.push(<Repo key={i}/>)
        }
        
        return (
            
            <div className="repos-container">
                <h1 className="work">Work.</h1>
                <div className="repo-container">                    
                    {repoHolder}
                </div>                
             </div>
        )
    }
}

export default Repos;