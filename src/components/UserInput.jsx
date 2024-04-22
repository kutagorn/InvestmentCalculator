import { useState } from "react";

export default function UserInput({ number = 0 }) {
  const [gettingInput, setGettingInput] = useState(number);
  
  
    function handleChange(event){
        setGettingInput(event.target.value);

  }
    console.log(gettingInput);
  
    return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" placeholder={gettingInput} required onChange={handleChange}/>
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" placeholder={gettingInput} required />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" placeholder={gettingInput} required />
        </p>
        <p>
          <label>Duration</label>
          <input type="number" placeholder={gettingInput} required />
        </p>
      </div>
    </section>
  );
}
