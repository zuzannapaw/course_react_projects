import classes from "./Form.module.css";
import React from "react";
import useForm from "../../hooks/use-form-hook";

const Form = (props) => {
  const {
    value: nameValue,
    onChangeHandler: onChangeName,
    onBlurHandler: onBlurName,
    isValid: nameIsValid,
    hasError: nameHasError,
    reset: nameReset,
  } = useForm((value) => value !== "");

  const {
    value: streetValue,
    onChangeHandler: onChangeStreet,
    onBlurHandler: onBlurStreet,
    isValid: streetIsValid,
    hasError: streetHasError,
    reset: streetReset,
  } = useForm((value) => value !== "");

  const {
    value: codeValue,
    onChangeHandler: onChangeCode,
    onBlurHandler: onBlurCode,
    isValid: codeIsValid,
    hasError: codeHasError,
    reset: codeReset,
  } = useForm((value) => value.length === 6);

  const {
    value: cityValue,
    onChangeHandler: onChangeCity,
    onBlurHandler: onBlurCity,
    isValid: cityIsValid,
    hasError: cityHasError,
    reset: cityReset,
  } = useForm((value) => value !== "");

  const formIsValid =
    nameIsValid && streetIsValid && codeIsValid && cityIsValid;

  const confirmHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;

    props.onConfirm({
      name: nameValue,
      street: streetValue,
      code: codeValue,
      city: cityValue,
    });

    nameReset();
    streetReset();
    codeReset();
    cityReset();
  };

  const nameClasses = `${classes.control} ${nameHasError && classes.invalid}`;
  const streetClasses = `${classes.control} ${
    streetHasError && classes.invalid
  }`;
  const codeClasses = `${classes.control} ${codeHasError && classes.invalid}`;
  const cityClasses = `${classes.control} ${cityHasError && classes.invalid}`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={nameValue}
          onChange={onChangeName}
          onBlur={onBlurName}
          type="text"
          id="name"
        />
        {nameHasError && (
          <p className={classes.invalid}>Please enter a valid name</p>
        )}
      </div>
      <div className={streetClasses}>
        <label htmlFor="street">Street</label>
        <input
          value={streetValue}
          onChange={onChangeStreet}
          onBlur={onBlurStreet}
          type="text"
          id="street"
        />
        {streetHasError && (
          <p className={classes.invalid}>Please enter a valid street name</p>
        )}
      </div>
      <div className={codeClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          value={codeValue}
          onChange={onChangeCode}
          onBlur={onBlurCode}
          type="text"
          id="postal"
        />
        {codeHasError && (
          <p className={classes.invalid}>Postal code must have 5 characters</p>
        )}
      </div>
      <div className={cityClasses}>
        <label htmlFor="city">City</label>
        <input
          value={cityValue}
          onChange={onChangeCity}
          onBlur={onBlurCity}
          type="text"
          id="city"
        />
        {cityHasError && (
          <p className={classes.invalid}>
            City name must starts with capital letter
          </p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Form;
