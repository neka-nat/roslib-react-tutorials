import React from 'react'
import { Link } from "react-router-dom"
import { List, ListItem, ListItemText } from '@material-ui/core'

const Home: React.FC = () => {
  return (
    <>
      <h1>React + Roslib Tutorials</h1>
      <div>
        <List>
          <ListItem button component={Link} to='/tutorial1'>
            <ListItemText primary="Tutorial1" />
          </ListItem>
          <ListItem button component={Link} to='/tutorial2'>
            <ListItemText primary="Tutorial2" />
          </ListItem>
          <ListItem button component={Link} to='/tutorial3'>
            <ListItemText primary="Tutorial3" />
          </ListItem>
          <ListItem button component={Link} to='/tutorial4'>
            <ListItemText primary="Tutorial4" />
          </ListItem>
        </List>
      </div>
    </>
  );
};

export default Home;