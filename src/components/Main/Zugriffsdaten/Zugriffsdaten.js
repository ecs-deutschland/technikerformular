import React from "react";
import './Zugriffsdaten.css'

class Zugriffsdaten extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.props.handleChange(event)
    }

    render() {
        return (
            <div>
                
                <div className="custom-control custom-checkbox">
                    <input 
                        id="remote" 
                        type="checkbox" 
                        className="custom-control-input" 
                        checked={this.props.state.remote}
                        onChange={this.handleChange}
                    ></input>
                    <label className="custom-control-label" htmlFor="remote">Remotezugriff vorhanden?</label>
                </div> 

                { this.props.state.remote ? // Remotezugriff
                        <div>
                            <div className="form-group zugriffsdaten">
                                <select className="form-control"
                                        id="remoteType"
                                        value={this.props.state.remoteType}
                                        onChange={this.handleChange}
                                >
                                    <option value="unify">Unify</option>
                                    <option value="ecs">ECS</option>
                                </select>

                                <select className="form-control"
                                        id="remoteConnectionType"
                                        value={this.props.state.remoteConnectionType}
                                        onChange={this.handleChange}
                                >
                                    <option value="router">Router</option>
                                    <option value="isdn">ISDN</option>
                                    <option value="site2siteVPN">Site-to-Site VPN</option>
                                </select>

                                <input
                                    placeholder="Login" type="text" className="form-control" id="keypassLogin"
                                    value={this.props.state.keypassLogin}
                                    onChange={this.handleChange}
                                />
                                <input
                                    placeholder="Passwort" type="text" className="form-control" id="keypassPassword"
                                    value={this.props.state.keypassPassword}
                                    onChange={this.handleChange}
                                />
                                <div className="custom-control custom-checkbox">
                                    <input 
                                        id="storedOnAdminPC" 
                                        type="checkbox" 
                                        className="custom-control-input" 
                                        checked={this.props.state.storedOnAdminPC}
                                        onChange={this.handleChange}
                                    ></input>
                                    <label className="custom-control-label" htmlFor="storedOnAdminPC">KeyPass auf Admin-PC abgelegt?</label>
                                </div> 
                            </div>
                        </div>
                        : ""// Kein Remotezugriff
                }

            </div>
        )
    }
}

export default Zugriffsdaten