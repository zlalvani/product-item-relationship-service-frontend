import { Outlet } from "react-router-dom";
import { Header } from "../components/layout/Header";

export const Root: React.FC = () => {
  return (
    <>
      <Header menuItems={[{ name: "IRS Visualsation" }]} />
      <Outlet />
    </>
  );
};
