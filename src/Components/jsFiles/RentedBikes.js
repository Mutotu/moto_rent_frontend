import CommentPage from "../../pages/CommentPage";
function displayRentedBikes(props) {
  // console.log(props.myrented);
  const displayBikes = () => {
    return props.myrented.map((item, i) => {
      return (
        <div key={item.rent_info.id}>
          <h1>Date:{item.rent_info.date}</h1>
          <h1>Total Price: {item.rent_info.total_price}</h1>
        </div>
      );
    });
  };

  return (
    <div>
      {props.myrented ? (
        <>
          {displayBikes()}
          {/* <CommentPage displayBikes={displayBikes()} /> */}
        </>
      ) : (
        <h1>You haven't rented any bikes....</h1>
      )}
    </div>
  );
}

export default displayRentedBikes;
