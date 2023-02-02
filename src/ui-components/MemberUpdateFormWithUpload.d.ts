/**
 * 
 * Modification of the generated MemberUpdateForm which handles file upload.
 * Following https://docs.amplify.aws/console/uibuilder/override/#modify-generated-code
 */
/* eslint-disable */
import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Member } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MemberUpdateFormInputValues = {
    name?: string;
    age?: number;
    date?: string;
    bio?: string;
    summary?: string;
    pictureUrl?: string;
    sponsor?: string;
};
export declare type MemberUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    age?: ValidationFunction<number>;
    date?: ValidationFunction<string>;
    bio?: ValidationFunction<string>;
    summary?: ValidationFunction<string>;
    pictureUrl?: ValidationFunction<string>;
    sponsor?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MemberUpdateFormOverridesProps = {
    MemberUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    bio?: PrimitiveOverrideProps<TextFieldProps>;
    summary?: PrimitiveOverrideProps<TextFieldProps>;
    pictureUrl?: PrimitiveOverrideProps<TextFieldProps>;
    sponsor?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MemberUpdateFormProps = React.PropsWithChildren<{
    overrides?: MemberUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    member?: Member;
    onSubmit?: (fields: MemberUpdateFormInputValues) => MemberUpdateFormInputValues;
    onSuccess?: (fields: MemberUpdateFormInputValues) => void;
    onError?: (fields: MemberUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MemberUpdateFormInputValues) => MemberUpdateFormInputValues;
    onValidate?: MemberUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MemberUpdateFormWithUpload(props: MemberUpdateFormProps): React.ReactElement;
