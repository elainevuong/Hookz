import * as React from 'react';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import Title from './Title';

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchBins, deleteBin } from '../features/bins';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { red } from '@mui/material/colors';

const BinsContainer = () => {
  const dispatch = useDispatch();

  const bins = useSelector(state => state.bins)

  const handleDeleteBin = (bin) => {
    if (window.confirm(`Are you sure you want to delete bin: ${bin.url}?`)) {
      dispatch(deleteBin(bin.id))
    }
  }

  useEffect(() => {
    dispatch(fetchBins())
  }, [dispatch])

  return (
    <React.Fragment>
      <Title>Display All Bins</Title>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Number of Requests</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bins.map(bin => (
              <TableRow key={bin.id}>
                <TableCell>{bin.url}</TableCell>
                <TableCell>{bin.requests.length}</TableCell>
                <TableCell>
                  <Button onClick={() => handleDeleteBin(bin)}>
                  <DeleteForeverIcon 
                    sx={{ color: red[500] }}
                  />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}

export default BinsContainer;