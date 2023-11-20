import { NavLink } from "react-router-dom";
import PageNav from "../components/PageNav";

function Homepage() {
  <PageNav />;

  return (
    <div>
      <h1>Worldwise</h1>
      <NavLink to="/pricing">Pricing </NavLink>
    </div>
  );
}

export default Homepage;
