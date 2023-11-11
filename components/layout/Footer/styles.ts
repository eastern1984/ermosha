import { SxProps } from "@mui/system/styleFunctionSx/styleFunctionSx";
import { Theme, alpha } from "@mui/material";

export const flexContainerWrapper: SxProps<Theme> = {
    borderBottom: theme => `1px solid ${alpha(theme.palette.common.black, 0.1)}`,
    py: { xs: "40px", sm: "48px" },
};

export const flexContainer: SxProps<Theme> = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: { xs: "column", sm: "row" },
    alignItems: { xs: "", sm: "flex-start" },
};

export const copyrightWrapper: SxProps<Theme> = {
    py: "12px",
};

export const textGradient: SxProps<Theme> = {
    backgroundImage: theme => `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    backgroundClip: "text",
    textFillColor: "transparent",
    color: "text.primary",
};
export const logoWrapper: SxProps<Theme> = { mb: { xs: "10px", sm: "24px" }, minWidth: "200px" };
export const linksWrapper: SxProps<Theme> = { maxWidth: 740, width: "100%" };
