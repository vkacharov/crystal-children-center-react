/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DividerProps, FlexProps, IconProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResponsiveNavBarOverridesProps = {
    ResponsiveNavBar?: PrimitiveOverrideProps<FlexProps>;
    Navigation?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    "Logo_text_white 1"?: PrimitiveOverrideProps<ImageProps>;
    Divider37852694?: PrimitiveOverrideProps<DividerProps>;
    HomeFrame?: PrimitiveOverrideProps<FlexProps>;
    Vector38222704?: PrimitiveOverrideProps<IconProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    External?: PrimitiveOverrideProps<FlexProps>;
    DonateFrame?: PrimitiveOverrideProps<FlexProps>;
    Vector38312708?: PrimitiveOverrideProps<IconProps>;
    donate?: PrimitiveOverrideProps<TextProps>;
    Divider37782775?: PrimitiveOverrideProps<DividerProps>;
    SignoutFrame?: PrimitiveOverrideProps<FlexProps>;
    Vector38222709?: PrimitiveOverrideProps<IconProps>;
    signout?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ResponsiveNavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    onSignOutClick?: (event: SyntheticEvent) => void;
} & {
    breakpoint?: "base" | "large" | "medium" | "small";
} & {
    overrides?: ResponsiveNavBarOverridesProps | undefined | null;
}>;
export default function ResponsiveNavBar(props: ResponsiveNavBarProps): React.ReactElement;
