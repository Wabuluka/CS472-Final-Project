import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import SingleProduct from "./pages/SingleProduct";

export default function Navigator() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="single" element={<SingleProduct />} />
      </Route>
    </Routes>
  );
}
