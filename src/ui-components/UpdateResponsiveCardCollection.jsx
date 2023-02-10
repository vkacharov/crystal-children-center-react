/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Update } from "../models";
import {
  createDataStorePredicate,
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { SortDirection } from "@aws-amplify/datastore";
import UpdateResponsiveCard from "./UpdateResponsiveCard";
import { Collection } from "@aws-amplify/ui-react";
export default function UpdateResponsiveCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsFilterObj = { field: "memberID", operand: "one", operator: "eq" };
  const itemsFilter = createDataStorePredicate(itemsFilterObj);
  const itemsPagination = { sort: (s) => s.date(SortDirection.DESCENDING) };
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Update,
    criteria: itemsFilter,
    pagination: itemsPagination,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={8}
      direction="column"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "UpdateResponsiveCardCollection")}
      {...rest}
    >
      {(item, index) => (
        <UpdateResponsiveCard
          update={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></UpdateResponsiveCard>
      )}
    </Collection>
  );
}
