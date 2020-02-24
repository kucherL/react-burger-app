import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawToggle from '../SideDrawer/DrawToggle/DrawToggle';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawToggle clicked={props.drawerToggleClicked} />
    {/* через height мы динамически передаем значение высоты в пропсы лого */}
    <Logo height="80%" />
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;