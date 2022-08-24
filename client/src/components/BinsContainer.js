import * as React from 'react';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import Title from './Title';

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchBins } from '../features/bins';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { red } from '@mui/material/colors';

const BinsContainer = () => {
  const dispatch = useDispatch();

  const bins = useSelector(state => state.bins)

  useEffect(() => {
    dispatch(fetchBins())
  }, [dispatch])

  console.log(bins)
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
                <TableCell align='justify'>{bin.requests.length}</TableCell>
                <TableCell><DeleteForeverIcon sx={{ color: red[500] }}/></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}

export default BinsContainer;