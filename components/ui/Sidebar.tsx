import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import React, { useContext } from "react";
import AssignmentIcon from '@mui/icons-material/Assignment';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import TaskIcon from '@mui/icons-material/Task';
import { UIContext } from "../../context/ui";

interface Props {
  title: string;
  icon: any;
}

const menuItems: Props[] = [
  {
    title:'All task',
    icon: <AssignmentIcon />,
  },
  {
    title: 'started task',
    icon: <TaskIcon />
  },
  {
    title:'finished task',
    icon: <TaskIcon />
  },
  {
    title:'pending task',
    icon: <PendingActionsIcon />
  }
]

export const Sidebar = () => {
  const {sideMenuOpen, closeSideMenu} = useContext(UIContext)
  
  return (
    <Drawer
      anchor="left"
      open={sideMenuOpen}
      onClick={closeSideMenu}
    >
      <Box sx={{padding: '5px 10px'}}>
        <Typography variant="h4">Menu</Typography>
      </Box>

      <List>
      {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
