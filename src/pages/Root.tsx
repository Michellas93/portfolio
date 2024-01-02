import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export const Root = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Navbar />

      <div id="detail" className="flex-grow">
        <Outlet />
      </div>
      <footer className="text-center bg-darkGreen sticky">
        Copyright &copy; Michaela Šimková 2023
      </footer>
    </div>
  );
};
