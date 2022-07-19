

import * as React from 'react';
import styled from '@emotion/styled'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';



const pages = [{ page: 'Home', link: '/' }, {page: 'About', link: '/about'}];

const Header = () => {
  
  return (
    <NavigationStyled>
        <head>
          <title>PageUp</title>
          <link rel="icon" href="/favicon.ico" />
        </head>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar >
           <h3>Page Up - Code Challenge</h3>
          </Toolbar>
        </Container>
      </AppBar>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.div`
   
        a {
            text-decoration: none;
            color: black;
            
            &:hover {
                text-decoration: underline;
            }

            &.active {
                color: white;
            }
        }
    
`


export default Header;

