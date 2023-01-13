/* eslint-disable @typescript-eslint/no-explicit-any */
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTranslation } from "react-i18next";
import { PaddedSection } from "../../../components/layout/PaddedSection";
import { serverConfig, ServerEnvironment } from "../../../constants/serverConfig";
import { useServerEnv } from "../../../utils/ServerEnv";

export const IRSSelectServerEnv = () => {
  const { t } = useTranslation();
  const { serverEnv, setServerEnv } = useServerEnv();

  const changeHandler = (event: SelectChangeEvent<ServerEnvironment>) => {
    const newServerEnv = event.target.value as ServerEnvironment;
    setServerEnv(newServerEnv);
  };

  return (
    <PaddedSection>
      <InputLabel sx={{ marginBottom: "7px" }}>{t("content.irs.form.environment.label")}</InputLabel>
      <Select onChange={changeHandler} value={serverEnv} variant="filled" fullWidth>
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
