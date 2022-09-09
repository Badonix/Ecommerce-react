import { useState } from "react";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setUser({ name: name, password: email });
    alert("Lets pretend you've just logged in :) " + name + " " + email);
  };

  return (
    <form className="form">
      <div className="login-cont">
        <input
          onChange={(e) => setName(e.target.value)}
          className="user-inp"
          type="email"
          placeholder="username"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="pass-inp"
          type="password"
          placeholder="password"
        />
        <button onClick={handleSubmit}>Log In</button>
      </div>
    </form>
  );
};
export default Login;
