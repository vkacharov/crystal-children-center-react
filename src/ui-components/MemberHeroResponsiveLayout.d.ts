/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Member } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MemberHeroResponsiveLayoutOverridesProps = {
    MemberHeroResponsiveLayout?: PrimitiveOverrideProps<FlexProps>;
    ImageSlot?: PrimitiveOverrideProps<FlexProps>;
    Left?: PrimitiveOverrideProps<FlexProps>;
    HeroMessage?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    Sponsor?: PrimitiveOverrideProps<TextProps>;
    Message?: PrimitiveOverrideProps<FlexProps>;
    Summary?: PrimitiveOverrideProps<TextProps>;
    Bio?: PrimitiveOverrideProps<TextProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    Age?: PrimitiveOverrideProps<TextProps>;
    Date?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MemberHeroResponsiveLayoutProps = React.PropsWithChildren<Partial<FlexProps> & {
    member?: Member;
    imageSlot?: React.ReactNode;
    gender?: String;
} & {
    breakpoint?: "base" | "large" | "medium";
} & {
    overrides?: MemberHeroResponsiveLayoutOverridesProps | undefined | null;
}>;
export default function MemberHeroResponsiveLayout(props: MemberHeroResponsiveLayoutProps): React.ReactElement;
