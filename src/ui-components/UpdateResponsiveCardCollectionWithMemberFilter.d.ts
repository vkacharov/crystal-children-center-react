/**
 * 
 * Modification of the generated UpdateResponsiveCardCollection which filters for a given Member id.
 * Following https://docs.amplify.aws/console/uibuilder/override/#modify-generated-code
 */
/* eslint-disable */
import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UpdateResponsiveCardProps } from "./UpdateResponsiveCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UpdateResponsiveCardCollectionOverridesProps = {
    UpdateResponsiveCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    UpdateResponsiveCard?: UpdateResponsiveCardProps;
} & EscapeHatchProps;
export declare type UpdateResponsiveCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => UpdateResponsiveCardProps;
} & {
    overrides?: UpdateResponsiveCardCollectionOverridesProps | undefined | null;
}>;
export default function UpdateResponsiveCardCollectionWithMemberFilter(props: UpdateResponsiveCardCollectionProps): React.ReactElement;
