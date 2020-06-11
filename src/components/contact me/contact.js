import React, {useEffect, useState} from 'react'
import twitterIcon from '../../assets/icons/twitter.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import Input from '../common/input/input';
import Button from '../common/buttons/buttons';
import useValidation from '../../utility/useValidation';
import './contact.css';

const Contact = () => {
    const [isLoading, setIsloading] = useState(false);
    const [response, setResponse] = useState("");

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
        const btnElement = e.target.querySelector("button");

        if (e) {
            e.preventDefault();
        }

        if (isvalidForm()) {
                setIsloading(true);
                const request = getObjRequest();
                const url = `https://gmail-service.herokuapp.com/sendmessage`;

                setTimeout(() => {
                    btnElement.innerText = "About to Finish.."
                }, 5000);
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
                    setResponse("Success");
                })
                .catch((e) => {
                    setIsloading(false);
                    setResponse("Failure");
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
        
        (response === "Success") ? <div className="response"><h1>Thanks!! For connecting to me will get in touch soon.😉</h1></div> :
        (response === "Failure") ? <div  className="response"><h1>Ooops Something went wrong please check your internet connectivity or try again after some time.☹</h1></div> :

        <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-up">
            <div>
                <Input name="Name" handler={nameObj.nameHandler}/><br/>
                {nameObj.error && <span className="error">{nameObj.error}</span>}
            </div>
            <div>
                <Input name="Email" handler={emailObj.emailHandler} /><br/>
                {emailObj.error && <span className="error">{emailObj.error}</span>}
            </div>
            <div>
                <textarea name="Message" placeholder="Message" onChange={(e) => messageObj.messageHandler(e.target)} /><br/>
                {messageObj.error && <span className="error">{messageObj.error}</span>}
            </div>
            <div>
                <Button type="submit" text={isLoading ? "Loading..." : "Submit"} disabled={isLoading ? 'disabled' : ""}/>
            </div>
      </form>
    );
}

export default Contact;
