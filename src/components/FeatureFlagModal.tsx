import React from "react";
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {Form} from "@sparkui/react-form";
import {PrimaryButton, SecondaryButton} from "@sparkui/react-theme";
import styled from "styled-components";
import {useAuth} from "@/config/AuthContext";
import {FeatureFlagRequestDto, FeatureFlagResponseDto} from "@/rest/data-contracts";
import {featureFlagService} from "@/services/http";

export interface FeatureFlagModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  featureFlag?: FeatureFlagResponseDto;
  onAfterSave: (featureFlag: FeatureFlagResponseDto) => void;
}

export const FeatureFlagModal = (
  {
    open,
    setOpen,
    featureFlag,
    onAfterSave,
  }: FeatureFlagModalProps
) => {

  const onSave = async (data: FeatureFlagRequestDto) => {
    if (featureFlag?.id) {
      const response = await featureFlagService.update(featureFlag.id, data);
      onAfterSave(response.data);
    } else {
      const response = await featureFlagService.create(data);
      onAfterSave(response.data);
    }
    setOpen(false);
  }

  return (
    <Dialog onClose={() => setOpen(false)} open={open}>
      <StyledForm value={featureFlag as FeatureFlagRequestDto}>
        <DialogTitle>
          {featureFlag?.id ? 'Update' : 'Create a new'}
          Feature Flag
        </DialogTitle>
        <DialogContent className="w-100">
          <div className="d-flex flex-column align-items-start gap-3 w-100">
            <Form.Text
              param="name"
              required={true}
              params={{
                getHelperText: (errors: []) => errors.length > 0 ? "Required value" : undefined,
                label: 'Name',
                className: 'w-100'
              }}
            />
            <Form.Text
              param="description"
              params={{
                label: 'Description',
                className: 'w-100'
              }}
            />
            <Form.Text
              param="mode"
              params={{
                label: 'mode',
                className: 'w-100'
              }}
            />
          </div>
        </DialogContent>
        <DialogActions className="p-3 gap-3">
          <SecondaryButton onClick={() => setOpen(false)}>Close</SecondaryButton>
          <Form.Submit onSubmit={onSave}>
            <PrimaryButton>Save</PrimaryButton>
          </Form.Submit>
        </DialogActions>
      </StyledForm>
    </Dialog>
  );
}

const StyledForm = styled(Form<FeatureFlagRequestDto>)`
    min-width: min(calc(100vw - 64px), 400px);
`;