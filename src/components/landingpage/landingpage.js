import React from 'react'
import './landingpage.css';

import Coding from '../../assets/coding.svg';
import N from '../../assets/drawing.svg';
import Button from '../buttons/buttons';
import { Link } from 'react-router-dom';

const Landingpage = () => {
    return (
        <div style={{color: "white"}}>
            <div className="intro">
                <img src={Coding} className="desk" alt="desk"/>
                <div className="profile-card">
                    <p data-aos="fade-up">Hey,I am Rohit Raut and I love building beautiful websites</p>
                </div>
                {/* <img src={Prof} alt="profile image" /> */}
                <div className="about__img" >
                    <img src={N} className="about_img" alt="img beside anout me section" data-aos="fade-up"/>
                </div>
                <div className="about__section">
                    <div data-aos="fade-up">
                        <h1>About Me</h1>
                        <p>
                            I'm a front-end developer with professional experience. I write accessible HTML, modern CSS and follow best practices of javascript. I specialize in React and Typescript. Apart from 
                            this you'll find me into sports especially Football. Ask me out for Swimming and you would'nt be disappointed. Travelling is fun since <strong style={{color:"yellow"}}>SAINT AUSTINE</strong> has already said "THE WORLD IS A BOOK AND 
                            THOSE WHO DO NOT TRAVEL READ ONLY FIRST PAGE". Well that said I'd love you to checkout my portfolio projects and also you can connect to me through linkedin or twitter.
                        </p>
                    </div>
                </div>
                <h1 className="ques" data-aos="fade-down-right">Interested in doing project a project together ?</h1>
                <div style={{justifySelf: "center", padding: "1em"}}>
                    <Link to="/Gitfolio/repo"><Button color="deeppink" text="Portfolio" classes="box__shadow--pink"/></Link>
                </div>
            </div>
        </div>
    )
}

export default Landingpage;
