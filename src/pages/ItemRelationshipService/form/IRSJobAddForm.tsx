import { LoadingButton, PageSnackbar } from "cx-portal-shared-components";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { PaddedSection } from "../../../components/layout/PaddedSection";
import { StyledBox, StyledBoxContent, StyledBoxHeader, StyledBoxTitle } from "../../../components/StyledBox";
import { RegisterJob } from "../../../generated/jobsApi";
import { useCreateJob } from "../../../services/queries/jobs";
import { IRSJobAddFormTextfield } from "./components/IRSJobAddFormTextfield";

type DefaultFormFieldValuesType = {
  RequestBodyValues: string;
};

export const IRSJobAddForm = () => {
  const { t } = useTranslation();

  const { mutate: createJob, isError, isSuccess, status } = useCreateJob();

  const defaultGlobalAssetId = import.meta.env[`VITE_SERVER_DEFAULT_GLOBAL_ASSET_ID`];

  const testJob = {
    aspects: ["AssemblyPartRelationship", "SerialPartTypization"],
    bomLifecycle: "asBuilt",
    collectAspects: true,
    direction: "downward",
    depth: 10,
    globalAssetId: defaultGlobalAssetId,
  };

  const defaultFormFieldValues: DefaultFormFieldValuesType = {
    RequestBodyValues: JSON.stringify(testJob, null, 2),
  };

  const {
    handleSubmit,
    getValues,
    control,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues: defaultFormFieldValues,
    mode: "onChange",
  });

  const onFormSubmit = async () => {
    const validateFields = await trigger(["RequestBodyValues"]);

    if (validateFields) {
      const formValues = getValues();
      try {
        const formData = JSON.parse(formValues.RequestBodyValues) as RegisterJob;
        createJob(formData);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const formHasErrors = () => {
    return Object.keys(errors).length > 0;
  };

  return (
    <PaddedSection>
      <StyledBox>
        <StyledBoxHeader>
          <StyledBoxTitle>{t("content.irs.form.title")}</StyledBoxTitle>
        </StyledBoxHeader>
        <StyledBoxContent
          style={{
            margin: "20px",
          }}
        >
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <IRSJobAddFormTextfield
              {...{
                control,
                errors,
                trigger,
                name: "RequestBodyValues",
                rules: {
                  required: true,
                  validate: (value: string) => {
                    try {
                      JSON.parse(value);
                    } catch (e) {
                      return false;
                    }
                    return true;
                  },
                },
                label: t("content.irs.form.requestBodyValues.label"),
                helperText: t("content.irs.form.requestBodyValues.helperText"),
              }}
            />
          </form>
          <LoadingButton
            style={{ marginTop: 20 }}
            color="secondary"
            label={t("content.irs.form.sendButton")}
            loadIndicator="Creating Job ..."
            loading={status === 'pending'}
            onClick={onFormSubmit}
            disabled={formHasErrors()}
            onButtonClick={onFormSubmit}
            variant="contained"
            size="medium"
          />
        </StyledBoxContent>
      </StyledBox>

      {isError && (
        <PageSnackbar description="Failed to create Job" open={true} severity="error" showIcon={true} title="Error" />
      )}

      {isSuccess && (
        <PageSnackbar description="Created Job" open={true} severity="success" showIcon={true} title="Success" />
      )}
    </PaddedSection>
  );
};
