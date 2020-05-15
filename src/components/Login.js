import React, { Component } from 'react';
import Navbar from './Navbar';
import '../styles/login.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.state = {
            username: '',
            password: '',
            isLoggedin: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props = { ...this.state }
        localStorage.setItem('username', this.state.username);
        localStorage.setItem('password', this.state.password);
        this.setState({
            username: '',
            password: '',
            isLoggedin: true
        })
    }

    componentDidUpdate() {
        const { isLoggedin } = this.state;
        const { history, location } = window;
        if (isLoggedin) {
            history.pushState(null, null, location.href);
            window.onpopstate = event => {
                event.preventDefault();
                history.go(1);
            };
        }
    }
    componentDidMount(){
        this.inputRef.current.focus();
    }
    render() {
        let { username, password } = '';
        let navbarVisible = false;
        if (this.state.isLoggedin) {
            username = localStorage.username.toLowerCase();
            password = localStorage.password.toLowerCase();
            if (username === 'admin' && password === 'admin') {
                navbarVisible = true;
            }
            if (username === 'user' && password === 'user') {
                navbarVisible = true;
            }
        }
        return (
            <React.Fragment>
                <div className={!navbarVisible ? 'login' : 'IsLoggedIn'}>
                    <form className='loginform' onSubmit={this.handleSubmit}>
                        <input type="text" name="username" value={this.state.username} placeholder="Username" ref={this.inputRef}  onChange={this.handleChange} /><br />
                        <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChange} /><br />
                        <button>Sign In</button>
                    </form>
                </div>
                {navbarVisible ? <Navbar username={localStorage.username} password={localStorage.password} /> : ''}
            </React.Fragment>
        )
    }
}

export default Login;
