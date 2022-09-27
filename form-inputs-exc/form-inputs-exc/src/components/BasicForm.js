import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredName,
    hasError: nameHasError,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value !== "");

  const {
    value: enteredLastName,
    hasError: lastNameHasError,
    isValid: lastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((value) => value !== "");

  const {
    value: enteredEmail,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (nameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    } else {
      console.log(`Name: ${enteredName}, Last Name: ${enteredLastName}, E-mail: ${enteredEmail}`);
    }
    nameReset();
    lastNameReset();
    emailReset();
  };

  const stylesName = nameHasError ? "form-control invalid" : "form-control";
  const stylesLastName = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const stylesEmail = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={stylesName}>
          <label htmlFor="name">First Name</label>
          <input
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            className={stylesName}
            type="text"
            id="name"
          />
          {nameHasError && <p className = "error-text">Please enter a name</p>}
        </div>
        <div className={stylesLastName}>
          <label htmlFor="name">Last Name</label>
          <input
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            className={stylesLastName}
            type="text"
            id="name"
          />
          {lastNameHasError && <p className = "error-text">Last name must not be empty </p>}
        </div>
      </div>
      <div className={stylesEmail}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          type="text"
          id="name"
        />
        {emailHasError && <p className = "error-text" >Email must includes '@'</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
