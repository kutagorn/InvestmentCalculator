import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      //we need the old data for the input's we have not changed. That is why we need the prev approuch.
      return {
        ...prevUserInput, //we need to spread the old userInput state object, so we copy all the old values
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput} />
      {inputIsValid ? (
        <Result input={userInput} />
      ) : (
        <p className="center">Duration must be above 1</p>
      )}
    </>
  );
}

export default App;
