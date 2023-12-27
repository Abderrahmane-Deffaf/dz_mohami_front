import { Outlet } from "react-router-dom";
import NavBar from "../Components/Home/NavBar";
import Footer from "../Components/Home/Footer";

const Root = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
