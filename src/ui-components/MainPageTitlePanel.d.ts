/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MainPageTitlePanelOverridesProps = {
    MainPageTitlePanel?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    HeroLayout3?: PrimitiveOverrideProps<FlexProps>;
    "Type Lock Up"?: PrimitiveOverrideProps<FlexProps>;
    Mission?: PrimitiveOverrideProps<TextProps>;
    "Body Area"?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    Lede?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MainPageTitlePanelProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: MainPageTitlePanelOverridesProps | undefined | null;
}>;
export default function MainPageTitlePanel(props: MainPageTitlePanelProps): React.ReactElement;
