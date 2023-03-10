/**
 * 
 * Modification of the generated MemberCreateForm which handles file upload.
 * Following https://docs.amplify.aws/console/uibuilder/override/#modify-generated-code
 */
/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Member } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore, Storage } from "aws-amplify";
export default function MemberCreateFormWithUpload(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    age: "",
    date: "",
    gender: undefined,
    summary: "",
    bio: "",
    sponsor: "",
    pictureUrl: "",
    picturePath: "",
    pictureFile: {}
  };
  const [name, setName] = React.useState(initialValues.name);
  const [age, setAge] = React.useState(initialValues.age);
  const [date, setDate] = React.useState(initialValues.date);
  const [gender, setGender] = React.useState(initialValues.gender);
  const [summary, setSummary] = React.useState(initialValues.summary);
  const [bio, setBio] = React.useState(initialValues.bio);
  const [sponsor, setSponsor] = React.useState(initialValues.sponsor);
  const [pictureUrl, setPictureUrl] = React.useState(initialValues.pictureUrl);
  const [picturePath, setPicturePath] = React.useState(initialValues.picturePath);
  const [pictureFile, setPictureFile] = React.useState(initialValues.pictureFile);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setAge(initialValues.age);
    setDate(initialValues.date);
    setGender(initialValues.gender);
    setSummary(initialValues.summary);
    setBio(initialValues.bio);
    setSponsor(initialValues.sponsor);
    setPictureUrl(initialValues.pictureUrl);
    setPicturePath(initialValues.picturePath);
    setPictureFile(initialValues.picturePath);
    setErrors({});
  };
  const validations = {
    name: [{ type: "Required" }],
    age: [],
    date: [],
    gender: [],
    summary: [],
    bio: [],
    sponsor: [],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          age,
          date,
          gender,
          summary,
          bio,
          sponsor,
          pictureUrl
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
          let createdMember = await DataStore.save(new Member(modelFields));
          let pictureKey = createdMember.id + '/' + pictureUrl;
          let uploadedFile = await Storage.put(pictureKey, pictureFile);

          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "MemberCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              age,
              date,
              gender,
              summary,
              bio,
              sponsor,
              pictureUrl,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Age"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={age}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              age: value,
              date,
              gender,
              summary,
              bio,
              sponsor,
              pictureUrl,
            };
            const result = onChange(modelFields);
            value = result?.age ?? value;
          }
          if (errors.age?.hasError) {
            runValidationTasks("age", value);
          }
          setAge(value);
        }}
        onBlur={() => runValidationTasks("age", age)}
        errorMessage={errors.age?.errorMessage}
        hasError={errors.age?.hasError}
        {...getOverrideProps(overrides, "age")}
      ></TextField>
      <TextField
        label="Date joined"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              age,
              date: value,
              gender,
              summary,
              bio,
              sponsor,
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
            <SelectField
        label="Gender"
        placeholder="Please select an option"
        isDisabled={false}
        value={gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              age,
              date,
              gender: value,
              pictureUrl,
              summary,
              bio,
              sponsor,
            };
            const result = onChange(modelFields);
            value = result?.gender ?? value;
          }
          if (errors.gender?.hasError) {
            runValidationTasks("gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("gender", gender)}
        errorMessage={errors.gender?.errorMessage}
        hasError={errors.gender?.hasError}
        {...getOverrideProps(overrides, "gender")}
      >
        <option
          children="Boy"
          value="BOY"
          {...getOverrideProps(overrides, "genderoption0")}
        ></option>
        <option
          children="Girl"
          value="GIRL"
          {...getOverrideProps(overrides, "genderoption1")}
        ></option>
      </SelectField>
      <TextAreaField
        value={summary}
        label="Summary"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              age,
              date,
              gender,
              summary: value,
              bio,
              sponsor,
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
      <TextAreaField
        label="Bio"
        value={bio}
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              age,
              date,
              gender,
              summary,
              bio: value,
              sponsor,
              pictureUrl,
            };
            const result = onChange(modelFields);
            value = result?.bio ?? value;
          }
          if (errors.bio?.hasError) {
            runValidationTasks("bio", value);
          }
          setBio(value);
        }}
        onBlur={() => runValidationTasks("bio", bio)}
        errorMessage={errors.bio?.errorMessage}
        hasError={errors.bio?.hasError}
        {...getOverrideProps(overrides, "bio")}
      ></TextAreaField>
      <TextField
        label="Sponsor"
        isRequired={false}
        isReadOnly={false}
        value={sponsor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              age,
              date,
              gender,
              summary,
              bio,
              sponsor: value,
              pictureUrl,
            };
            const result = onChange(modelFields);
            value = result?.sponsor ?? value;
          }
          if (errors.sponsor?.hasError) {
            runValidationTasks("sponsor", value);
          }
          setSponsor(value);
        }}
        onBlur={() => runValidationTasks("sponsor", sponsor)}
        errorMessage={errors.sponsor?.errorMessage}
        hasError={errors.sponsor?.hasError}
        {...getOverrideProps(overrides, "sponsor")}
      ></TextField>
      <TextField
        label="Picture"
        type="file"
        isRequired={false}
        isReadOnly={false}
        value={picturePath}
        onChange={(e) => {
          let pictureFile = e.target.files[0];
          let {value}  = e.target;
          if (onChange) {
            const modelFields = {
              name,
              age,
              date,
              summary,
              bio,
              sponsor,
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
