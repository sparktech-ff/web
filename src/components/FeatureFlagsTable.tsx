import {IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React, {useEffect, useState} from "react";
import {publicFeatureFlagService} from "@/services/http";
import {FeatureFlagResponseDto} from "@/rest/data-contracts";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useAuth} from "@/config/AuthContext";
import {FeatureFlagModal} from "@/components/FeatureFlagModal";

export const FeatureFlagsTable = () => {
  const [featureFlag, setFeatureFlag] = useState<FeatureFlagResponseDto>();
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
            {isAuthenticated && <TableCell align="right">Actions</TableCell>}

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
                    <IconButton aria-label="delete" onClick={() => setFeatureFlag(row)}>
                      <EditIcon color="primary" />
                    </IconButton>
                    <IconButton aria-label="delete">
                      <DeleteIcon color="error" />
                    </IconButton>
                  </TableCell>
                )
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <FeatureFlagModal
        open={!!featureFlag}
        setOpen={() => setFeatureFlag(undefined)}
        featureFlag={featureFlag}
        onAfterSave={reload}
      />
    </TableContainer>
  )
}