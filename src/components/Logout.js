import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link, Redirect} from 'react-router-dom'
import NavBarMenu from './NavBarMenu';

const Logout =()=>
{
    localStorage.clear();
    return <Redirect to="/login"/>
};
export default Logout;