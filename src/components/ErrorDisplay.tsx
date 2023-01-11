import { useTranslation } from "../lib/index";
import { StyledBox, StyledBoxContent, StyledBoxHeader } from "./StyledBox";

export const ErrorDisplay: React.FC<{ error: Error }> = ({ error }) => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledBox>
        <StyledBoxHeader>
          <h1>{t("global.errors.title")}</h1>
        </StyledBoxHeader>
        <StyledBoxContent>
          <p>{t("global.errors.description")}</p>
          <p>
            <i>{error.message}</i>
          </p>
        </StyledBoxContent>
      </StyledBox>
    </section>
  );
};
