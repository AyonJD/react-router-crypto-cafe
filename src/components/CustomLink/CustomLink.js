import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div className={`${match ? "text-cyan-600" : ''}`}>
            <Link
            // style={{ color: match ? "#0891B2" : "#000" }}
            to={to}
            {...props}>
            {children}
            </Link>
        </div>
    );
};

export default CustomLink;