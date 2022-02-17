import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import env from "react-dotenv";
import { Link } from "react-router-dom";
import AllBikes from "../Components/jsFiles/AllBikes";

const HomePage = (props) => {
  const userId = localStorage.getItem.userId;
  const [bikes, setBikes] = useState([]);
  const get_all_bikes = async () => {
    // const allBikes = await axios.get(`${process.env.BACKEND_URL}/motos`, {
    const allBikes = await axios.get(`http://localhost:5000/motos`, {
      headers: { authorization: localStorage.getItem("userId") },
    });

    setBikes(allBikes.data.motos);
    // console.log(bikes);
  };

  useEffect(() => {
    get_all_bikes();
  }, []);

  return (
    <div>
      <h1>HomePage</h1>

      {!userId ? (
        <Link to={`${`/signup`}`}>
          <AllBikes bikes={bikes} />
        </Link>
      ) : (
        <AllBikes bikes={bikes} />
      )}
    </div>
  );
};

export default HomePage;
