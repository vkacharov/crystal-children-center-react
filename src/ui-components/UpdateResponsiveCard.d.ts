/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Update } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DividerProps, FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UpdateResponsiveCardOverridesProps = {
    UpdateResponsiveCard?: PrimitiveOverrideProps<FlexProps>;
    imageSlot?: PrimitiveOverrideProps<FlexProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<FlexProps>;
    Date?: PrimitiveOverrideProps<TextProps>;
    "Frame 459"?: PrimitiveOverrideProps<FlexProps>;
    EditIconFrame?: PrimitiveOverrideProps<ViewProps>;
    EditIcon?: MyIconProps;
    DeleteIconFrame?: PrimitiveOverrideProps<ViewProps>;
    DeleteIcon?: MyIconProps;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Features?: PrimitiveOverrideProps<FlexProps>;
    Summary?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type UpdateResponsiveCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    update?: Update;
    imageSlot?: React.ReactNode;
    onEditIconClick?: (event: SyntheticEvent) => void;
    onDeleteIconClick?: (event: SyntheticEvent) => void;
    isAdmin?: Boolean;
} & {
    breakpoint?: "large" | "medium";
} & {
    overrides?: UpdateResponsiveCardOverridesProps | undefined | null;
}>;
export default function UpdateResponsiveCard(props: UpdateResponsiveCardProps): React.ReactElement;
