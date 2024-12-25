import React from "react";
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {Form} from "@sparkui/react-form";
import {PrimaryButton, SecondaryButton} from "@sparkui/react-theme";
import styled from "styled-components";
import {useAuth} from "@/config/AuthContext";

export interface AuthModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export interface SignInRequest {
  email: string;
  password: string;
}

export const AuthModal = (
  {
    open,
    setOpen,
  }: AuthModalProps
) => {
  const {setToken} = useAuth();

  const signIn = async (request: SignInRequest) => {
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBsfXcBCB7dRNjnk3eZpvDDfgRS4EZVfo0';
    const response = await fetch(
      url,
      {
        method: 'POST',
        body: JSON.stringify({
          ...request,
          returnSecureToken: true
        }),
      }
    );
    const data = await response.json();
    setToken(data.idToken);
    setOpen(false);
  }

  return (
    <Dialog onClose={() => setOpen(false)} open={open}>
      <StyledForm value={{email: '', password: ''}}>
        <DialogTitle>Sign in</DialogTitle>
        <DialogContent className="w-100">
          <div className="d-flex flex-column align-items-start gap-3 w-100">
            <Form.Email
              param="email"
              required={true}
              params={{
                getHelperText: (errors: []) => errors.length > 0 ? "Required valid email format" : undefined,
                label: 'Email',
                className: 'w-100'
              }}
            />
            <Form.Password
              param="password"
              required={true}
              params={{
                getHelperText: (errors: []) => errors.length > 0 ? "Required stronger password" : undefined,
                label: 'Password',
                className: 'w-100'
              }}
            />
          </div>
        </DialogContent>
        <DialogActions className="p-3 gap-3">
          <SecondaryButton onClick={() => setOpen(false)}>Close</SecondaryButton>
          <Form.Submit onSubmit={signIn}>
            <PrimaryButton>Sign in</PrimaryButton>
          </Form.Submit>
        </DialogActions>
      </StyledForm>
    </Dialog>
  );
}

const StyledForm = styled(Form)`
    min-width: min(calc(100vw - 64px), 400px);
`;