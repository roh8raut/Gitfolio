import React from 'react';
import './repos.css';
import Repo from '../repo/repo';
// import {Link} from 'react-router-dom';

const Repos = (props) =>  {
   const {repoObj, isLoaded} = props;
   if(isLoaded && repoObj) {
       
    return (
        <>                       
            <div className="repos-container">
                {/* <Link to="/Gitfolio"><div style={{textAlign: "center"}}><button className="btn aboutBtn">About</button></div></Link> */}
                <h1 className="work">Work.</h1>
                <div className="repo-container">
                    {
                        repoObj.map((obj) => {
                            if(!obj.fork) {
                                return <Repo key={obj.id} repoObj={obj}/>  
                            }
                            return "";
                        })
                    }                                     
                </div>
                
                <h1 className="fork">Fork.</h1>
                <div className="repo-container">
                    {
                        repoObj.map((obj) => {
                            if(obj.fork){
                                return <Repo key={obj.id} repoObj={obj}/>  
                            }     
                            return "";                       
                        }) 
                    }                                     
                </div>
            </div>

        </>
    )
    } 
    else {
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