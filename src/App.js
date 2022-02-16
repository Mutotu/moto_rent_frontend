import Header from "./Components/jsFiles/Header";
import env from "react-dotenv";
import axios from "axios";
import { AppContext } from "./context/AppContext";
import { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  const { userState } = useContext(AppContext);
  const [user, setUser] = userState;
  const userId = localStorage.getItem("userId");
  const verifyUser = async () => {
    if (userId) {
      const response = await axios.get(`${env.BACKEND_URL}/users/verify`, {
        headers: {
          "content-type": "application/JSON",
          Authorization: userId,
        },
      });

      setUser(response);
    }
  };

  useEffect(() => {
    verifyUser();
  }, []);
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <>
          {/* <Route
            path='/create'
            element={userId ? <CreatePost /> : <SigninPage />}
          />
          <Route
            path='/allbikes'
            element={userId ? <AllBikes /> : <SigninPage />}
          />
          <Route
            path='/myBikes'
            element={userId ? <MySavedRentedBikes /> : <SigninPage />}
          />
          <Route
            path='/allbikes/:motoId'
            element={userId ? <SingleBikePage /> : <SigninPage />}
          />
          <Route
            path='/onebike/:motoId'
            element={userId ? <PaymentPage /> : <SigninPage />}
          />
          {/* <> */}
          {/* <Route path='/signin' element={<SigninPage />} /> */}
          {/* <Route path='/signup' element={<SignupPage />} />  */}
        </>
      </Routes>
    </div>
  );
}

export default App;
