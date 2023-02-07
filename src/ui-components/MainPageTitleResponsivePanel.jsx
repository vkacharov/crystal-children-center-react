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
  Flex,
  Image,
  Text,
  View,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
export default function MainPageTitleResponsivePanel(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        image: {},
        Mission: {},
        Name: {},
        Lede: {},
        "Body Area": {},
        "Type Lock Up": {},
        HeroLayout3: {},
        MainPageTitleResponsivePanel: {},
      },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        image: {},
        Mission: { fontSize: "14px", width: "640px" },
        Name: { fontSize: "37px" },
        Lede: { fontSize: "16px", letterSpacing: "0.01px" },
        "Body Area": {
          gap: "14px",
          width: "640px",
          justifyContent: "center",
          alignItems: "center",
        },
        "Type Lock Up": { gap: "21px" },
        HeroLayout3: {
          width: "750px",
          height: "428.57px",
          padding: "48px 72px 48px 72px",
        },
        MainPageTitleResponsivePanel: { width: "750px", height: "428.57px" },
      },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        image: { height: "99.5%", top: "0.28%", bottom: "0.21%" },
        Mission: { fontSize: "14px", display: "none", children: "CCC" },
        Name: { fontSize: "24px" },
        Lede: {
          fontSize: "16px",
          display: "none",
          letterSpacing: "0.01px",
          children: "CCC",
        },
        "Body Area": {},
        "Type Lock Up": {},
        HeroLayout3: {
          width: "350px",
          height: "200px",
          top: "calc(50% - 100px - -0.07px)",
          padding: "10px 10px 10px 10px",
        },
        MainPageTitleResponsivePanel: { width: "350px", height: "201px" },
      },
      variantValues: { breakpoint: "small" },
    },
    {
      overrides: {
        image: { height: "98.52%", top: "0.66%", bottom: "0.81%" },
        Mission: { fontSize: "14px", display: "none", children: "CCC" },
        Name: { fontSize: "16px" },
        Lede: {
          fontSize: "16px",
          display: "none",
          letterSpacing: "0.01px",
          children: "CCC",
        },
        "Body Area": {},
        "Type Lock Up": {},
        HeroLayout3: {
          width: "300px",
          height: "173.4px",
          top: "calc(50% - 86.7px - 0.3px)",
          padding: "10px 10px 10px 10px",
        },
        MainPageTitleResponsivePanel: { width: "300px", height: "174px" },
      },
      variantValues: { breakpoint: "base" },
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
  return (
    <View
      width="1260px"
      height="720px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "MainPageTitleResponsivePanel")}
      {...rest}
    >
      <Image
        width="100%"
        height="100%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://i0.wp.com/www.chrystalchildrenscenter.com/wp-content/uploads/2020/05/rehabilitation.jpg?w=635&ssl=1"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="10px"
        direction="column"
        width="1260px"
        height="720px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="160px 240px 160px 240px"
        backgroundColor="rgba(0,0,0,0.5)"
        display="flex"
        {...getOverrideProps(overrides, "HeroLayout3")}
      >
        <Flex
          gap="24px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Type Lock Up")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            fontStyle="italic"
            lineHeight="24px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Every Child Deserves A Loving Family"
            {...getOverrideProps(overrides, "Mission")}
          ></Text>
          <Flex
            gap="16px"
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
            {...getOverrideProps(overrides, "Body Area")}
          >
            <Text
              fontFamily="Inter"
              fontSize="44px"
              fontWeight="600"
              color="rgba(255,255,255,1)"
              lineHeight="30px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Crystal Children’s Center"
              {...getOverrideProps(overrides, "Name")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              fontStyle="italic"
              lineHeight="24px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.05px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="They need an advocate, a supporter, and a protector. Someone they belong to."
              {...getOverrideProps(overrides, "Lede")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
    </View>
  );
}
