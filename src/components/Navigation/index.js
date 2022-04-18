import React, { Component } from 'react';
import './styles.css';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        console.error(process.env);
    }

    render () {
        return (
            <div className="navigation-bar">
                <div className='logo'>
                    <img src={`${process.env.PUBLIC_URL}/vsi-logo.png`} alt='vsi-logo'/>
                </div>
                <div className='nav-tabs'>
                    <a href="#home" class="active">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </div>
          );
    }
}

export default Navigation;