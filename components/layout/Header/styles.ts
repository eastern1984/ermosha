import { SxProps } from "@mui/system/styleFunctionSx/styleFunctionSx";
import { alpha, Theme } from "@mui/material";

export const SIDEBAR_WIDTH = 252;

export const appBar: SxProps<Theme> = {
    background: "transparent",
    height: "auto",
    boxShadow: "none",
    borderBottom: theme => `1px solid ${alpha(theme.palette.common.white, 0.2)}`,
    zIndex: theme => theme.zIndex.drawer + 1,
};

export const appBarTransparent: SxProps<Theme> = {
    background: "transparent",
};

export const appBarWithSidebar: SxProps<Theme> = {
    pl: { md: `${SIDEBAR_WIDTH}px` },
};

export const appBarWhite: SxProps<Theme> = {
    background: theme => theme.palette.common.white,
    borderBottom: theme => `1px solid ${alpha(theme.palette.common.black, 0.1)}`,
};

export const toolBar: SxProps<Theme> = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    flexDirection: "row",
};

export const appLogo: SxProps<Theme> = {
    color: theme => theme.palette.common.white,
    cursor: "pointer",
};

export const appLogoGradient: SxProps<Theme> = {
    backgroundImage: theme => `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    backgroundClip: "text",
    textFillColor: "transparent",
};

export const navLink: SxProps<Theme> = {
    color: theme => theme.palette.common.white,
    mx: "12px",
    position: "relative",
    "&:hover, &:active, &:focus": {
        opacity: "0.5",
        color: theme => theme.palette.common.white,
        textDecoration: 'none'
    },
};

export const blackLink: SxProps<Theme> = {
    color: theme => theme.palette.common.black,
    "&:hover, &:active, &:focus": {
        color: theme => theme.palette.common.black,
    },
};

export const activeNavLink: SxProps<Theme> = {
    "&:after": {
        content: '""',
        height: "2px",
        width: "100%",
        bgcolor: "primary.main",
        position: "absolute",
        bottom: "-21px",
        left: 0,
    },
};

export const border: SxProps<Theme> = {
    borderColor: "common.white",
    backgroundColor: "common.white",
    opacity: 0.2,
    borderWidth: "1px",
    height: "20px",
    my: "10px",
    color: "red",
};

export const borderBlack: SxProps<Theme> = {
    borderColor: "common.black",
    backgroundColor: "common.black",
};

export const flexWrapper: SxProps<Theme> = {
    display: "flex",
    alignItems: "center",
};
