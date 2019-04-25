import React from 'react';
import { NavLink } from 'react-router-dom';

const header = () => (
    <header style={headerStyle}>
        <h1>Welcome to My Todo List</h1>
        <NavLink style={linkStyle} to="/">Home</NavLink > | <NavLink style={linkStyle} to="/about">About</NavLink>
    </header>
)

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default header;