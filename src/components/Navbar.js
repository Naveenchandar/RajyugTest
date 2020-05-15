import React, { Component } from 'react';
import '../styles/Navbar.css'
import Hrcontent from './Hrcontent';
import Menu from './Menu';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hrpage: true,
            financepage: false
        }
        this.handleHrPage = this.handleHrPage.bind(this);
        this.handleFinancePage = this.handleFinancePage.bind(this);
    }
    handleHrPage(e) {
        e.preventDefault();
        this.setState({
            hrpage: true,
            financepage: false
        })
    }
    handleFinancePage(e) {
        e.preventDefault();
        this.setState({
            financepage: true,
            hrpage: false
        })
    }
    
    render() {
        return (
            <>
                <Menu username={this.props.username} />
                <div>
                    <ul className='Navbar'>
                        <li>
                            <a href="/hr" className={this.state.hrpage ? 'active' : ''} onClick={this.handleHrPage}>
                                HR
                        </a>
                        </li>
                        {this.props.username === 'admin' ?
                            <li>
                                <a href="/finance" className={this.state.financepage ? 'active' : ''} onClick={this.handleFinancePage}>
                                    Finance
                        </a>
                            </li> : ''}
                        <li>
                            Inventory
                    </li>
                        <li>
                            Settings
                    </li>
                    </ul>
                    {this.state.hrpage ? <Hrcontent hrcontent={this.state.hrpage} /> : ''}
                    {this.state.financepage ? <Hrcontent financecontent={this.state.financepage} /> : ''}
                </div>
            </>
        )
    }
}

export default Navbar;
