import { SxProps } from "@mui/system/styleFunctionSx/styleFunctionSx";
import { Theme } from "@mui/material";

export const colors = {
    adminBankLabelText: "rgba(255, 174, 27)",
    adminBankLabel: "rgba(255, 174, 27, 0.1)",
    activeFlagBackground: "#D4EFEC",
    inactiveFlagBackground: "rgba(255, 222, 230, 1)",
    linksNormal: "#009DE9",
    brandPrimary: "#2EB895",
    brandSecondary: "#044D72",
    labelNew: "rgba(7, 148, 83, 0.15)",
    labelImproved: "rgba(7, 148, 83, 0.15)",
    labelFixed: "#FFEADE",
    activeColor: "#0A9485",
    inactiveColor: "#72003D"
};

export const HEADER_HEIGHT = 64;
export const FOOTER_WITH_LINKS_HEIGHT = 347;
export const HEADER_WITHOUT_LINKS_HEIGHT = 50;
export const SIDEBAR_WIDTH = 252;

export const navLink: SxProps<Theme> = {
    color: theme => theme.palette.common.black,
    fontSize: { xs: "14px", sm: "inherit" },
    mx: { xs: "5px", sm: "12px" },
    "&:hover, &:active, &:focus": {
        opacity: "0.5",
        color: theme => theme.palette.common.black,
        textDecoration: 'none'
    },
};

export const bodyWrapper: SxProps<Theme> = {
    ml: { md: `${SIDEBAR_WIDTH}px` },
    minHeight: `calc(100vh - ${HEADER_HEIGHT + HEADER_WITHOUT_LINKS_HEIGHT}px)`,
};
export const container: SxProps<Theme> = {
    minHeight: `calc(100vh - ${HEADER_HEIGHT + HEADER_WITHOUT_LINKS_HEIGHT}px)`,
};

export const sidebarWrapper: SxProps<Theme> = {
    width: `${SIDEBAR_WIDTH}px`,
    bgcolor: "secondary.dark",
    height: "100%",
};

export const topHeaderWrapper: SxProps<Theme> = {
    margin: "24px 24px 36px 24px",
};

export const toolbarIcon: SxProps<Theme> = {
    mr: "10px",
    display: { md: "none", xs: "block" },
    color: "text.primary"
};

export const menuSubButton: SxProps<Theme> = {

    margin: "4px 8px",
    ml: "16px",
    borderRadius: "8px",
    "&:hover": {
        bgcolor: "secondary.main",
    },
    "&.Mui-selected": {
        bgcolor: "secondary.main",
    },
};

export const menuButton: SxProps<Theme> = {
    margin: "4px 8px",
    borderRadius: "8px",
    "&:hover": {
        bgcolor: "secondary.main",
    },
    "&.Mui-selected": {
        bgcolor: "secondary.main",
    },
};

export const menuIcon: SxProps<Theme> = {
    minWidth: "40px",
    color: "common.white",
};

export const rootAdmin: SxProps<Theme> = {
    backgroundColor: colors.activeFlagBackground,
    color: "success.main",
    borderRadius: "4px",
    padding: "2px 8px 0 8px",
    width: "fit-content",
};

export const bankAdmin: SxProps<Theme> = {
    color: colors.adminBankLabelText,
    backgroundColor: colors.adminBankLabel,
    borderRadius: "4px",
    padding: "2px 8px 0 8px",
    width: "fit-content",
};

export const breadcrumbWrapper: SxProps<Theme> = {
    py: "8px",
    "& a": {
        color: "grey",
        textDecoration: "none"
    }
};
