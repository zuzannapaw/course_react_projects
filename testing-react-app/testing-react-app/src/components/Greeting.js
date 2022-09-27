import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(true);
  };

  return (
    <div>
      <h2>Hello</h2>
      {/* {!changeText && <p>Good to see you!</p>} */}
      {/* {changeText && <p>Changed!</p>} */}
      {!changedText && <Output>Good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}> Change Text!</button>
    </div>
  );
};

//check if false the text wil appear\
//check if true the chaged text will appear

export default Greeting;
