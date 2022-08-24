import * as React from 'react';
import { Container, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import Title from './Title';

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchBins } from '../features/bins';

const BinsContainer = () => {
  const dispatch = useDispatch();

  const bins = useSelector(state => state.bins)

  useEffect(() => {
    dispatch(fetchBins())
  }, [dispatch])

  console.log(bins)
  return (
    <React.Fragment>
      <Container>
      <Title>Display All Bins</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Number of Requests</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bins.map(bin => (
              <TableRow key={bin.id}>
                <TableCell>{bin.url}</TableCell>
                <TableCell>{bin.requests.length}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </React.Fragment>
  );
}

export default BinsContainer;