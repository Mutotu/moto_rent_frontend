import axios from "axios";
import { useState, useEffect } from "react";

import { Link, Navigate, useNavigate } from "react-router-dom";
import env from "react-dotenv";
import { useParams } from "react-router-dom";
import UserInfo from "../Components/jsFiles/UserInfo";

const SingleBikePage = (props) => {
  const navigate = useNavigate();
  const [load, setLoad] = useState(null);
  const [moto, setMoto] = useState({});
  const { motoId } = useParams();

  const getMoto = async () => {
    // const motoData = await axios(`${env.BACKEND_URL}/comments/${motoId}`, {
    const motoData = await axios.get(`http://localhost:5000/moto/${motoId}`, {
      headers: { user_id: localStorage.getItem("userId") },
    });

    setMoto(motoData.data);
    console.log(motoData.data);
  };
  useEffect(() => {
    getMoto();
  }, []);
  const display = () => {
    return (
      <div className='single-page-display'>
        <button
          className='single-page-bt'
          onClick={() => {
            navigate("/");
          }}
        >
          Go back to bikes
        </button>
        <div>
          <Link to={`/payment/${moto.motorcycle?.id}`}>
            Rent {moto.motorcycle?.make}
          </Link>
          <h2>Photo: {moto.motorcycle?.photo}</h2>
          <h2>Make: {moto.motorcycle?.make}</h2>
        </div>
        <UserInfo userId={moto.motorcycle?.user_id} />
        <div>
          {moto.comments?.map((item, i) => {
            return (
              <div key={item.comment.id}>
                <ul>
                  <li>Title: {item.comment.title}</li>
                  <li>Comment: {item.comment.comment}</li>
                  <li>Commented on {item.comment.date}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return <>{moto ? display() : <h1> No Comments</h1>}</>;
};

export default SingleBikePage;
