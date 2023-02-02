/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Member } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DividerProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MemberSummaryAmpligramOverridesProps = {
    MemberSummaryAmpligram?: PrimitiveOverrideProps<FlexProps>;
    Header?: PrimitiveOverrideProps<FlexProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Options?: PrimitiveOverrideProps<FlexProps>;
    Age?: PrimitiveOverrideProps<TextProps>;
    Date?: PrimitiveOverrideProps<TextProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Area?: PrimitiveOverrideProps<FlexProps>;
    Summary?: PrimitiveOverrideProps<TextProps>;
    ReadMore?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    "Read more"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MemberSummaryAmpligramProps = React.PropsWithChildren<Partial<FlexProps> & {
    member?: Member;
    uploadPicture?: React.ReactNode;
    startUploadPicture?: (event: SyntheticEvent) => void;
} & {
    overrides?: MemberSummaryAmpligramOverridesProps | undefined | null;
}>;
export default function MemberSummaryAmpligram(props: MemberSummaryAmpligramProps): React.ReactElement;
