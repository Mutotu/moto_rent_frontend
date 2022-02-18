import { Link } from "react-router-dom";

function displayAllBikes(props) {
  // console.log(props.bikes);

  const displayBikes = () => {
    return props.bikes.map((item, i) => {
      return (
        <div key={item.motorcycle.id}>
          <div className='moto-card'>
            <Link to={`${`/singleBike/${item.motorcycle.id}`}`}>
              <h1>Photo: item.motorcycle.photo</h1>
            </Link>
            <h1>Make: {item.motorcycle.make}</h1>
            <h1>Model: {item.motorcycle.model}</h1>
            <h1>Year: {item.motorcycle.year}</h1>
            <h1>Description: {item.motorcycle.description}</h1>
            <h1>Daily Price: {item.motorcycle.year}</h1>
          </div>
        </div>
      );
    });
  };

  return <div>{displayBikes()}</div>;
}

export default displayAllBikes;
