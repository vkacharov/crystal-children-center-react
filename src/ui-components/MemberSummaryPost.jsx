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
import {
  Flex,
  Icon,
  Text,
  View,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
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
    hasRecentUpdates = false,
    overrides: overridesProp,
    ...restProp
  } = props;
  const variants = [
    {
      overrides: {
        ImageSlot: {},
        Vector: {},
        "bell-solid 1": {},
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
        Vector: {
          paths: [
            {
              d: "M7.99932 0C7.36717 0 6.85646 0.502734 6.85646 1.125L6.85646 1.8C4.24932 2.32031 2.28503 4.59141 2.28503 7.3125L2.28503 7.97344C2.28503 9.62578 1.66717 11.2219 0.552888 12.4594L0.288602 12.7512C-0.0113979 13.0816 -0.0828265 13.5563 0.0993163 13.9605C0.281459 14.3648 0.692173 14.625 1.14217 14.625L14.8565 14.625C15.3065 14.625 15.7136 14.3648 15.8993 13.9605C16.085 13.5563 16.01 13.0816 15.71 12.7512L15.4457 12.4594C14.3315 11.2219 13.7136 9.6293 13.7136 7.97344L13.7136 7.3125C13.7136 4.59141 11.7493 2.32031 9.14217 1.8L9.14217 1.125C9.14217 0.502734 8.63146 0 7.99932 0ZM9.61717 17.3426C10.0457 16.9207 10.285 16.3477 10.285 15.75L7.99932 15.75L5.7136 15.75C5.7136 16.3477 5.95289 16.9207 6.38146 17.3426C6.81003 17.7645 7.39217 18 7.99932 18C8.60646 18 9.1886 17.7645 9.61717 17.3426Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ],
        },
        "bell-solid 1": {},
        Name: {},
        EditIcon: {},
        EditIconFrame: {},
        DeleteIcon: {},
        DeleteIconFrame: {},
        "Frame 419": { display: "none" },
        Frame36792698: { gap: "6px" },
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
        Vector: {
          paths: [
            {
              d: "M7.99932 0C7.36717 0 6.85646 0.502734 6.85646 1.125L6.85646 1.8C4.24932 2.32031 2.28503 4.59141 2.28503 7.3125L2.28503 7.97344C2.28503 9.62578 1.66717 11.2219 0.552888 12.4594L0.288602 12.7512C-0.0113979 13.0816 -0.0828265 13.5563 0.0993163 13.9605C0.281459 14.3648 0.692173 14.625 1.14217 14.625L14.8565 14.625C15.3065 14.625 15.7136 14.3648 15.8993 13.9605C16.085 13.5563 16.01 13.0816 15.71 12.7512L15.4457 12.4594C14.3315 11.2219 13.7136 9.6293 13.7136 7.97344L13.7136 7.3125C13.7136 4.59141 11.7493 2.32031 9.14217 1.8L9.14217 1.125C9.14217 0.502734 8.63146 0 7.99932 0ZM9.61717 17.3426C10.0457 16.9207 10.285 16.3477 10.285 15.75L7.99932 15.75L5.7136 15.75C5.7136 16.3477 5.95289 16.9207 6.38146 17.3426C6.81003 17.7645 7.39217 18 7.99932 18C8.60646 18 9.1886 17.7645 9.61717 17.3426Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ],
        },
        "bell-solid 1": {},
        Name: {},
        EditIcon: {},
        EditIconFrame: {},
        DeleteIcon: {},
        DeleteIconFrame: {},
        "Frame 419": { display: "none" },
        Frame36792698: { gap: "6px" },
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
        Vector: {
          paths: [
            {
              d: "M7.99932 0C7.36717 0 6.85646 0.502734 6.85646 1.125L6.85646 1.8C4.24932 2.32031 2.28503 4.59141 2.28503 7.3125L2.28503 7.97344C2.28503 9.62578 1.66717 11.2219 0.552888 12.4594L0.288602 12.7512C-0.0113979 13.0816 -0.0828265 13.5563 0.0993163 13.9605C0.281459 14.3648 0.692173 14.625 1.14217 14.625L14.8565 14.625C15.3065 14.625 15.7136 14.3648 15.8993 13.9605C16.085 13.5563 16.01 13.0816 15.71 12.7512L15.4457 12.4594C14.3315 11.2219 13.7136 9.6293 13.7136 7.97344L13.7136 7.3125C13.7136 4.59141 11.7493 2.32031 9.14217 1.8L9.14217 1.125C9.14217 0.502734 8.63146 0 7.99932 0ZM9.61717 17.3426C10.0457 16.9207 10.285 16.3477 10.285 15.75L7.99932 15.75L5.7136 15.75C5.7136 16.3477 5.95289 16.9207 6.38146 17.3426C6.81003 17.7645 7.39217 18 7.99932 18C8.60646 18 9.1886 17.7645 9.61717 17.3426Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ],
        },
        "bell-solid 1": {},
        Name: {},
        EditIcon: {},
        EditIconFrame: {},
        DeleteIcon: {},
        DeleteIconFrame: {},
        "Frame 419": {},
        Frame36792698: { gap: "6px" },
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
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Frame36792698")}
            >
              <View
                width="16px"
                height="18px"
                display={
                  hasRecentUpdates && hasRecentUpdates == true
                    ? "inherit"
                    : "none"
                }
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                title="a new update was added recently"
                {...getOverrideProps(overrides, "bell-solid 1")}
              >
                <Icon
                  width="16px"
                  height="18px"
                  viewBox={{ minX: 0, minY: 0, width: 16, height: 18 }}
                  paths={[
                    {
                      d: "M7.99921 0C7.36708 0 6.85637 0.502734 6.85637 1.125L6.85637 1.8C4.24926 2.32031 2.285 4.59141 2.285 7.3125L2.285 7.97344C2.285 9.62578 1.66715 11.2219 0.552881 12.4594L0.288598 12.7512C-0.0113978 13.0816 -0.0828254 13.5563 0.099315 13.9605C0.281456 14.3648 0.692164 14.625 1.14216 14.625L14.8563 14.625C15.3063 14.625 15.7134 14.3648 15.8991 13.9605C16.0848 13.5563 16.0098 13.0816 15.7098 12.7512L15.4455 12.4594C14.3313 11.2219 13.7134 9.6293 13.7134 7.97344L13.7134 7.3125C13.7134 4.59141 11.7492 2.32031 9.14205 1.8L9.14205 1.125C9.14205 0.502734 8.63135 0 7.99921 0ZM9.61705 17.3426C10.0456 16.9207 10.2849 16.3477 10.2849 15.75L7.99921 15.75L5.71353 15.75C5.71353 16.3477 5.95281 16.9207 6.38138 17.3426C6.80994 17.7645 7.39208 18 7.99921 18C8.60635 18 9.18848 17.7645 9.61705 17.3426Z",
                      fill: "rgba(0,0,0,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0.01%"
                  right="-0.01%"
                  {...getOverrideProps(overrides, "Vector")}
                ></Icon>
              </View>
              <Text
                fontFamily="Inter"
                fontSize="22px"
                fontWeight="700"
                color="rgba(13,26,38,1)"
                lineHeight="22px"
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
