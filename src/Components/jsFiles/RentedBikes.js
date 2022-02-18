import CommentPage from "../../pages/CommentPage";
function displayRentedBikes(props) {
  console.log(props.myrented);
  const displayBikes = () => {
    return props.myrented.map((item, i) => {
      return (
        <div key={item.rent_info.id}>
          <h1>Start Date: {item.rent_info.start_date}</h1>
          <h1>End Date: {item.rent_info.end_date}</h1>
          <h1>Date Rented:{item.rent_info.date}</h1>
          <h1>Total Price: {item.rent_info.total_price}</h1>
          <CommentPage moto_id={item.rent_info.moto_id} />
        </div>
      );
    });
  };

  return (
    <div>
      {props.myrented ? (
        <>{displayBikes()}</>
      ) : (
        <h1>You haven't rented any bikes....</h1>
      )}
    </div>
  );
}

export default displayRentedBikes;
