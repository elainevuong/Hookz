import { Button, Snackbar } from '@mui/material'
import { useState } from 'react'

const CopyURLButton = ({ binurl }) => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(true)
    let URL = `${window.location.protocol}//${window.location.hostname}/api/bins/${binurl}`
    navigator.clipboard.writeText(URL)
  }

  return (
    <>
      <Button 
        variant="outlined"
        onClick={handleClick}
      >Copy Bin URL</Button>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message="COPIED BIN URL TO CLIPBOARD"
      />
    </>
  )
}

export default CopyURLButton