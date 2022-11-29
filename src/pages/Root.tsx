import { useKeycloak } from "@react-keycloak/web";
import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../components/layout/Header";

/**
 * This is used by React Router as Root element for publicly accessible Routes
 * It automatically navigates you to the dashboard if you are logged in.
 *
 * @returns React.ReactNode
 */
export const PublicRoot: React.FC = () => {
  const { keycloak } = useKeycloak();
  const navigate = useNavigate();

  if (keycloak.authenticated) {
    navigate("/dashboard");
  }

  return (
    <>
      <Outlet />
    </>
  );
};

/**
 * This is used by React Router as Root element for private Routes
 * It automatically navigates you to the welcome page if you are logged in.
 *
 * @returns React.ReactNode
 */
export const PrivateRoot: React.FC = () => {
  const { keycloak } = useKeycloak();
  const navigate = useNavigate();
  // Note: This is needed as keycloak.authenticated could be undefined
  if (keycloak.authenticated === false) {
    navigate("/");
  }

  return (
    <>
      <Header menuItems={[{ name: "IRS Visualization" }]} />
      <Outlet />
    </>
  );
};
