import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";

export const Root = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="text-center bg-darkGreen sticky">
        Copyright &copy; Michaela Šimková 2023
      </footer>
    </div>
  );
};
