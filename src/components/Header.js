import React from "react";
import Button from 'react-bootstrap/Button';

function Header(props) {
    return <div>
        <h1>{props.year}, {props.name}</h1>
        <Button variant="primary">apple</Button>
    </div>;
}

export default Header;