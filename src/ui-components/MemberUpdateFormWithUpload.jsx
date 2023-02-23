/**
 * 
 * Modification of the generated MemberUpdateForm which handles file upload.
 * Following https://docs.amplify.aws/console/uibuilder/override/#modify-generated-code
 */
/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
  TextAreaField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Member } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore, Storage } from "aws-amplify";
export default function MemberUpdateFormWithUpload(props) {
  const {
    id: idProp,
    member,
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
    bio: "",
    summary: "",
    pictureUrl: "",
    picturePath: "",
    sponsor: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [age, setAge] = React.useState(initialValues.age);
  const [date, setDate] = React.useState(initialValues.date);
  const [gender, setGender] = React.useState(initialValues.gender);
  const [bio, setBio] = React.useState(initialValues.bio);
  const [summary, setSummary] = React.useState(initialValues.summary);
  const [pictureUrl, setPictureUrl] = React.useState(initialValues.pictureUrl);
  const [picturePath, setPicturePath] = React.useState(initialValues.picturePath);
  const [pictureFile, setPictureFile] = React.useState("");
  const [sponsor, setSponsor] = React.useState(initialValues.sponsor);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = memberRecord
      ? { ...initialValues, ...memberRecord }
      : initialValues;
    setName(cleanValues.name);
    setAge(cleanValues.age);
    setDate(cleanValues.date);
    setGender(cleanValues.gender);
    setBio(cleanValues.bio);
    setSummary(cleanValues.summary);
    setPictureUrl(cleanValues.pictureUrl);
    setSponsor(cleanValues.sponsor);
    setPicturePath(cleanValues.picturePath);
    setErrors({});
  };
  const [memberRecord, setMemberRecord] = React.useState(member);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Member, idProp) : member;
      setMemberRecord(record);
    };
    queryData();
  }, [idProp, member]);
  React.useEffect(resetStateValues, [memberRecord]);
  const validations = {
    name: [{ type: "Required" }],
    age: [],
    date: [],
    gender: [],
    bio: [],
    summary: [],
    pictureUrl: [],
    sponsor: [],
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
      rowGap="10px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          age,
          date,
          gender,
          bio,
          summary,
          pictureUrl,
          sponsor,
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
          await DataStore.save(
            Member.copyOf(memberRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );

          if (pictureFile) {
            let pictureKey = memberRecord.id + '/' + pictureUrl;
            let uploadedFile = await Storage.put(pictureKey, pictureFile);
          }

          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "MemberUpdateForm")}
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
              bio,
              summary,
              pictureUrl,
              sponsor,
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
              bio,
              summary,
              pictureUrl,
              sponsor,
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
              bio,
              summary,
              pictureUrl,
              sponsor,
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
              bio,
              summary,
              pictureUrl,
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
        label="Bio"
        isRequired={false}
        isReadOnly={false}
        value={bio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              age,
              date,
              gender,
              bio: value,
              summary,
              pictureUrl,
              sponsor,
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
      <TextAreaField
        label="Summary"
        isRequired={false}
        isReadOnly={false}
        value={summary}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              age,
              date,
              gender,
              bio,
              summary: value,
              pictureUrl,
              sponsor,
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
        label="Picture"
        type="file"
        isRequired={false}
        isReadOnly={false}
        value={picturePath}
        onChange={(e) => {
          let { value } = e.target;
          let pictureFile = e.target.files[0];

          if (onChange) {
            const modelFields = {
              name,
              age,
              date,
              gender,
              bio,
              summary,
              pictureUrl: value,
              sponsor,
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
              bio,
              summary,
              pictureUrl,
              sponsor: value,
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
          isDisabled={!(idProp || member)}
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
              !(idProp || member) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
