import React, { useState, useEffect } from 'react';
import Profile from './../profile/profile';
import Repos from '../repos/repos';
import './main.css';
import * as user from '../../stub/user.json';
import * as repo from '../../stub/repo.json';


const Main = (props) =>  {
    const [userDetails, setUserDetails] = useState([]);
    const [repoDetails, setRepoDetails] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://api.github.com/users/roh8raut")
            .then((res)  => {
                    if(res.ok) {
                        return res.json();
                    } else {                        
                        throw new Error('Something went wrong');
                    }
            })
            .then((datas) => {
                setUserDetails(datas)
            })
            .catch((err) => {
                setUserDetails(user.default)
            });

        fetch("https://api.github.com/users/roh8raut/repos")
            .then((res)  => {
                if(res.ok) {
                    return res.json();
                } else {                        
                    throw new Error('Something went wrong');
                }
            })
            .then((datas) => {               
                setRepoDetails(datas)
                setIsLoaded(true);
            })
            .catch((err) => {
                setRepoDetails(repo.default)
                setIsLoaded(true);
            })
                    
    }, []);

   
    const finalRepoObj = repoDetails.map((repo) => {
        // let desc = "";
        // if(repo.description !== null) {
        //     desc = repo.description.split(":").pop();
        // }
            return {name: repo.name, desc: repo.description, url: repo.html_url,language: repo.language, id: repo.id, fork: repo.fork}
    })
    
    return (
        <>
            <div className="main-container">
                <Profile userObj={userDetails}/>
                <Repos repoObj={finalRepoObj} isLoaded={isLoaded}/>
            </div>
           
        </>
    )
}

export default Main;