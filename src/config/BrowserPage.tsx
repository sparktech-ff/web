"use client"

import {MuiTheme} from "@/config/MuiTheme";
import React, {ReactNode, useEffect, useState} from "react";
import Container from '@mui/material/Container';
import {TopBar} from "@/config/TopBar";
import {Sidebar} from "@/config/Sidebar";
import styled from "styled-components";
import {AuthProvider} from "@/config/AuthContext";

export const BrowserPage = ({children}: {children: ReactNode}) => {
  const [isClient, setIsClient] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient ?
      <MuiTheme>
        <AuthProvider>
          <TopBar setSidebar={setSidebar} />
          <Sidebar open={sidebar} setOpen={setSidebar} />
          <Container>
            <Content>
              {children}
            </Content>
          </Container>
        </AuthProvider>
      </MuiTheme>
    : <></>
  )
};

const Content = styled.div`
    padding: 24px 0;
`