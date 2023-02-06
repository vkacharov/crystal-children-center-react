/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import {
  Divider,
  Flex,
  Text,
  View,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function UpdateResponsiveCard(props) {
  const {
    update,
    imageSlot,
    onEditIconClick,
    onDeleteIconClick,
    isAdmin = false,
    overrides: overridesProp,
    ...restProp
  } = props;
  const variants = [
    {
      overrides: {
        imageSlot: {},
        Date: {},
        EditIcon: {},
        EditIconFrame: {},
        DeleteIcon: {},
        DeleteIconFrame: {},
        "Frame 459": {},
        Title: {},
        Divider: {},
        Summary: {},
        Features: {},
        "Card Area": {},
        UpdateResponsiveCard: {},
      },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        imageSlot: { direction: "row" },
        Date: {},
        EditIcon: {},
        EditIconFrame: {},
        DeleteIcon: {},
        DeleteIconFrame: {},
        "Frame 459": { display: "none" },
        Title: {},
        Divider: {},
        Summary: {},
        Features: {},
        "Card Area": {
          shrink: "0",
          padding: "16px 16px 16px 16px",
          alignSelf: "stretch",
        },
        UpdateResponsiveCard: {
          direction: "column",
          width: "330px",
          justifyContent: "center",
        },
      },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        imageSlot: { direction: "row", width: "275px" },
        Date: {},
        EditIcon: {},
        EditIconFrame: {},
        DeleteIcon: {},
        DeleteIconFrame: {},
        "Frame 459": { display: "none" },
        Title: {},
        Divider: {},
        Summary: {},
        Features: {},
        "Card Area": {
          shrink: "0",
          padding: "16px 16px 16px 16px",
          alignSelf: "stretch",
        },
        UpdateResponsiveCard: {
          direction: "column",
          width: "275px",
          justifyContent: "center",
        },
      },
      variantValues: { breakpoint: "base" },
    },
  ];
  const breakpointHook = useBreakpointValue({
    base: "base",
    medium: "medium",
    large: "large",
  });
  const rest = { style: { transition: "all 0.25s" }, ...restProp };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, {
      breakpoint: breakpointHook,
      ...props,
    }),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="row"
      width="960px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "UpdateResponsiveCard")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="330px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        children={imageSlot}
        {...getOverrideProps(overrides, "imageSlot")}
      ></Flex>
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="32px 32px 32px 32px"
        backgroundColor="rgba(255,255,255,1)"
        display="flex"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Title")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="25px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={update?.date}
            {...getOverrideProps(overrides, "Date")}
          ></Text>
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display={isAdmin && isAdmin == true ? "flex" : "none"}
            {...getOverrideProps(overrides, "Frame 459")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              onClick={onEditIconClick}
              {...getOverrideProps(overrides, "EditIconFrame")}
            >
              <MyIcon
                width="24px"
                height="24px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                position="absolute"
                top="0px"
                left="0px"
                padding="0px 0px 0px 0px"
                type="edit"
                {...getOverrideProps(overrides, "EditIcon")}
              ></MyIcon>
            </View>
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              onClick={onDeleteIconClick}
              {...getOverrideProps(overrides, "DeleteIconFrame")}
            >
              <MyIcon
                width="24px"
                height="24px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                position="absolute"
                top="0px"
                left="0px"
                padding="0px 0px 0px 0px"
                type="delete"
                {...getOverrideProps(overrides, "DeleteIcon")}
              ></MyIcon>
            </View>
          </Flex>
        </Flex>
        <Divider
          width="40px"
          shrink="0"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider")}
        ></Divider>
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Features")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={update?.summary}
            {...getOverrideProps(overrides, "Summary")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
