import React from 'react';
// мы импортируем лого таким образом, потому что при загрузке на сервер, вебпак переместит изображение в другую папку
// указывая импорт, мы даем знать вебпаку о том, что здесь будет использоваться лого
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
  // в style мы динамически принимаем значения, передающиеся через пропсы из Toolbar и SideDrawer
  <div className={classes.Logo} style={{height: props.height}}>
    <img src={burgerLogo} alt="MyBurger" />
  </div>
);

export default logo;