import React, { useState } from 'react';
import Logout from './Logout';

function Menu(props) {
    const [hover, setHover] = useState(false)
    const styles = {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '-50px',
        marginBottom: '50px',
        marginRight: '30px'
    }
    const showLogOut = () => {
        setHover(!hover)
    }
    const username = props.username.charAt(0).toUpperCase() + props.username.slice(1);
    return (
        <>
            <div style={styles}>
                <i className="fa fa-bell fa-2x" aria-hidden="true"></i>
                <i className="fa fa-user-circle fa-2x" aria-hidden="true"></i>&ensp;
            <label style={{ paddingTop: '5px',cursor:'pointer' }} onClick={showLogOut}>
                    {username}
                </label>
            </div>
            {hover ? <Logout hover={hover}/> : ''}
        </>
    )
}

export default Menu;
