import { useLocation } from "react-router-dom";
export const ParkSeznam = () => {
  const { state } = useLocation();

  if (!state || !state.location) {
    return <div>Location data not available</div>;
  }

  return <div></div>;
};
