import React from 'react';
import { Link } from 'react-router-dom';

function Nav()
{
    return (
        <ol>
            <li><Link to="/html">HTML</Link></li>
            <li><Link to="/css">CSS</Link></li>
            <li><Link to="/js">JS</Link></li>
        </ol>
    );
}

export default Nav;