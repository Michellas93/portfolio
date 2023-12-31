import logo from "../assets/logo.png";

export const Logo = () => {
  return (
    <div className="w-16 transition-transform duration-300 hover:scale-110 ">
      <img className="rounded-lg" src={logo} alt="logo" />
    </div>
  );
};
