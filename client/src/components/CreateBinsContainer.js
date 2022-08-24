import * as React from 'react';
import { useState } from "react";
import { Button } from '@mui/material';

import { useDispatch, useSelector } from "react-redux"
import { createBin } from '../features/bins';

import Title from './Title';

const CreateBinsContainer = () => {
  const dispatch = useDispatch();

  const [ clickStatus, setClickStatus ] = useState(false);

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
      <br></br>
      {clickStatus ? <BinCreatedSuccessfully /> : ''}
    </React.Fragment>
  )

}

const BinCreatedSuccessfully = () => {
  const bins = useSelector(state => state.bins)

  return (
    <React.Fragment>
      <div align="center">{`Success! Bin ${bins[0].url} Created!`}</div>
      <br></br>
      <Button variant="outlined">Copy Bin URL</Button>
    </React.Fragment>
  )
}

export default CreateBinsContainer