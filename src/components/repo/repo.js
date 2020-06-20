import React from 'react';
import './repo.css';
import Placeholder from '../placeholder/placeholder';
import codeIcon from '../../assets/icons/code.svg';


const Repo = (props) =>  {
    const handleClick = () => {
        window.open(props.repoObj.url);
    }

    const handlePrototypeClick = (e) => {
        e.stopPropagation();
        window.open(props.repoObj.homePage);
    }
    const repoObj = props.repoObj;

        return (                                 
               <div className="repo__card" data-aos="fade-up" onClick={handleClick}>
                     <h2>{(repoObj && repoObj.name) || <Placeholder width="150"/>}</h2>
                    <div className="desc">{(repoObj && repoObj.desc) || <Placeholder width="350"/>}</div>
                    <div className="section-footer">
                        {
                            (repoObj && repoObj.language) ? 
                            <>
                                <img src={codeIcon} alt="code-icon"  className="width__1" />
                                <span className="language">{repoObj.language}</span>
                                {repoObj.homePage ? <strong className="Prototype" onClick={handlePrototypeClick}>Prototype</strong> : ""}
                            </> :
                            <Placeholder width="100"/>
                        }
                    </div>
               </div>
        )
}

export default Repo;