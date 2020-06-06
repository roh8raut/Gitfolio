import React, {useEffect, useState} from 'react'
import twitterIcon from '../../assets/icons/twitter.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import Input from '../common/input/input';
import Button from '../common/buttons/buttons';
import useValidation from '../../utility/useValidation';
import './contact.css';

const Contact = () => {
    const [isLoading, setIsloading] = useState(false);
    const nameObj = useValidation();
    const emailObj = useValidation();
    const messageObj = useValidation();


    const isvalidForm = () => {
        const nameError = nameObj.nameHandler(document.querySelector('input[name="Name"]'));
        const emailError = emailObj.emailHandler(document.querySelector('input[name="Email"]'));
        const messageError = messageObj.messageHandler(document.querySelector('textarea[name="Message"]'));

        if (!nameError && !emailError&& !messageError) {
            return true;
        }
        return false;
    }
    const handleSubmit = (e) => {
      if (e) {
        e.preventDefault();
      }
     
      if (isvalidForm()) {
            console.log("form vAlid");
            setIsloading(true);
            const request = getObjRequest();
            const url = `https://gmail-service.herokuapp.com/sendmessage`;
            fetch(url, {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(request)
            })
            .then((res) => {
                res.json();
            }).then((data) => {
                setIsloading(false);
                console.log(data)
            })
            .catch((e) => {
                setIsloading(false);
                console.log(e);
            })
      }

    }

    const getObjRequest = () => {
        let req = {};
        req.name = document.querySelector('input[name="Name"]').value;
        req.email = document.querySelector('input[name="Email"]').value;
        req.message = document.querySelector('textarea[name="Message"]').value;
        return req;
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-up">
            <div>
                {/* <label>Name: */}
                    <Input name="Name" handler={nameObj.nameHandler}/><br/>
                    {nameObj.error && <span className="error">{nameObj.error}</span>}
                {/* </label> */}
            </div>
            <div>
                {/* <label>Email: */}
                <Input name="Email" handler={emailObj.emailHandler} /><br/>
                    {emailObj.error && <span className="error">{emailObj.error}</span>}
                {/* </label> */}
            </div>
            <div>
                {/* <label>Essay: */}
                    <textarea name="Message" placeholder="Message" onChange={(e) => messageObj.messageHandler(e.target)} /><br/>
                    {messageObj.error && <span className="error">{messageObj.error}</span>}
                {/* </label> */}
            </div>
            <div>
                <Button type="submit" text={isLoading ? "Loading..." : "Submit"} disabled={isLoading ? 'disabled' : ""}/>
            </div>
      </form>
        
    )
}

export default Contact;
