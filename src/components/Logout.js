import React from 'react';

function Logout(props) {
    const handleLogOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        window.location.href = "/"
    }
    const Styles = {
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'absolute',
        top: '65px',
        left: '0',
        right: '15px'
    }
    return (
        <div style={Styles}>
            {props.hover ? 
            <button onClick={handleLogOut}>Log out</button> : ''}
        </div>
    )
}

export default Logout;
