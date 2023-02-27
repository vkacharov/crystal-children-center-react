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
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text, View, useBreakpointValue } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function MemberSummaryPost(props) {
  const {
    member,
    imageSlot,
    nullString,
    onEditIconClick,
    onPictureIconClick,
    onDeleteIconClick,
    isAdmin = false,
    gender = " ",
    overrides: overridesProp,
    ...restProp
  } = props;
  const variants = [
    {
      overrides: {
        ImageSlot: {},
        Name: {},
        EditIcon: {},
        EditIconFrame: {},
        DeleteIcon: {},
        DeleteIconFrame: {},
        "Frame 419": {},
        Frame36792698: {},
        Sponsor: {},
        Frame36692723: {},
        Age: {},
        Frame38142701: {},
        Headline: {},
        Summary: {},
        Article: {},
        MyIcon: {},
        ReadMore: {},
        "Read more": {},
        Text: {},
        Body: {},
        MemberSummaryPost: {},
      },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        ImageSlot: { width: "290px" },
        Name: {},
        EditIcon: {},
        EditIconFrame: {},
        DeleteIcon: {},
        DeleteIconFrame: {},
        "Frame 419": { display: "none" },
        Frame36792698: {},
        Sponsor: {},
        Frame36692723: {},
        Age: {},
        Frame38142701: {},
        Headline: {},
        Summary: {},
        Article: {},
        MyIcon: {},
        ReadMore: {},
        "Read more": {},
        Text: { shrink: "0", alignSelf: "stretch" },
        Body: {
          direction: "column",
          width: "unset",
          alignItems: "center",
          alignSelf: "stretch",
        },
        MemberSummaryPost: { width: "330px", padding: "18px 18px 18px 18px" },
      },
      variantValues: { breakpoint: "small" },
    },
    {
      overrides: {
        ImageSlot: { width: "275px" },
        Name: {},
        EditIcon: {},
        EditIconFrame: {},
        DeleteIcon: {},
        DeleteIconFrame: {},
        "Frame 419": { display: "none" },
        Frame36792698: {},
        Sponsor: {},
        Frame36692723: {},
        Age: {},
        Frame38142701: {},
        Headline: {},
        Summary: {},
        Article: {},
        MyIcon: {},
        ReadMore: {},
        "Read more": {},
        Text: { shrink: "0", alignSelf: "stretch" },
        Body: {
          direction: "column",
          width: "unset",
          alignItems: "center",
          alignSelf: "stretch",
        },
        MemberSummaryPost: { width: "300px", padding: "12px 12px 12px 12px" },
      },
      variantValues: { breakpoint: "base" },
    },
    {
      overrides: {
        ImageSlot: {},
        Name: {},
        EditIcon: {},
        EditIconFrame: {},
        DeleteIcon: {},
        DeleteIconFrame: {},
        "Frame 419": {},
        Frame36792698: {},
        Sponsor: {},
        Frame36692723: {},
        Age: {},
        Frame38142701: {},
        Headline: {},
        Summary: {},
        Article: {},
        MyIcon: {},
        ReadMore: {},
        "Read more": {},
        Text: {},
        Body: {},
        MemberSummaryPost: {},
      },
      variantValues: { breakpoint: "medium" },
    },
  ];
  const breakpointHook = useBreakpointValue({
    base: "base",
    small: "small",
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
  const nameOnClick = useNavigateAction({
    type: "url",
    url: `${"/member/"}${member?.id}`,
  });
  const readmoreOnClick = useNavigateAction({
    type: "url",
    url: `${"/member/"}${member?.id}`,
  });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "MemberSummaryPost")}
      {...rest}
    >
      <Flex
        gap="20px"
        direction="row"
        width="567px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Body")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="250px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          display="flex"
          children={imageSlot}
          {...getOverrideProps(overrides, "ImageSlot")}
        ></Flex>
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Text")}
        >
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
            {...getOverrideProps(overrides, "Headline")}
          >
            <Flex
              gap="0"
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
              {...getOverrideProps(overrides, "Frame36792698")}
            >
              <Text
                fontFamily="Inter"
                fontSize="22px"
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
                className="action-link"
                children={member?.name}
                onClick={() => {
                  nameOnClick();
                }}
                {...getOverrideProps(overrides, "Name")}
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
                {...getOverrideProps(overrides, "Frame 419")}
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
                  className="action-link"
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
                  className="action-link"
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
            <Flex
              gap="16px"
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
              {...getOverrideProps(overrides, "Frame36692723")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="600"
                color="rgba(0,0,0,1)"
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
                children={`${"Angel Family: "}${member?.sponsor}`}
                {...getOverrideProps(overrides, "Sponsor")}
              ></Text>
            </Flex>
            <Flex
              gap="16px"
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
              {...getOverrideProps(overrides, "Frame38142701")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="300"
                color="rgba(92,102,112,1)"
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
                children={`${member?.age}${" year old "}${gender}`}
                {...getOverrideProps(overrides, "Age")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="16px"
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
            {...getOverrideProps(overrides, "Article")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
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
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={member?.bio}
              {...getOverrideProps(overrides, "Summary")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            width="184px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            className="action-link"
            onClick={() => {
              readmoreOnClick();
            }}
            {...getOverrideProps(overrides, "Read more")}
          >
            <MyIcon
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              type="arrow-right"
              {...getOverrideProps(overrides, "MyIcon")}
            ></MyIcon>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              textDecoration="underline"
              letterSpacing="0.01px"
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
              children="Read more"
              {...getOverrideProps(overrides, "ReadMore")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
