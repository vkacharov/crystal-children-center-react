/**
 * 
 * Modification of the generated UpdateUpdateForm which handles file upload.
 * Following https://docs.amplify.aws/console/uibuilder/override/#modify-generated-code
 */
/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField, TextAreaField, Loader, Text } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Update } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore, Storage } from "aws-amplify";
export default function UpdateUpdateFormWithUpload(props) {
  const {
    id: idProp,
    update,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    date: "",
    summary: "",
    pictureUrl: "",
    picturePath: "", 
    pictureFile: {},
    memberID: rest['memberid'],
    uploadPercentage: 0
  };
  const [date, setDate] = React.useState(initialValues.date);
  const [summary, setSummary] = React.useState(initialValues.summary);
  const [pictureUrl, setPictureUrl] = React.useState(initialValues.pictureUrl);
  const [picturePath, setPicturePath] = React.useState(initialValues.picturePath);
  const [pictureFile, setPictureFile] = React.useState(initialValues.pictureFile);
  const [memberID, setMemberID] = React.useState(initialValues.memberID);
  const [errors, setErrors] = React.useState({});
  const [uploadPercentage, setUploadPercentage] = React.useState(initialValues.uploadPercentage);

  const resetStateValues = () => {
    const cleanValues = updateRecord
      ? { ...initialValues, ...updateRecord }
      : initialValues;
    setDate(cleanValues.date);
    setSummary(cleanValues.summary);
    setPictureUrl(cleanValues.pictureUrl);
    setPicturePath(initialValues.picturePath);
    setPictureFile(initialValues.pictureFile);
    setMemberID(initialValues.memberID);
    setErrors({});
    setUploadPercentage(initialValues.uploadPercentage);
  };
  const [updateRecord, setUpdateRecord] = React.useState(update);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Update, idProp) : update;
      setUpdateRecord(record);
    };
    queryData();
  }, [idProp, update]);
  React.useEffect(resetStateValues, [updateRecord]);
  const validations = {
    date: [],
    summary: [],
    pictureUrl: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };

  const uploadFile = (pictureKey, pictureFile) => {
    return new Promise((resolve, reject) => {
      Storage.put(pictureKey, pictureFile, {
        resumable: true,
        progressCallback(progress) {
          const percentage = Math.round(100 *  progress.loaded / progress.total);
          setUploadPercentage(percentage);
        },

        completeCallback: (event) => {
          console.log(`Successfully uploaded ${event.key}`);
          resolve(event);
        },

        errorCallback: (err) => {
          console.error('Unexpected error while uploading', err);
          reject(err);
        }
      });
    });
  }

  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          date,
          summary,
          pictureUrl,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });

          if (pictureFile.name) {
            let pictureKey = updateRecord.memberID + '/' + updateRecord.id + '/' + pictureUrl;
            let uploadedFile = await uploadFile(pictureKey, pictureFile);
          }
          
          await DataStore.save(
            Update.copyOf(updateRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );

          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UpdateUpdateForm")}
      {...rest}
    >
      <TextField
        label="Update date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date: value,
              summary,
              pictureUrl,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <TextAreaField
        label="Summary"
        isRequired={false}
        isReadOnly={false}
        value={summary}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              summary: value,
              pictureUrl,
            };
            const result = onChange(modelFields);
            value = result?.summary ?? value;
          }
          if (errors.summary?.hasError) {
            runValidationTasks("summary", value);
          }
          setSummary(value);
        }}
        onBlur={() => runValidationTasks("summary", summary)}
        errorMessage={errors.summary?.errorMessage}
        hasError={errors.summary?.hasError}
        {...getOverrideProps(overrides, "summary")}
      ></TextAreaField>
      <TextField
        label="Picture or video"
        type="file"
        isRequired={false}
        isReadOnly={false}
        value={picturePath}
        onChange={(e) => {
          let pictureFile = e.target.files[0];
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              summary,
              pictureUrl: value,
            };
            const result = onChange(modelFields);
            value = result?.pictureUrl ?? value;
          }
          if (errors.pictureUrl?.hasError) {
            runValidationTasks("pictureUrl", value);
          }
          setPicturePath(value);
          setPictureFile(pictureFile);
          setPictureUrl(pictureFile.name);
        }}
        onBlur={() => runValidationTasks("pictureUrl", pictureUrl)}
        errorMessage={errors.pictureUrl?.errorMessage}
        hasError={errors.pictureUrl?.hasError}
        {...getOverrideProps(overrides, "pictureUrl")}
      ></TextField>
      <Text variation="secondary">Upload progress</Text>
      <Loader
        variation="linear" 
        percentage={uploadPercentage} 
        isDeterminate 
        isPercentageTextHidden 
      />

      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Cancel"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
            if (rest['onCancel']) {
              rest['onCancel']();
            }
          }}
          isDisabled={!(idProp || update)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || update) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
