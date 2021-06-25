import { useState } from "react";
import validationRules from "./validationRules";

const useValidation = () => {
  const [error, setError] = useState("");

  const nameHandler = (elem) => {
    // console.log("elem", elem);
    if (!validationRules.required.test(elem.value)) {
      setError(validationRules.required.message(elem.name));
    } else {
      setError("");
      return false;
    }

    return true;
  };

  const emailHandler = (elem) => {
    if (!validationRules.email.test(elem.value)) {
      setError(validationRules.email.message(elem.name));
    } else {
      setError("");
      return false;
    }

    return true;
  };

  const messageHandler = (elem) => {
    // setError("");
    if (!validationRules.min.test(5)(elem.value)) {
      setError(validationRules.min.message(5)(elem.name));
    } else if (!validationRules.max.test(50)(elem.value)) {
      setError(validationRules.max.message(50)(elem.name));
    } else {
      setError("");
      return false;
    }

    return true;
  };
  return {
    error,
    nameHandler,
    emailHandler,
    messageHandler,
  };
};

export default useValidation;
