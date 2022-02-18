import axios from "axios";
import { useState, useEffect } from "react";
import env from "react-dotenv";
import RentedBikes from "../Components/jsFiles/RentedBikes";

const MySavedRentedBikes = (props) => {
  const [myrented, setMyRented] = useState([]);

  let userId = localStorage.getItem("userId");

  const rentedMotos = async () => {
    const getRentedMotos = await axios("http://localhost:5000/rent", {
      headers: {
        user_id: localStorage.getItem("user_id"),
      },
    });
    setMyRented(getRentedMotos.data.rented_motos);
  };
  useEffect(() => {
    rentedMotos();
  }, []);

  return (
    <>
      <h1>Bikes You Rented</h1>
      <RentedBikes myrented={myrented} />
    </>
  );
};

export default MySavedRentedBikes;
