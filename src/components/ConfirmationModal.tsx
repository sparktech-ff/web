import React, {ReactNode} from "react";
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {PrimaryButton, SecondaryButton} from "@sparkui/react-theme";

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
) => (
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