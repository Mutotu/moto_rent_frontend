import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import env from "react-dotenv";
import RentedBikes from "../Components/jsFiles/RentedBikes";

const MySavedRentedBikes = (props) => {
  const navigate = useNavigate();
  const [myrented, setMyRented] = useState([]);

  let userId = localStorage.getItem("userId");

  const rentedMotos = async () => {
    const getRentedMotos = await axios("http://localhost:5000/rent", {
      headers: {
        user_id: localStorage.getItem("user_id"),
      },
    });
    setMyRented(getRentedMotos.data.rented_motos);

    // setLoad(true);
  };
  useEffect(() => {
    rentedMotos();
  }, []);

  return (
    <>
      <h1>lol</h1>
      <RentedBikes myrented={myrented} />
    </>
  );
};

export default MySavedRentedBikes;
