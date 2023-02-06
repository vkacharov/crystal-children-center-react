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
  Divider,
  Flex,
  Image,
  Text,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
export default function ResponsiveNavBar(props) {
  const { onSignOutClick, overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        "Logo_text_white 1": {},
        Logo: {},
        Divider37852694: {},
        Home: {},
        HomeFrame: {},
        Navigation: {},
        Divider37852696: {},
        visit: {},
        VisitFrame: {},
        Divider37782775: {},
        signout: {},
        SignoutFrame: {},
        "Frame 321": {},
        ResponsiveNavBar: {},
      },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        "Logo_text_white 1": { width: "45px", height: "45px", shrink: "0" },
        Logo: { width: "45px", height: "45px" },
        Divider37852694: { height: "24px" },
        Home: {},
        HomeFrame: {},
        Navigation: { gap: "16px" },
        Divider37852696: { height: "24px" },
        visit: { display: "block", children: "v" },
        VisitFrame: {},
        Divider37782775: {},
        signout: {},
        SignoutFrame: {},
        "Frame 321": {},
        ResponsiveNavBar: { width: "350px", padding: "6px 18px 6px 18px" },
      },
      variantValues: { breakpoint: "small" },
    },
    {
      overrides: {
        "Logo_text_white 1": {},
        Logo: {},
        Divider37852694: { height: "24px" },
        Home: {},
        HomeFrame: {},
        Navigation: { gap: "32px", justifyContent: "center" },
        Divider37852696: {},
        visit: {
          display: "block",
          children: "Visit chrystalchildrenscenter.com",
        },
        VisitFrame: { display: "flex" },
        Divider37782775: {},
        signout: {},
        SignoutFrame: {},
        "Frame 321": {},
        ResponsiveNavBar: { width: "1260px" },
      },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        "Logo_text_white 1": { width: "45px", height: "45px", shrink: "0" },
        Logo: { width: "45px", height: "45px" },
        Divider37852694: { height: "24px" },
        Home: { fontSize: "18px", letterSpacing: "0.03px" },
        HomeFrame: {},
        Navigation: { gap: "10px" },
        Divider37852696: { height: "24px" },
        visit: { display: "block", children: "v" },
        VisitFrame: {},
        Divider37782775: {},
        signout: { fontSize: "18px", lineHeight: "21.784090042114258px" },
        SignoutFrame: {},
        "Frame 321": {},
        ResponsiveNavBar: {
          gap: "18px",
          width: "300px",
          padding: "6px 18px 6px 18px",
        },
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
  const logoOnClick = useNavigateAction({ type: "url", url: "/" });
  const homeFrameOnClick = useNavigateAction({ type: "url", url: "/" });
  return (
    <Flex
      gap="20px"
      direction="row"
      width="750px"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      padding="6px 32px 6px 32px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      className="page-header"
      marginBottom="1rem"
      {...getOverrideProps(overrides, "ResponsiveNavBar")}
      {...rest}
    >
      <Flex
        gap="40px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Navigation")}
      >
        <Flex
          gap="2px"
          direction="row"
          width="60px"
          height="60px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          display="flex"
          className="action-link"
          onClick={() => {
            logoOnClick();
          }}
          {...getOverrideProps(overrides, "Logo")}
        >
          <Image
            width="unset"
            height="unset"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src="/logo_text_cropped.png"
            {...getOverrideProps(overrides, "Logo_text_white 1")}
          ></Image>
        </Flex>
        <Divider
          height="60px"
          shrink="0"
          size="small"
          orientation="vertical"
          {...getOverrideProps(overrides, "Divider37852694")}
        ></Divider>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          className="action-link"
          onClick={() => {
            homeFrameOnClick();
          }}
          {...getOverrideProps(overrides, "HomeFrame")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.05px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Home"
            {...getOverrideProps(overrides, "Home")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 321")}
      >
        <Divider
          height="unset"
          display="none"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="vertical"
          {...getOverrideProps(overrides, "Divider37852696")}
        ></Divider>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="none"
          className="action-link"
          {...getOverrideProps(overrides, "VisitFrame")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24.204544067382812px"
            textAlign="left"
            display="none"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            className=""
            children="visit"
            {...getOverrideProps(overrides, "visit")}
          ></Text>
        </Flex>
        <Divider
          height="unset"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="vertical"
          {...getOverrideProps(overrides, "Divider37782775")}
        ></Divider>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          className="action-link"
          onClick={onSignOutClick}
          {...getOverrideProps(overrides, "SignoutFrame")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24.204544067382812px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Sign out"
            {...getOverrideProps(overrides, "signout")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
