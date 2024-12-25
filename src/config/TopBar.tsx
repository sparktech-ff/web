import {AppBar, Box, Button, IconButton, Toolbar} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, {useState} from "react";
import {AuthModal} from "@/config/AuthModal";
import {useRouter} from "next/navigation";
import {useAuth} from "@/config/AuthContext";

export interface TopBarProps {
  setSidebar: (value: boolean) => void;
}

export const TopBar = (
  {
    setSidebar
  }: TopBarProps
) => {
  const [authModal, setAuthModal] = useState(false);
  const router = useRouter();
  const {isAuthenticated, setToken} = useAuth();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{mr: 2}}
          onClick={() => setSidebar(true)}
        >
          <MenuIcon/>
        </IconButton>
        <Box sx={{ flexGrow: 1 }}>
          <Button color="inherit" onClick={() => router.push('/')}>Feature Flags</Button>
        </Box>
        {
          isAuthenticated && <Button color="inherit" onClick={() => setToken(undefined)}>Logout</Button>
        }
        {
          !isAuthenticated && <Button color="inherit" onClick={() => setAuthModal(true)}>Login</Button>
        }
        <AuthModal open={authModal} setOpen={setAuthModal} />
      </Toolbar>
    </AppBar>
  );
}