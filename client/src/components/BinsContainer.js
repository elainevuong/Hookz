import * as React from 'react';
import { Container, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Typography, Snackbar } from '@mui/material';
import Title from './Title';

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchBins, deleteBin } from '../features/bins';

import LinkIcon from '@mui/icons-material/Link';
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

  const [open, setOpen] = useState(false)

  const handleGetBinUrl = (bin) => {
    setOpen(true)
    let URL = `${window.location.protocol}//${window.location.hostname}/api/bins/${bin.url}`
    navigator.clipboard.writeText(URL)
  }

  // return (
  //   <>
  //     <Button 
  //       variant="outlined"
  //       onClick={handleClick}
  //     >Copy Bin URL</Button>
  //     <Snackbar
  //       open={open}
  //       onClose={() => setOpen(false)}
  //       autoHideDuration={2000}
  //       message="Copied Bin URL to clipboard"
  //     />


  // const handleGetBinUrl = (bin) {
  //   navigator.clipboard.writeText(`${window.location.toString()}${binurl}`)

  // }

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
                <TableCell>Get Bin URL</TableCell>
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
                  <TableCell>
                    <Button onClick={() => handleGetBinUrl(bin)}>
                      <LinkIcon />
                      <Snackbar
                        open={open}
                        onClose={() => setOpen(false)}
                        autoHideDuration={1000}
                        message="COPIED BIN URL TO CLIPBOARD"
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