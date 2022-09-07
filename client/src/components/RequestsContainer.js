import * as React from 'react';
// import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchRequests } from '../features/requests';

const RequestsContainer = () => {
  const dispatch = useDispatch();

  const requests = useSelector(state => state.requests)

  useEffect(() => {
    dispatch(fetchRequests())
  }, [dispatch])

  return (
    <React.Fragment>
      <Title>Recent Requests</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell><b>Date Request Received</b></TableCell>
            <TableCell><b>Method</b></TableCell>
            <TableCell><b>Bin URL</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {requests.map(request => {
            const date = new Date(request.createdAt)

            const timeOptions = {
              dateStyle: "medium",
              timeStyle: "medium"
            }

            const formattedDate = new Intl.DateTimeFormat('en-US', timeOptions).format(date);

            return (
            <TableRow key={request.id}>
              <TableCell>{formattedDate}</TableCell>
              <TableCell>{request.method}</TableCell>
              <TableCell>{`http://localhost:3001/api/bins/${request.url}`}</TableCell>
            </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

export default RequestsContainer