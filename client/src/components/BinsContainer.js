import * as React from 'react';
import { Container, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Typography } from '@mui/material';
import Title from './Title';

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchBins, deleteBin } from '../features/bins';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { red } from '@mui/material/colors';

const BinsContainer = ({ setClickStatus }) => {
  const dispatch = useDispatch();

  const bins = useSelector(state => state.bins)

  const handleDeleteBin = (bin) => {
    if (window.confirm(`Are you sure you want to delete bin: ${bin.url}?`)) {
      dispatch(deleteBin(bin.id))
      setClickStatus(false)
    }
  }

  useEffect(() => {
    dispatch(fetchBins())
  }, [dispatch])

  if (bins.length > 0) {
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
  } else {
    return (
      <React.Fragment>
        <Title>Display All Bins</Title>
        <Container>
          <Typography>No Bins Available! Create a new Bin to get started!</Typography>
        </Container>
      </React.Fragment>
    )
  }
  
}

export default BinsContainer;