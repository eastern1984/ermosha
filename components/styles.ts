import { SxProps } from "@mui/system/styleFunctionSx/styleFunctionSx";
import { Theme } from "@mui/material";

export const item: SxProps<Theme> = {
    fontSize: "16px",
    fontWeight: "600"
};

export const itemWrapper: SxProps<Theme> = {
    "& a": {
        textDecoration: "none",
        height: "100%"
    }
};

export const articleWrapper: SxProps<Theme> = {

    "& a": {
        textDecoration: "none",
        height: "100%"
    }
};

