import RentedBikes from "../Components/jsFiles/RentedBikes";
import { useState, useEffect } from "react";
import axios from "axios";

const CommentOnBikes = (props) => {
  const [comment, setComment] = useState("");
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState(null);
  const [displayForm, setDisplayForm] = useState(false);
  const [motoId, setMotoId] = useState("");
  const [showForm, setShowForm] = useState(false);

  const submitEventInfo = async (e) => {
    e.preventDefault();
    let user_id = localStorage.getItem("userId");
    // console.log(motoId);
    try {
      const submitComment = await axios.post(
        // `${env.BACKEND_URL}/comment/${user_id}/${motoId}`,
        { title, comment },
        {
          headers: {
            user_id: localStorage.getItem("user_id"),
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const displayFormInputs = () => {
    return (
      <div id='overlay' style={{ padding: "20px" }}>
        {props.displayBikes()}
        <form onSubmit={submitEventInfo} className='commentForm' id='text'>
          <div>
            {" "}
            <label htmlFor='title'>Title: </label>
            <input
              type='text'
              placeholder='Enter a title'
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor='comment'>Comment: </label>
            <input
              type='text'
              placeholder='Enter a comment'
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
          </div>
          <input
            type='submit'
            value='Submit'
            disabled={!title || !comment ? true : false}
            onSubmit={() => {
              setComment("");
              setTitle("");
            }}
          />
          <button
            onClick={() => {
              setDisplayForm(false);
              setComment("");
              setTitle("");
              setShowForm(false);
            }}
          >
            Close
          </button>
        </form>
      </div>
    );
  };
};

export default CommentOnBikes;
