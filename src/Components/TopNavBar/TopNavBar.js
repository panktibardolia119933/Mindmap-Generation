import React, { Component } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'

class TopNavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar className="primary-bg-700" variant="dark" fixed="top">
                <Navbar.Brand href="/">Welcome to Mind Map</Navbar.Brand>
            </Navbar>
        );
    }
}
export default TopNavBar;
