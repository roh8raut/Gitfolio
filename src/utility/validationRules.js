const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const nameRegex =  /[a-zA-Z]+/g;

const validationRules = {
    required: {
      test: val => nameRegex.test(val),
      message: name => `Please enter a valid Full ${name}.`,
    },
    email: {
      test: val => emailRegex.test(val),
      message: name => `${name} must be a valid email.`,
    },
    min: {
      test: arg => (val) => val.length >= arg,
      message: arg => name => {
        return `${name} must be at least ${arg} characters.`
      },
    },
    max: {
      test: arg => val => val.length <= arg,
      message: arg => name => `${name} must be less than ${arg} characters.`,
    },
  };

  export default validationRules;