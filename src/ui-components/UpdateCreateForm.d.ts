/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UpdateCreateFormInputValues = {
    date?: string;
    summary?: string;
    pictureUrl?: string;
};
export declare type UpdateCreateFormValidationValues = {
    date?: ValidationFunction<string>;
    summary?: ValidationFunction<string>;
    pictureUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UpdateCreateFormOverridesProps = {
    UpdateCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    summary?: PrimitiveOverrideProps<TextAreaFieldProps>;
    pictureUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UpdateCreateFormProps = React.PropsWithChildren<{
    overrides?: UpdateCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UpdateCreateFormInputValues) => UpdateCreateFormInputValues;
    onSuccess?: (fields: UpdateCreateFormInputValues) => void;
    onError?: (fields: UpdateCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UpdateCreateFormInputValues) => UpdateCreateFormInputValues;
    onValidate?: UpdateCreateFormValidationValues;
} & React.CSSProperties>;
export default function UpdateCreateForm(props: UpdateCreateFormProps): React.ReactElement;
