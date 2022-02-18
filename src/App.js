import Header from "./Components/jsFiles/Header";
import env from "react-dotenv";
import axios from "axios";
import { AppContext } from "./context/AppContext";
import { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import CreatePost from "./pages/CreatePost";
import SigninPage from "./pages/SigninPage";
import RentedBikes from "./pages/RentedBikes";
import SingleBikePage from "./pages/SingleBikePage";
import PaymentPage from "./pages/PaymentPage";

function App() {
  const { userState } = useContext(AppContext);
  const [user, setUser] = userState;
  const userId = localStorage.getItem("user_id");

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <>
          <Route
            path='/post'
            element={userId ? <CreatePost /> : <SigninPage />}
          />
          <Route
            path='/myBikes'
            element={userId ? <RentedBikes /> : <SigninPage />}
          />
          <Route
            path='/singleBike/:motoId'
            element={userId ? <SingleBikePage /> : <SigninPage />}
          />
          <Route
            path='payment/:motoId'
            element={userId ? <PaymentPage /> : <SigninPage />}
          />
          {/* <Route
            path='/allbikes'
            element={userId ? <AllBikes /> : <SigninPage />}
          />
          
          
          
          {/* <> */}
          <Route path='/signin' element={<SigninPage />} />
          <Route path='/signup' element={<SignupPage />} />
        </>
      </Routes>
    </div>
  );
}

export default App;
