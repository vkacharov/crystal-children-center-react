/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MemberSummaryCardProps } from "./MemberSummaryCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MemberSummaryCardCollectionOverridesProps = {
    MemberSummaryCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    MemberSummaryCard?: MemberSummaryCardProps;
} & EscapeHatchProps;
export declare type MemberSummaryCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => MemberSummaryCardProps;
} & {
    overrides?: MemberSummaryCardCollectionOverridesProps | undefined | null;
}>;
export default function MemberSummaryCardCollection(props: MemberSummaryCardCollectionProps): React.ReactElement;
