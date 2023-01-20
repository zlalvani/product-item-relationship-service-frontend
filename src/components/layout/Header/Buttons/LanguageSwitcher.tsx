import { LanguageSwitch } from "cx-portal-shared-components";
import { I18nService } from "../../../../lib";

export const LanguageSwitcher: React.FC = () => {
  return (
    <LanguageSwitch
      current={localStorage.getItem("i18nextLng") ?? "en"}
      languages={[{ key: "de" }, { key: "en" }]}
      onChange={(lang) => {
        I18nService.changeLanguage(lang);
      }}
    />
  );
};
