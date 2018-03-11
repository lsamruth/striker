import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">Striker</Link>
                <Link to="/about">About</Link>
                <hr/>
            </div>
        );
    }
}