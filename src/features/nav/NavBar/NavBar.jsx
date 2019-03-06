import React, {Component} from 'react';
import {Menu, Container, Button} from "semantic-ui-react";

import './NavBar.scss';

class NavBar extends Component {
    render() {
        return (
            <Menu inverted fixed="top" className="main-nav">
                <Container className="main-nav__items">
                    <Menu.Item header className="main-nav__item">
                        <img src="assets/logo.png" alt="logo" />
                        HP Trivia
                    </Menu.Item>
                    <Menu.Item name="Collections" className="main-nav__item"/>
                    <Menu.Item>
                        <Button floated="right" positive inverted content="Create Collection" />
                    </Menu.Item>
                    <Menu.Item position="right" className="main-nav__item">
                        <Button basic inverted content="Login" />
                        <Button basic inverted content="Sign Out" style={{marginLeft: '0.5em'}} />
                    </Menu.Item>
                </Container>
            </Menu>
        );
    }
}

export default NavBar;
