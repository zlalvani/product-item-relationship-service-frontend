/* eslint-disable @typescript-eslint/no-explicit-any */
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useTranslation } from "react-i18next";
import { PaddedSection } from "../../../../components/layout/PaddedSection";
import {
  getCurrentEnvironment,
  serverConfig,
  ServerEnvironment,
  setCurrentEnvironment,
} from "../../../../constants/serverConfig";

export const IRSSelectServerEnv = () => {
  const { t } = useTranslation();
  const serverEnv = getCurrentEnvironment();

  return (
    <PaddedSection>
      <InputLabel sx={{ marginBottom: "7px" }}>{t("content.irs.form.environment.label")}</InputLabel>
      <Select
        onChange={(event) => {
          setCurrentEnvironment(event.target.value as ServerEnvironment);
        }}
        value={serverEnv}
        variant="filled"
        fullWidth
      >
        <MenuItem disabled value="none">
          {t("global.actions.pleaseSelect")}
        </MenuItem>
        {Object.keys(serverConfig).map((env) => (
          <MenuItem key={env} value={env}>
            {env}
          </MenuItem>
        ))}
      </Select>
    </PaddedSection>
  );
};
