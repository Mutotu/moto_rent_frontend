import { Link } from "react-router-dom";

function displayAllBikes(props) {
  //   console.log(props.bikes);

  const displayBikes = () => {
    return props.bikes.map((item, i) => {
      return (
        <div key={item.motorcycle.id}>
          <Link to={`${`/singleBike/${item.motorcycle.id}`}`}>
            <div className='moto-card'>
              <h1>Make: {item.motorcycle.make}</h1>
              <h1>Model: {item.motorcycle.model}</h1>
            </div>
          </Link>
        </div>
      );
    });
  };

  return <div>{displayBikes()}</div>;
}

export default displayAllBikes;
