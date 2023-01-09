import { Box } from "@mui/material";

import { LoadingButton, PageSnackbar } from "cx-portal-shared-components";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { PaddedSection } from "../../../components/layout/PaddedSection";
import { getCurrentEnvironment, serverConfig } from "../../../constants/serverConfig";
import { useCreateJob } from "../../../services/queries/jobs";
import { IRSRequestBody } from "../../../types/jobs";
import { IRSJobAddFormTextfield } from "./components/IRSJobAddFormTextfield";

type DefaultFormFieldValuesType = {
  RequestBodyValues: string;
  Environment: string;
};

const useGetCurrentServerUrl = () => {
  const serverEnv = getCurrentEnvironment();
  return serverConfig[serverEnv].value;
};

export const IRSJobAddForm = () => {
  const { t } = useTranslation();
  const serverUrl = useGetCurrentServerUrl();
  const { mutate: createJob, isLoading, isError, isSuccess } = useCreateJob();

  const testJob = {
    aspects: ["AssemblyPartRelationship", "SerialPartTypization"],
    bomLifecycle: "asBuilt",
    collectAspects: true,
    direction: "downward",
    depth: 10,
    globalAssetId: "urn:uuid:d387fa8e-603c-42bd-98c3-4d87fef8d2bb",
  };

  const defaultFormFieldValues = {
    RequestBodyValues: JSON.stringify(testJob, null, 2),
    Environment: serverUrl,
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

  const handleConfirm = async (formValues: DefaultFormFieldValuesType) => {
    try {
      const formData = JSON.parse(formValues.RequestBodyValues) as IRSRequestBody;
      createJob(formData);
    } catch (error) {
      console.log(error);
    }
  };

  const onFormSubmit = async () => {
    const validateFields = await trigger(["RequestBodyValues", "Environment"]);

    if (validateFields) {
      const formValues = getValues();
      handleConfirm(formValues);
    }
  };

  const formHasErrors = () => {
    return Object.keys(errors).length > 0;
  };

  return (
    <PaddedSection>
      <Box className="irs-job-form">
        <Box className="irs-job-form-header">
          <h5>{t("content.irs.form.title")}</h5>
        </Box>
        <Box
          className="irs-job-form-content"
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
            loading={isLoading}
            onClick={onFormSubmit}
            disabled={formHasErrors()}
            onButtonClick={onFormSubmit}
            variant="contained"
            size="medium"
          />
        </Box>
      </Box>

      {isError && (
        <PageSnackbar
          description="Failed to create Job"
          open={true}
          severity="error"
          showIcon={true}
          title="Error"
          vertical={"top"}
          horizontal={"center"}
        />
      )}

      {isSuccess && (
        <PageSnackbar
          description="Created Job"
          open={true}
          severity="success"
          showIcon={true}
          title="Success"
          vertical={"top"}
          horizontal={"center"}
        />
      )}
    </PaddedSection>
  );
};
