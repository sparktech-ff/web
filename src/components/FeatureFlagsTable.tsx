import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import React, {useEffect, useState} from "react";
import {featureFlagService, publicFeatureFlagService} from "@/services/http";
import {FeatureFlagRequestDto, FeatureFlagResponseDto} from "@/rest/data-contracts";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import CopyIcon from '@mui/icons-material/CopyAll';
import {useAuth} from "@/config/AuthContext";
import {FeatureFlagModal} from "@/components/FeatureFlagModal";
import {ConfirmationModal} from "@/components/ConfirmationModal";
import styled from "styled-components";

const emptyFlag: () => FeatureFlagRequestDto = () => ({
  name: '',
  description: '',
  mode: '',
  users: []
})

export const FeatureFlagsTable = () => {
  const [removeFeatureFlag, setRemoveFeatureFlag] = useState<FeatureFlagResponseDto>();
  const [saveFeatureFlag, setSaveFeatureFlag] = useState<FeatureFlagResponseDto>();
  const [rows, setRows] = useState<FeatureFlagResponseDto[]>([]);
  const {isAuthenticated} = useAuth();

  const reload = async () => {
    const response = await publicFeatureFlagService.getAll();
    setRows(response.data)
  }

  useEffect(() => {
    reload()
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell width={10}>Id</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Mode</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Affected users</TableCell>
            {isAuthenticated && (
              <TableCell align="right">
                <Button onClick={() => setSaveFeatureFlag(emptyFlag())}>
                  <AddIcon color="primary" />
                  &nbsp;New
                </Button>
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell width={10} component="th" scope="row">
                <LimitedWrapper>
                  <IconButton onClick={() => navigator.clipboard.writeText(row.id!)}>
                    <CopyIcon />
                  </IconButton>
                  <Limited>{row.id}</Limited>
                </LimitedWrapper>
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.mode}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left">
                {
                  row.users && (
                    <LimitedWrapper>
                      <IconButton onClick={() => navigator.clipboard.writeText(row.users!.join(','))}>
                        <CopyIcon />
                      </IconButton>
                      <Limited>{row.users}</Limited>
                    </LimitedWrapper>
                  )
                }
              </TableCell>
              {
                isAuthenticated && (
                  <TableCell align="right">
                    <IconButton onClick={() => setSaveFeatureFlag(row)}>
                      <EditIcon color="primary" />
                    </IconButton>
                    <IconButton>
                      <DeleteIcon color="error" onClick={() => setRemoveFeatureFlag(row)} />
                    </IconButton>
                  </TableCell>
                )
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <FeatureFlagModal
        open={!!saveFeatureFlag}
        setOpen={() => setSaveFeatureFlag(undefined)}
        featureFlag={saveFeatureFlag}
        onAfterSave={reload}
      />
      <ConfirmationModal
        open={!!removeFeatureFlag}
        title="Remove feature flag"
        confirmation={
          <span>
            Do you really want to remove feature flag <b>{removeFeatureFlag?.name}</b>?
          </span>
        }
        onClose={async (confirmed) => {
          if (confirmed) {
            await featureFlagService.remove(removeFeatureFlag?.id!)
            setRemoveFeatureFlag(undefined);
            await reload()
          } else {
            setRemoveFeatureFlag(undefined);
          }
        }}
      />
    </TableContainer>
  )
}

const LimitedWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Limited = styled.div`
    display: block;
    max-width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
`;