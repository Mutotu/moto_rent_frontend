import axios from "axios";
import { useState } from "react";
// import { useParams } from "react-router-dom";

const UserInfo = (props) => {
  const [email, setEmail] = useState("");
  const getUserDetail = async () => {
    const data = await axios.get(`http://localhost:5000/user/${props.user_id}`);

    setEmail(data.data.user.email);
  };

  return (
    <>
      Contact to Renter: <a href={`mailto: ${email}`}>Send Email </a>
    </>
  );
};

export default UserInfo;
