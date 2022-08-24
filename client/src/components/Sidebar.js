import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import SendIcon from '@mui/icons-material/Send';


export const Sidebar = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <InventoryIcon />
      </ListItemIcon>
      <ListItemText primary="Bins" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Requests" />
    </ListItemButton>
  </React.Fragment>
);