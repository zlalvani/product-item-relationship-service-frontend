import styled from "@emotion/styled";
import { useKeycloak } from "@react-keycloak/web";
import { UserAvatar, UserMenu, UserNav } from "cx-portal-shared-components";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getUserInfo } from "../../../../services/queries/user";
import { LanguageSwitcher } from "./LanguageSwitcher";

/**
 * Header Log out Button
 * @returns React component
 */
export const LogOutButton: React.FC = () => {
  const { keycloak } = useKeycloak();
  const avatar = useRef<HTMLDivElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: userInfo } = getUserInfo();

  const openMenu = () => setIsMenuOpen(true);
  const onClickAway = (e: MouseEvent | TouchEvent) => {
    if (!avatar.current?.contains(e.target as HTMLDivElement)) {
      setIsMenuOpen(false);
    }
  };

  return (
    <StyledUserInfo>
      <div ref={avatar}>
        <UserAvatar onClick={openMenu} />
      </div>
      <UserMenu
        open={isMenuOpen}
        userName={userInfo?.name ?? ""}
        userRole={userInfo?.tenant ?? ""}
        onClickAway={onClickAway}
      >
        <UserNav
          component={Link}
          divider
          items={[
            {
              title: "Logout",
              to: "/",
              onClick: async () => {
                await keycloak.logout();
              },
            },
          ]}
        />
        <LanguageSwitcher />
      </UserMenu>
    </StyledUserInfo>
  );
};

const StyledUserInfo = styled.div`
  position: relative;
  z-index: 100;
`;
