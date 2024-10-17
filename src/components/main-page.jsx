import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="main-page">
      <div className="main-page__buttons">
        <Link to={"Maps"}>
          <button>Mapas</button>
        </Link>
        <button>Banderas</button>
      </div>
    </div>
  );
}
