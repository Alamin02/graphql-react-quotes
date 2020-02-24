import React, { Component } from "react";
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/"> Quotes </Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default withRouter(Navbar);