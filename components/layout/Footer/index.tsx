import React from "react";

import {
    Box,
    Container,
    Typography,
    Link as MUILink,
} from "@mui/material";

import {
    copyrightWrapper,
    flexContainer,
} from "./styles";

interface Props {
    isSidebar?: boolean;
}


const Footer: React.FC<Props> = ({ isSidebar }) => {
    return (
        <Box sx={copyrightWrapper}>
            <Container maxWidth="lg" sx={flexContainer}>
                <Typography color="text.secondary">&copy; {new Date().getFullYear()} All rights reserved.</Typography>
            </Container>
        </Box>
    );
};

export default Footer;
