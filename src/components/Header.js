import React from 'react';
import Avatar from '@mui/joy/Avatar';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <Avatar fontSize="large" className="header__icon" />
      </IconButton>
      <img className="header__logo" src="logo192.png" alt="header" />
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
};

export default Header;