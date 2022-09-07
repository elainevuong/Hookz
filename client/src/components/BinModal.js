import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Container } from '@mui/material';

import { useDispatch, useSelector } from "react-redux"
import { fetchRequestsByBin } from '../features/binRequests';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BinModal = ({ bin }) => {
  const dispatch = useDispatch();

  const binRequests = useSelector(state => state.binRequests)
  console.log(binRequests)

  const [open, setOpen] = React.useState(false);
  const handleDisplaySingleBinRequests = () => {
    setOpen(true);
    dispatch(fetchRequestsByBin(bin.url))
  }

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleDisplaySingleBinRequests}>{bin.url}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant='h5'>Bin: {bin.url}</Typography>
          {binRequests.map(request => (
            <Container key={request.id}>

              <Typography variant='h6'>Method: {request.method}</Typography>
              <Typography variant='h6'>Time: {generateFormattedDate(request)}</Typography>
              <Typography variant='h6'>Headers: </Typography>
                <Container>
                  {generateHeaders(request)}
                </Container>             
            </Container>
          ))}
        </Box>
      </Modal>
    </div>
  );
}

const generateFormattedDate = request => {
  const date = new Date(request.createdAt)

  const timeOptions = {
    dateStyle: "medium",
    timeStyle: "medium"
  }

  const formattedDate = new Intl.DateTimeFormat('en-US', timeOptions).format(date);
  return formattedDate
}

const generateHeaders = request => {
  const headers = request.headers
  const headersArray = Object.keys(headers)
  console.log(headersArray)

  return headersArray.map(header => (
    <Typography key={header}>
      {header}: {headers[header]}
    </Typography>
  ))
}

export default BinModal