import React, { useState } from "react";
// import twitterIcon from '../../assets/icons/twitter.svg';
// import linkedinIcon from '../../assets/icons/linkedin.svg';
import Input from "../common/input/input";
import Button from "../common/buttons/buttons";
import useValidation from "../../utility/useValidation";
import "./contact.css";
import Bottomwave from "../waves/bottomwave";

const Contact = () => {
  const [isLoading, setIsloading] = useState(false);
  const [response, setResponse] = useState("");

  const nameObj = useValidation();
  const emailObj = useValidation();
  const messageObj = useValidation();

  const isvalidForm = () => {
    const nameError = nameObj.nameHandler(
      document.querySelector('input[name="Name"]')
    );
    const emailError = emailObj.emailHandler(
      document.querySelector('input[name="Email"]')
    );
    const messageError = messageObj.messageHandler(
      document.querySelector('textarea[name="Message"]')
    );

    if (!nameError && !emailError && !messageError) {
      return true;
    }
    return false;
  };
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
        btnElement.innerText = "About to Finish..";
      }, 3000);
      fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      })
        .then((res) => {
          res.json();
        })
        .then((data) => {
          setIsloading(false);
          setResponse("Success");
        })
        .catch((e) => {
          setIsloading(false);
          setResponse("Failure");
        });
    }
  };

  const getObjRequest = () => {
    let req = {};
    req.name = document.querySelector('input[name="Name"]').value;
    req.email = document.querySelector('input[name="Email"]').value;
    req.message = document.querySelector('textarea[name="Message"]').value;
    return req;
  };

  return response === "Success" ? (
    <div className="response">
      <h1>
        Thanks!! For connecting to me will get in touch soon.
        <span role="img" aria-label="Wink emoji">
          😉
        </span>
      </h1>
    </div>
  ) : response === "Failure" ? (
    <div className="response">
      <h1>
        Ooops Something went wrong please check your internet connectivity or
        try again after some time.☹
      </h1>
    </div>
  ) : (
    <div>
      <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-up">
        <div>
          <Input
            name="Name"
            handler={nameObj.nameHandler}
            classList={`bottom-color-brown`}
          />
          <br />
          {nameObj.error && <span className="error">{nameObj.error}</span>}
        </div>
        <div>
          <Input
            name="Email"
            handler={emailObj.emailHandler}
            classList={`bottom-color-brown`}
          />
          <br />
          {emailObj.error && <span className="error">{emailObj.error}</span>}
        </div>
        <div>
          <textarea
            name="Message"
            placeholder="Message"
            onChange={(e) => messageObj.messageHandler(e.target)}
            className={`bottom-color-brown`}
          />
          <br />
          {messageObj.error && (
            <span className="error">{messageObj.error}</span>
          )}
        </div>
        <div>
          <Button
            type="submit"
            text={isLoading ? "Loading..." : "Submit"}
            classes={`background-orange color-white`}
            disabled={isLoading ? "disabled" : ""}
          />
        </div>
      </form>
      <Bottomwave />
    </div>
  );
};

export default Contact;
