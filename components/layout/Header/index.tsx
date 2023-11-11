import React from "react";

import { AppBar, Toolbar, Container, Theme, useScrollTrigger, Slide, Box } from "@mui/material";
import { SxProps } from "@mui/system/styleFunctionSx/styleFunctionSx";

import { appBar, toolBar, appBarTransparent, appBarWhite, appBarWithSidebar } from "./styles";

interface HideOnScrollProps {
    children: React.ReactElement;
}
const HideOnScroll = ({ children }: HideOnScrollProps) => {
    const trigger = useScrollTrigger({
        threshold: 50,
        disableHysteresis: true,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
};

interface HeaderProps {
    children: any;
    isSidebar?: boolean;
    isTransparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({ children, isTransparent, isSidebar }) => {
    const getAppBarStyles = () =>
        [appBar, isTransparent ? appBarTransparent : appBarWhite, isSidebar && appBarWithSidebar] as SxProps<Theme>;
    const toolbar = <Toolbar disableGutters sx={toolBar}>{children}</Toolbar>;

    return (
        <HideOnScroll>
            <AppBar position={isTransparent ? "fixed" : "static"} sx={getAppBarStyles()}>
                <Container maxWidth="lg">{toolbar}</Container>
            </AppBar>
        </HideOnScroll>
    );
};

export default Header;
