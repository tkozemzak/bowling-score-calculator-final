import { useState } from "react";

const Login = ({ setName }) => {
  const [enteredName, setEnteredName] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    setName(enteredName);
  };

  return (
    <div>
      <input
        placeholder="Enter your name here"
        onChange={(e) => setEnteredName(e.target.value)}
      />
      <button onClick={(e) => handleLogin(e)}>Submit</button>
    </div>
  );
};

export default Login;
