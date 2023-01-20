import styled from "@emotion/styled";
import { useKeycloak } from "@react-keycloak/web";
import { UserAvatar, UserMenu, UserNav } from "cx-portal-shared-components";
import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageSwitcher } from "./LanguageSwitcher";

/**
 * Header Log out Button
 * @returns React component
 */
export const LogOutButton: React.FC = () => {
  const { keycloak } = useKeycloak();
  const avatar = useRef<HTMLDivElement>(null);
  const [userInfo, setUserInfo] = useState<{ name: string; tenant: string } | undefined>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useMemo(async () => {
    const info = (await keycloak.loadUserInfo()) as { name: string; tenant: string };
    setUserInfo(info);
  }, []);

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
