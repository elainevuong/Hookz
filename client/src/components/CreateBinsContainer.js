import * as React from 'react';
import { useState } from "react";
import { Button } from '@mui/material';

import { useDispatch } from "react-redux"
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

const BinCreatedSuccessfully = (newBin) => {
  return (
    <div align="center">{`New Bin Created!`}</div>
  )
}

export default CreateBinsContainer

// export default function Deposits() {
//   return (
//     <React.Fragment>
//       <Title>Recent Deposits</Title>
//       <Typography component="p" variant="h4">
//         $3,024.00
//       </Typography>
//       <Typography color="text.secondary" sx={{ flex: 1 }}>
//         on 15 March, 2019
//       </Typography>
//       <div>
//         <Link color="primary" href="#" onClick={preventDefault}>
//           View balance
//         </Link>
//       </div>
//     </React.Fragment>
//   );
// }
