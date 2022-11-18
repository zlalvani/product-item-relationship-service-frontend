import { MainNavigation } from "cx-portal-shared-components";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Logo } from "./Logo/Logo";

type LinkItem = Partial<Record<"href" | "to", string>>;

export interface Tree {
  name: string;
  hint?: string;
  children?: Tree[];
}

export interface MenuItem extends LinkItem, Tree {
  title: string;
  children?: MenuItem[];
}

export const Header: React.FC<{ menuItems: Tree[] }> = ({ menuItems }) => {
  const { t } = useTranslation();
  const addTitle = (items: Tree[] | undefined) =>
    items?.map(
      (item: Tree): MenuItem => ({
        ...item,
        to: `/${item.name}`,
        title: t(`pages.${item.name}`),
        hint: item.hint ? t(`hints.${item.hint}`) : "",
        children: addTitle(item.children),
      }),
    );

  const menu = addTitle(menuItems) || [];
  return (
    <header>
      <Logo />
      <MainNavigation items={menu} component={NavLink} />
    </header>
  );
};
