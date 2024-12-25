import React, {ReactNode, useState} from "react";
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {Form} from "@sparkui/react-form";
import {PrimaryButton, SecondaryButton} from "@sparkui/react-theme";
import styled from "styled-components";
import {useAuth} from "@/config/AuthContext";
import {FeatureFlagRequestDto, FeatureFlagResponseDto} from "@/rest/data-contracts";
import {featureFlagService} from "@/services/http";

export interface ConfirmationModalProps {
  open: boolean;
  title: string;
  confirmation: ReactNode;
  onClose: (confirmed: boolean) => void;
}

export const ConfirmationModal = (
  {
    open,
    title,
    confirmation,
    onClose,
  }: ConfirmationModalProps
) => {
  return (
    <Dialog onClose={() => onClose(false)} open={open}>
      <DialogTitle>
        {title}
      </DialogTitle>
      <DialogContent>
        <div className="d-flex flex-column align-items-start gap-3">
          {confirmation}
        </div>
      </DialogContent>
      <DialogActions className="p-3 gap-3">
        <SecondaryButton onClick={() => onClose(false)}>Close</SecondaryButton>
        <PrimaryButton onClick={() => onClose(true)}>Confirm</PrimaryButton>
      </DialogActions>
    </Dialog>
  );
}

const StyledForm = styled(Form<FeatureFlagRequestDto>)`
    min-width: min(calc(100vw - 64px), 400px);
`;