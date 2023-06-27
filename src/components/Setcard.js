import { Link } from "react-router-dom";
import "./setcard.css";

const Setcard = (props) => {
  return (
    <div className="movieSetcard">
      <Link to={`/details/${props.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${props.img}`}
          alt="Film Cover"
        />
        <h2>{props.title}</h2>
        <p>{props.year}</p>
      </Link>
    </div>
  );
};

export default Setcard;
