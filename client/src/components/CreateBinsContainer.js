import * as React from 'react';
import { Button, Container, Typography } from '@mui/material';

import { useDispatch, useSelector } from "react-redux"
import { createBin } from '../features/bins';

import Title from './Title';


const CreateBinsContainer = ({ setClickStatus, clickStatus }) => {
  const dispatch = useDispatch();

  const handleCreateBin = () => {
    setClickStatus(true);
    dispatch(createBin())
  }

  return (
    <React.Fragment>
      <Title>Create New Bin</Title>
      <Button 
        variant="contained"
        onClick={() => handleCreateBin()}
      >
        Generate!
      </Button>
      {clickStatus ? <BinCreatedSuccessfully /> : ''}
    </React.Fragment>
  )

}

const BinCreatedSuccessfully = () => {
  const bins = useSelector(state => state.bins)

  if (bins.length > 0) {
    return (
      <React.Fragment>
        <Container maxWidth="lg">
          <br/>
          <Typography align='center'>{`Success! Bin:`}</Typography>
          <Typography align='center'><b>{`${bins[0].url}`}</b> created!</Typography>
          <br/>
        </Container>
        <Button variant="outlined">Copy Bin URL</Button>
      </React.Fragment>
    )
  }
}

export default CreateBinsContainer