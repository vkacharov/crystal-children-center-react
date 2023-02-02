/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Member } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MemberSummaryPostOverridesProps = {
    MemberSummaryPost?: PrimitiveOverrideProps<FlexProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    Text?: PrimitiveOverrideProps<FlexProps>;
    Headline?: PrimitiveOverrideProps<FlexProps>;
    Frame36792698?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    "Frame 419"?: PrimitiveOverrideProps<FlexProps>;
    EditIconFrame?: PrimitiveOverrideProps<ViewProps>;
    EditIcon?: MyIconProps;
    DeleteIconFrame?: PrimitiveOverrideProps<ViewProps>;
    DeleteIcon?: MyIconProps;
    Frame36692723?: PrimitiveOverrideProps<FlexProps>;
    Sponsor?: PrimitiveOverrideProps<TextProps>;
    Article?: PrimitiveOverrideProps<FlexProps>;
    Summary?: PrimitiveOverrideProps<TextProps>;
    "Read more"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    ReadMore?: PrimitiveOverrideProps<TextProps>;
    ImageSlot?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type MemberSummaryPostProps = React.PropsWithChildren<Partial<FlexProps> & {
    member?: Member;
    onPictureIconClick?: (event: SyntheticEvent) => void;
    imageSlot?: React.ReactNode;
    nullString?: String;
    onEditIconClick?: (event: SyntheticEvent) => void;
} & {
    breakpoint?: "large" | "medium";
} & {
    overrides?: MemberSummaryPostOverridesProps | undefined | null;
}>;
export default function MemberSummaryPost(props: MemberSummaryPostProps): React.ReactElement;
