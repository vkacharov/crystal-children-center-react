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
  Icon,
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
        Vector38222704: {},
        Home: {},
        HomeFrame: {},
        Navigation: {},
        Vector38312708: {},
        donate: {},
        DonateFrame: {},
        Divider37782775: {},
        Vector38222709: {},
        signout: {},
        SignoutFrame: {},
        External: {},
        ResponsiveNavBar: {},
      },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        "Logo_text_white 1": { width: "45px", height: "45px", shrink: "0" },
        Logo: { width: "45px", height: "45px" },
        Divider37852694: { height: "24px" },
        Vector38222704: {},
        Home: { display: "none" },
        HomeFrame: {},
        Navigation: { gap: "14px", justifyContent: "center" },
        Vector38312708: {},
        donate: { display: "none", children: "v" },
        DonateFrame: {
          gap: "10px",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        },
        Divider37782775: {},
        Vector38222709: {},
        signout: { display: "none" },
        SignoutFrame: { gap: "10px" },
        External: { gap: "14px", justifyContent: "center" },
        ResponsiveNavBar: { width: "350px", padding: "6px 18px 6px 18px" },
      },
      variantValues: { breakpoint: "small" },
    },
    {
      overrides: {
        "Logo_text_white 1": {},
        Logo: {},
        Divider37852694: { height: "24px" },
        Vector38222704: {},
        Home: {},
        HomeFrame: { gap: "8px" },
        Navigation: { gap: "32px", justifyContent: "center" },
        Vector38312708: {},
        donate: {},
        DonateFrame: { gap: "8px" },
        Divider37782775: {},
        Vector38222709: {},
        signout: {},
        SignoutFrame: { gap: "8px" },
        External: { gap: "32px" },
        ResponsiveNavBar: { width: "1260px" },
      },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        "Logo_text_white 1": { width: "45px", height: "45px", shrink: "0" },
        Logo: { width: "45px", height: "45px" },
        Divider37852694: { height: "24px" },
        Vector38222704: {},
        Home: { fontSize: "18px", display: "none", letterSpacing: "0.03px" },
        HomeFrame: { gap: "4px" },
        Navigation: { gap: "14px" },
        Vector38312708: {},
        donate: { display: "none", children: "v" },
        DonateFrame: {
          gap: "10px",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        },
        Divider37782775: {},
        Vector38222709: {},
        signout: {
          fontSize: "18px",
          lineHeight: "21.784090042114258px",
          display: "none",
        },
        SignoutFrame: {
          gap: "10px",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        },
        External: { gap: "14px" },
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
  const donateFrameOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "https://www.chrystalchildrenscenter.com/donate/",
  });
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
        gap="18px"
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
          gap="6px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
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
          <Icon
            width="23px"
            height="17.5px"
            viewBox={{ minX: 0, minY: 0, width: 23, height: 17.5 }}
            paths={[
              {
                d: "M3 17C3 17.2761 3.22386 17.5 3.5 17.5L19.5 17.5C19.7761 17.5 20 17.2761 20 17L20 9L22.189 9C22.4675 9 22.5957 8.65348 22.3843 8.47222L19.5 6L19.5 1.2C19.5 1.08954 19.4105 1 19.3 1L16.2 1C16.0895 1 16 1.08954 16 1.2L16 3.5L12.4238 0.718485C11.8808 0.296159 11.1201 0.297302 10.5784 0.721257L0.68521 8.46375C0.460619 8.63952 0.584909 9 0.870103 9L3 9L3 17ZM14.5 17.5L8.5 17.5L8.5 11.5C8.5 10.9477 8.94772 10.5 9.5 10.5L13.5 10.5C14.0523 10.5 14.5 10.9477 14.5 11.5L14.5 17.5Z",
                fill: "rgba(13,26,38,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector38222704")}
          ></Icon>
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
        gap="18px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "External")}
      >
        <Flex
          gap="6px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          className="action-link"
          onClick={() => {
            donateFrameOnClick();
          }}
          {...getOverrideProps(overrides, "DonateFrame")}
        >
          <Icon
            width="20px"
            height="18.35px"
            viewBox={{ minX: 0, minY: 0, width: 20, height: 18.35009765625 }}
            paths={[
              {
                d: "M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z",
                fill: "rgba(13,26,38,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector38312708")}
          ></Icon>
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
            className=""
            children="Donate"
            {...getOverrideProps(overrides, "donate")}
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
          gap="6px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          className="action-link"
          onClick={onSignOutClick}
          {...getOverrideProps(overrides, "SignoutFrame")}
        >
          <Icon
            width="16px"
            height="16px"
            viewBox={{ minX: 0, minY: 0, width: 16, height: 16 }}
            paths={[
              {
                d: "M8 0L6.59 1.41L12.17 7L0 7L0 9L12.17 9L6.59 14.59L8 16L16 8L8 0Z",
                fill: "rgba(13,26,38,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector38222709")}
          ></Icon>
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
