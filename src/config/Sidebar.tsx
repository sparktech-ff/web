import {Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {useRouter} from "next/navigation";

export interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const Sidebar = (
  {
    open,
    setOpen,
  }: SidebarProps
) => {
  const router = useRouter();
  return (
    <Drawer open={open} onClose={() => setOpen(false)}>
      <List sx={{paddingRight: "30px"}}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{mr: 2}}
                onClick={() => setOpen(false)}
              >
                <MenuIcon/>
              </IconButton>
            </ListItemIcon>
            <ListItemText primary="Feature Flags" onClick={() => router.push('/')} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Terms and conditions" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Privacy and policy" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="FAQ" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Donate" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Licence" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}