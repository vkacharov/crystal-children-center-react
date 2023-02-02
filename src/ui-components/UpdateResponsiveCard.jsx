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
  Image,
  Text,
  View,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function UpdateResponsiveCard(props) {
  const {
    update,
    onPictureIconClick,
    overrides: overridesProp,
    ...restProp
  } = props;
  const variants = [
    {
      overrides: {
        image: {},
        Date: {},
        EditIcon: {},
        EditIconFrame: {},
        PictureIcon: {},
        PictureIconFrame: {},
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
        image: { height: "360px" },
        Date: {},
        EditIcon: {},
        EditIconFrame: {},
        PictureIcon: {},
        PictureIconFrame: {},
        DeleteIcon: {},
        DeleteIconFrame: {},
        "Frame 459": { display: "none" },
        Title: {},
        Divider: {},
        Summary: {},
        Features: {},
        "Card Area": { shrink: "0", alignSelf: "stretch" },
        UpdateResponsiveCard: {
          direction: "column",
          width: "unset",
          justifyContent: "center",
        },
      },
      variantValues: { breakpoint: "medium" },
    },
  ];
  const breakpointHook = useBreakpointValue({
    base: "medium",
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
      <Image
        width="330px"
        height="unset"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={update?.pictureUrl}
        {...getOverrideProps(overrides, "image")}
      ></Image>
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
            display="flex"
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
              onClick={onPictureIconClick}
              {...getOverrideProps(overrides, "PictureIconFrame")}
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
                type="group"
                {...getOverrideProps(overrides, "PictureIcon")}
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
