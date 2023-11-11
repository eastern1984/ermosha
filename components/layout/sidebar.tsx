import React, { useState } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  Box,
  Stack,
  Drawer,
  ListItemButton,
  List,
  Typography,
  useMediaQuery,
  Theme,
  Collapse,
} from "@mui/material";

import { sidebarWrapper, topHeaderWrapper, menuButton, menuSubButton } from "./styles";
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

interface Props {
  menu: any[];
  open: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<Props> = ({ open, onClose, menu }) => {
  const { push } = useRouter();
  const mdUp = useMediaQuery<Theme>(theme => theme.breakpoints.up("md"));
  const [collapsed, setCollapsed] = useState("");

  return (
    <>
      <Drawer open={open} onClose={onClose} variant={mdUp ? "permanent" : "temporary"} anchor="left">
        <Box sx={sidebarWrapper}>
          <Stack sx={topHeaderWrapper}>
            <Typography variant="h5" fontWeight="600" color="common.white" gutterBottom>
              OB Directory
            </Typography>
          </Stack>
          <List>
            {menu?.filter(v => !v.parent)
              .map(v => {
                const item = (<Box key={v.url}>
                  <ListItemButton selected={true} sx={menuButton} onClick={() => {
                    if (v.childrens.length !== 0) {
                      setCollapsed(collapsed ? "" : v.text)
                    }
                  }}>
                    <Stack direction="row" justifyContent="space-between" width="100%">
                      <Typography fontWeight="600" color="common.white">
                        {v.text}
                      </Typography>
                      {v.childrens.length > 0 && (collapsed === v.text ? <ExpandLess sx={{ color: "common.white" }} /> : <ExpandMore sx={{ color: "common.white" }} />)}
                    </Stack>
                  </ListItemButton>

                  <Collapse in={collapsed === v.text} timeout="auto" unmountOnExit>
                    {v.childrens.map((child: any) => (
                      <Link key={child.url} href={`/${child.url}`}>
                        <ListItemButton selected={true} sx={menuSubButton}>
                          <Typography fontWeight="600" color="common.white">
                            {child.text}
                          </Typography>
                        </ListItemButton>
                      </Link>
                    ))}
                  </Collapse>
                </Box>);
                return (
                  v.childrens.length > 0 ? item : <Link href={`/${v.url}`}>{item}</Link>
                )
              })}
          </List>
        </Box>
      </Drawer >
    </>
  );
};

export default Sidebar;
