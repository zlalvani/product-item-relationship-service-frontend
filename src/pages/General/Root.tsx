import styled from "@emotion/styled";
import { useKeycloak } from "@react-keycloak/web";
import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../../components/layout/Header";
import { getCurrentEnvironment } from "../../constants/serverConfig";

/**
 * This is used by React Router as Root element for publicly accessible Routes
 * It automatically navigates you to the dashboard if you are logged in.
 *
 * @returns React.ReactNode
 */
export const PublicRoot: React.FC = () => {
  const { keycloak } = useKeycloak();
  const navigate = useNavigate();
  const serverEnv = getCurrentEnvironment();

  if (keycloak.authenticated && serverEnv !== null) {
    navigate(`${serverEnv}/dashboard`);
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
  if (keycloak.authenticated === undefined) {
    // This is used so first render will not display elements of the dashboard and will not trigger network requests.
    return null;
  }

  if (keycloak.authenticated === false) {
    navigate("/");
  }

  return (
    <>
      <Header />
      <CenterLayout>
        <Outlet />
      </CenterLayout>
    </>
  );
};

const CenterLayout = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 50px 20px;
`;
