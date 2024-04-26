import React, { useEffect, useState, useContext } from 'react';
import {
  AppBar, Box, Container,
  Divider, Drawer,
  IconButton, List,
  ListItem, ListItemButton,
  ListItemText, Toolbar,
  Typography, Button
} from '@mui/material';
import {
  faChartSimple,
  faFileSignature
} from '@fortawesome/free-solid-svg-icons';
import { Navbar as BsNavbar, NavItem, Nav } from 'react-bootstrap';
import { BsBootstrap, BsFillMenuButtonWideFill } from 'react-icons/bs';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { logout } from 'helpers';
import { useGetIsLoggedIn } from 'hooks';
import { routeNames } from 'routes';
import { createStyles, makeStyles } from '@mui/styles';
import logobanner from 'assets/img/Logo.svg';
import {
  Menu, Web
} from '@mui/icons-material';


const useStyles = makeStyles((theme: any) =>
  createStyles({
    
  })
);

export const Navbar = () => {
  const isLoggedIn = useGetIsLoggedIn();

  const handleLogout = () => {
    logout(`${window.location.origin}/unlock`);
  };

  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };
  const navigate = useNavigate();

  return (
    <React.Fragment>
      {/* <BsNavbar className='bg-transparent border-bottom'> */}
      <AppBar component='nav' position='static'>

        <div className='container-fluid container'>
          <Container >
            <Toolbar >
              
            </Toolbar>
          </Container>
          
        </div>
      </AppBar>
    </React.Fragment>
  );
};
