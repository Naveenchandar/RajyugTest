import React, { Component } from 'react';
import '../styles/Hrcontent.css'

class Hrcontent extends Component {
    render() {
        return (
            <div>
                {
                    this.props.hrcontent ?
                        <div className="hrcontent">
                            <h4>
                                HR Master <br /><br /><br /><br />
                                <span style={{ display: 'flex', justifyContent: 'center' }}>
                                    <i className="fa fa-users fa-3x" aria-hidden="true"></i>
                                </span>
                            </h4>
                            <h4>HR Transaction <br /><br /><br /><br />
                                <span style={{ display: 'flex', justifyContent: 'center' }}>
                                    <i class="fa fa-calendar fa-3x" aria-hidden="true"></i>
                                </span>
                            </h4>
                            <h4>
                                HR Dashboard <br /><br /><br /><br />
                                <span style={{ display: 'flex', justifyContent: 'center' }}>
                                    <i class="fa fa-file-text-o fa-3x" aria-hidden="true"></i>
                                </span>

                            </h4>
                        </div> :
                        this.props.financecontent ?
                            <div className="hrcontent">
                                <h4>Finance Master <br /><br /><br /><br />
                                    <span style={{ display: 'flex', justifyContent: 'center' }}>
                                        <i className="fa fa-users fa-3x" aria-hidden="true"></i>
                                    </span>
                                </h4>
                                <h4>
                                    Finance Transaction  <br /><br /><br /><br />
                                    <span style={{ display: 'flex', justifyContent: 'center' }}>
                                        <i class="fa fa-calendar fa-3x" aria-hidden="true"></i>
                                    </span>
                                </h4>
                                <h4>
                                    Finance Dashboard <br /><br /><br /><br />
                                    <span style={{ display: 'flex', justifyContent: 'center' }}>
                                        <i class="fa fa-file-text-o fa-3x" aria-hidden="true"></i>
                                    </span>
                                </h4>
                            </div> :
                            ''
                }
            </div>
        )
    }
}

export default Hrcontent;
