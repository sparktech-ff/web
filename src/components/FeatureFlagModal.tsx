import React, {useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Switch} from "@mui/material";
import {Form} from "@sparkui/react-form";
import {PrimaryButton, SecondaryButton} from "@sparkui/react-theme";
import styled from "styled-components";
import {FeatureFlagRequestDto, FeatureFlagResponseDto} from "@/rest/data-contracts";
import {featureFlagService} from "@/services/http";
import AddIcon from "@mui/icons-material/Add";
import {isDefined} from "@sparkui/react-utils";

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
    featureFlag = {},
    onAfterSave,
  }: FeatureFlagModalProps
) => {
  const [users, setUsers] = useState<(string|undefined)[]>(featureFlag?.users ?? []);

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
          &nbsp;Feature Flag
        </DialogTitle>
        <DialogContent sx={{minWidth: 'min(95vw, 600px)'}} className="w-100">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="d-flex flex-column align-items-start gap-3 w-100">
                <Form.Text
                  param="name"
                  required={true}
                  params={{
                    getHelperText: (errors: []) => errors.length > 0 ? "Required value" : undefined,
                    label: 'Name *',
                    className: 'w-100'
                  }}
                />
                <Form.Text
                  param="mode"
                  params={{
                    label: 'Mode',
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
                <Form.Field param="enabled">
                  {({ref, value, onChange}) => (
                    <Switch
                      inputRef={ref}
                      value={value}
                      onChange={({target}) => onChange(target.checked)}
                    />
                  )}
                </Form.Field>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <Limited className="d-flex flex-column align-items-start gap-3 w-100">
                {
                  users
                    .map((item, index) => ({item, index}))
                    .filter(({item}) => isDefined(item))
                    .map(({index}) => (
                      <Form.Text
                        key={index}
                        value=""
                        param={`users[${index}]`}
                        params={{
                          label: 'User id',
                          className: 'w-100',
                          onKeyDown: (event: KeyboardEvent) => {
                            if (event.ctrlKey && event.key === "Backspace") {
                              setUsers(users => {
                                const newUsers: (string|undefined)[] = [...users];
                                newUsers[index] = undefined;
                                return newUsers;
                              })
                            }
                          }
                        }}
                      />
                    )
                  )
                }
              </Limited>
              <AddButton>
                <Button onClick={() => setUsers([...users, ''])}>
                  <AddIcon/>&nbsp;New user id
                </Button>
              </AddButton>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Form.TextArea
                param="data"
                params={{
                  label: 'Data',
                  rows: 2,
                  className: 'w-100'
                }}
              />
            </div>
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

const AddButton = styled.div`
    display: flex;
    padding-top: 16px;
    justify-content: end;
`;

const Limited = styled.div`
    max-height: 200px;
    overflow: auto;
`;