import { useState } from "react";

function App() {
  const [step, setStep] = useState("form"); // for the form where the user enter the name 
  const [name, setName] = useState(""); // this is the output

  const [lastname, setLastName] = useState("");
  const [ok, setok] = useState("name,Age,feedback");
  const [feedback, setFeedback] = useState("");

  const error = () => {
    if (name === "" || lastname === "") {
      alert("Please Enter Your First Name And Last Name");
    }
    else {
      setStep("result");
    }
   
  }
  const nice = ()=>{
     if(name.length>10){
      alert("Enter 10 Car only")
    }
  }
  return (
    <div >
      <input
        placeholder="Enter feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />
      {step === "form" && (
        <>
          <h2>Form</h2>
          <input
            placeholder="Enter your first name"
            onChange={(e) => setName(e.target.value)}
          /><br /><br />
          <input placeholder="Enter your last name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <br /><br />
          <button onClick={"error nice"}>
            Submit
          </button>
          
        </>
      )}

      {step === "result" && (
        <>
          <h2>Result</h2>
          <p>Welcome Mr/Mrs  {name} {lastname} </p>
          <button onClick={() => setStep("form")}>
            Back
          </button>


          <input value={ok} onChange={(e) => setok(e.target.value)} />

        </>
      )}
    </div>
  );
}

export default App;
