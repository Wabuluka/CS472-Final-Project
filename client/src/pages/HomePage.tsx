import { Outlet } from "react-router";
import ProductsList from "../components/ProductsList";
function HomePage() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-5">
          <ProductsList />
        </div>
        <div className="col-lg-7" style={{ width: "560px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
