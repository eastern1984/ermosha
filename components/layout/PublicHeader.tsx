import React from "react";
import Link from "next/link";

import { IconButton, Link as MUILink, Stack, Typography, useMediaQuery } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import { toolbarIcon, navLink } from "./styles";
import { Theme } from "@mui/system";
import Header from "./Header";

interface Props {
    isSidebar?: boolean;
    title: string;
    toggleOpen: () => void;
}

const PublicHeader: React.FC<Props> = ({ isSidebar, title, toggleOpen }) => {

    return (
        <Header isSidebar={isSidebar}>
            <Stack direction="row">
                <IconButton size="small" sx={toolbarIcon} onClick={toggleOpen}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" sx={{ lineHeight: { xs: "1.9", sm: "normal" } }}>{title}</Typography>
            </Stack>

            <Stack direction="row" alignItems="center">

            </Stack>
        </Header>
    );
};

export default PublicHeader;
