import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";

export const Root = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="text-center bg-darkGreen sticky">
        Copyright &copy; Michaela Šimková 2023
      </footer>
    </div>
  );
};
