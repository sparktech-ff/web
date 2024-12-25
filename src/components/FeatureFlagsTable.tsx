import {IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React, {useEffect, useState} from "react";
import {featureFlagService, publicFeatureFlagService} from "@/services/http";
import {FeatureFlagRequestDto, FeatureFlagResponseDto} from "@/rest/data-contracts";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import {useAuth} from "@/config/AuthContext";
import {FeatureFlagModal} from "@/components/FeatureFlagModal";
import {ConfirmationModal} from "@/components/ConfirmationModal";

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
            <TableCell>Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Users</TableCell>
            {isAuthenticated && (
              <TableCell align="right">
                Actions
                &nbsp;
                <IconButton onClick={() => setSaveFeatureFlag(emptyFlag())}>
                  <AddIcon color="primary" />
                </IconButton>
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
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.users}</TableCell>
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