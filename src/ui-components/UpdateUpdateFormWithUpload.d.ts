/**
 * 
 * Modification of the generated UpdateUpdateForm which handles file upload.
 * Following https://docs.amplify.aws/console/uibuilder/override/#modify-generated-code
 */
/* eslint-disable */
import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Update } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UpdateUpdateFormInputValues = {
    date?: string;
    summary?: string;
    pictureUrl?: string;
};
export declare type UpdateUpdateFormValidationValues = {
    date?: ValidationFunction<string>;
    summary?: ValidationFunction<string>;
    pictureUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UpdateUpdateFormOverridesProps = {
    UpdateUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    summary?: PrimitiveOverrideProps<TextFieldProps>;
    pictureUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UpdateUpdateFormProps = React.PropsWithChildren<{
    overrides?: UpdateUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    update?: Update;
    onSubmit?: (fields: UpdateUpdateFormInputValues) => UpdateUpdateFormInputValues;
    onSuccess?: (fields: UpdateUpdateFormInputValues) => void;
    onError?: (fields: UpdateUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UpdateUpdateFormInputValues) => UpdateUpdateFormInputValues;
    onValidate?: UpdateUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UpdateUpdateFormWithUpload(props: UpdateUpdateFormProps): React.ReactElement;
