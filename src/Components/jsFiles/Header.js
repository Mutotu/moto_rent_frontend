import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";

const Header = (props) => {
  const navigation = useNavigate();
  const { userState } = useContext(AppContext);
  const [user, setUser] = userState;

  return (
    <div>
      {/* <h1> Motorcycle Rentals</h1> */}
      <nav className='NavBar'>
        <button
          className='btn-header'
          onClick={() => {
            navigation("/");
          }}
        >
          Home
        </button>
        {localStorage.userId ? (
          <>
            <button
              className='btn-header'
              onClick={() => {
                navigation("/allbikes");
              }}
            >
              All Rentals
            </button>
            <button
              className='btn-header'
              onClick={() => {
                navigation("/myBikes");
              }}
            >
              My Rentals
            </button>
            <button
              className='btn-header'
              onClick={() => {
                navigation("/create");
              }}
            >
              Post Bikes
            </button>
            <button
              className='btn-header'
              onClick={() => {
                setUser({});
                localStorage.removeItem("userId");

                navigation("/");
              }}
            >
              Signout
            </button>
          </>
        ) : (
          <>
            <button
              className='btn-header'
              onClick={() => {
                navigation("/signin");
              }}
            >
              Signin
            </button>

            <button
              className='btn-header'
              onClick={() => {
                navigation("/signup");
              }}
            >
              Signup
            </button>
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;
