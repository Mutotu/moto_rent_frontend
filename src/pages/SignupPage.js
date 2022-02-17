import axios from "axios";
import { useState, useEffect, useContext } from "react";
// import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import env from "react-dotenv";

const SignupPage = (props) => {
  const navigation = useNavigate();
  const [first_name, setFn] = useState("");
  const [last_name, setLn] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      //   const createUser = await axios.post(`${env.BACKEND_URL}/signup`, {
      const createUser = await axios.post(`http://localhost:5000/register`, {
        first_name: first_name,
        last_name: last_name,
        username: username,
        age: age,
        role: role,
        email: email,
        password: password,
      });

      navigation("/");
    } catch (error) {
      setError("Fill all the boxes");
    }
  };
  const handleClick = () => {
    setError("");
  };

  return (
    <div className='signup'>
      <h2>Sign up for an accout!</h2>

      {error && <div className={`${error} errorDisplay`}>{error}</div>}

      <form onSubmit={handleSubmit} className='signup-form'>
        <div>
          <label htmlFor='signup-fn'>First Name:</label>
          <input
            id='signup-fn'
            value={first_name}
            onChange={(e) => setFn(e.target.value)}
            onClick={handleClick}
          />
        </div>
        <div>
          <label htmlFor='signup-ln'>Last name:</label>
          <input
            id='signup-ln'
            value={last_name}
            onChange={(e) => setLn(e.target.value)}
            onClick={handleClick}
          />
        </div>

        <div>
          <label htmlFor='signup-username'>Username:</label>
          <input
            id='signup-username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onClick={handleClick}
          />
        </div>
        <div>
          <label htmlFor='signup-age'>Age:</label>
          <input
            id='signup-age'
            value={age}
            onChange={(e) => setAge(e.target.value)}
            onClick={handleClick}
          />
        </div>
        <div>
          <label htmlFor='signup-email'>Email:</label>
          <input
            id='signup-email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <label htmlFor='role'>Choose a role:</label>

          <select
            name='role'
            id='role'
            value={role}
            onChange={(e) => setRole(e.target.value)}
            onClick={handleClick}
          >
            <option>-----</option>
            <option value='Owner'>Owner</option>
            <option value='Renter'>Renter</option>
          </select>
        </div>
        <div>
          <input type='submit' value='Sign up!'></input>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
