import {Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import RuleIcon from "@mui/icons-material/Rule";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PrivacyIcon from "@mui/icons-material/PrivacyTip";
import QuestionIcon from "@mui/icons-material/QuestionAnswer";
import PoliceIcon from "@mui/icons-material/LocalPolice";
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
      <List sx={{paddingRight: "30px"}} >
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
            <ListItemText primary="Feature Flags" onClick={() => router.push('/')}/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <RuleIcon />
            </ListItemIcon>
            <ListItemText primary="Terms and conditions" onClick={() => router.push('/')} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PrivacyIcon />
            </ListItemIcon>
            <ListItemText primary="Privacy and policy" onClick={() => router.push('/')} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <QuestionIcon />
            </ListItemIcon>
            <ListItemText primary="FAQ" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PoliceIcon />
            </ListItemIcon>
            <ListItemText primary="Licence" onClick={() => router.push('/')} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Report issue" onClick={() => router.push('/')} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}