import React, { useState, useEffect } from 'react';
import Profile from './../profile/profile';
import Repos from '../repos/repos';
import './main.css';
import * as user from '../../stub/user.json';
import * as repo from '../../stub/repo.json';
import AboutMe from '../aboutme/aboutme';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
 
const Main = (props) =>  {
    const [userDetails, setUserDetails] = useState([]);
    const [repoDetails, setRepoDetails] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        AOS.init({duration: 1000,});
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
            });

        setTimeout(() => {
            const lists = [...document.querySelectorAll('[class^="css-"]')];
            for (const list of lists) {
                list.style.display = "none";
            }
        }, 7000);
                    
    }, []);

   
    const finalRepoObj = repoDetails.map((repo) => {
        return {name: repo.name, desc: repo.description, url: repo.html_url,language: repo.language, id: repo.id, fork: repo.fork}
    })
    
    return (
        <>
        <Router>
                <Route exact path="/Gitfolio"><AboutMe /></Route>
                <Route path="/Gitfolio/repo">
                    <div className="main-container">
                        <Profile userObj={userDetails}/>
                        <Repos repoObj={finalRepoObj} isLoaded={isLoaded}/>
                    </div> 
                </Route>
        </Router>
        </>
    )
}

export default Main;