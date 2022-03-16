import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import env from "react-dotenv";

const SigninPage = (props) => {
  const navigation = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        // `${env.BACKEND_URL}/signin`,
        "http://localhost:5000/login",
        {
          username: userName,
          password: password,
        }
      );

      if (response.status === 200) {
        localStorage.setItem("user_id", response.data.data.user_id);
        navigation("/");
      }
    } catch (error) {
      setError("Enter valid info");
    }
  };
  const handleClick = () => {
    setError("");
  };
  return (
    <div>
      <h2>Log into your accout!</h2>
      {error && <div className={`${error} errorDisplay`}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='signup-username'>Username:</label>
          <input
            id='signup-username'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onClick={handleClick}
          />
        </div>
        <div>
          <label htmlFor='signup-password'>Password:</label>
          <input
            id='signup-password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onClick={handleClick}
          />
        </div>
        <div>
          <input type='submit' value='Log in!'></input>
        </div>
      </form>
    </div>
  );
};

export default SigninPage;
