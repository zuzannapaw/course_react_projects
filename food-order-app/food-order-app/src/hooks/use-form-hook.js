import { useState } from "react";

const useForm = (checkValue) => {
  const [value, setValue] = useState("")
  const [isTouched, setIsTouched] = useState(false);

  const isValid = checkValue(value);
  const hasError = isTouched && !isValid;

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const onBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setIsTouched(false);
    setValue("");
  };

  return {
    value,
    onChangeHandler,
    onBlurHandler,
    isValid,
    hasError,
    reset
  };
};

export default useForm;
