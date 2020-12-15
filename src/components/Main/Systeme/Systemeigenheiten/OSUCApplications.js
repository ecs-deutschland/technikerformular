import React from "react";
import Uploader from "../../Uploader"
import "../Traegersystem.css"

class OSUCApplications extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.props.handleChange(event)
    }

    render() {
        return (
            <div className="container-fluid">

                 {/* Zeile 1 */}
                 <div className="row">
                    <div className="col-2">
                        <div className="custom-control custom-checkbox">
                            <input 
                                id="osUC_facadeServer" 
                                type="checkbox" 
                                className="custom-control-input" 
                                checked={this.props.state.osUC_facadeServer}
                                onChange={this.handleChange}
                            ></input>
                            <label className="custom-control-label" htmlFor="osUC_facadeServer">Facade Server?</label>
                        </div>
                    </div>
                    { 
                        this.props.state.osUC_facadeServer ? 
                        <div className="col-2">
                            <div className="row">
                                <div className="custom-control custom-checkbox">
                                    <input 
                                        id="osUC_dmz" 
                                        type="checkbox" 
                                        className="custom-control-input" 
                                        checked={this.props.state.osUC_dmz}
                                        onChange={this.handleChange}
                                    ></input>
                                    <label className="custom-control-label" htmlFor="osUC_dmz">In der DMZ?</label> 
                                </div>
                            </div>
                            {   
                                this.props.state.osUC_dmz ? 
                                <div className="row">
                                    <input
                                        placeholder="IP-Adresse" type="text" className="form-control systeme_felder" id="osUC_ipAdresse"
                                        value={this.props.state.osUC_ipAdresse}
                                        onChange={this.handleChange}
                                    /> 
                                </div> : ""
                            }              
                        </div>  : ""
                    }   
                     
                    <div className="col-2">
                        <div className="custom-control custom-checkbox">
                            <input 
                                id="osUC_webCollaboration" 
                                type="checkbox" 
                                className="custom-control-input" 
                                checked={this.props.state.osUC_webCollaboration}
                                onChange={this.handleChange}
                            ></input>
                            <label className="custom-control-label" htmlFor="osUC_webCollaboration">Web-Collaboration?</label> 
                        </div>
                    </div>  
                    <div className="col-2">
                        <div className="custom-control custom-checkbox">
                            <input 
                                id="osUC_audiokonferenz" 
                                type="checkbox" 
                                className="custom-control-input" 
                                checked={this.props.state.osUC_audiokonferenz}
                                onChange={this.handleChange}
                            ></input>
                            <label className="custom-control-label" htmlFor="osUC_audiokonferenz">Audiokonferenz?</label> 
                        </div>
                    </div>  
                    <div className="col-2">
                        <div className="custom-control custom-checkbox">
                            <input 
                                id="osUC_groupwareConnector" 
                                type="checkbox" 
                                className="custom-control-input" 
                                checked={this.props.state.osUC_groupwareConnector}
                                onChange={this.handleChange}
                            ></input>
                            <label className="custom-control-label" htmlFor="osUC_groupwareConnector">Groupware Connector?</label> 
                        </div>
                    </div>
                </div>
                
                {/* Zeile 2 */}
                <div className="row">
                    <div className="col-2">
                        <div className="custom-control custom-checkbox">
                            <input 
                                id="osUC_clientAnmeldung" 
                                type="checkbox" 
                                className="custom-control-input" 
                                checked={this.props.state.osUC_clientAnmeldung}
                                onChange={this.handleChange}
                            ></input>
                            <label className="custom-control-label" htmlFor="osUC_clientAnmeldung">Client-Anmeldung?</label> 
                        </div>
                    </div>
                    <div className="col-10"></div>
                </div>
                
                 {/* Zeile 3 */}
                {
                    this.props.state.osUC_clientAnmeldung ?
                    <div className="row">
                        <div className="col-3">
                            <input
                                placeholder="Login" type="text" className="form-control systeme_felder" id="osUC_username"
                                value={this.props.state.osUC_username}
                                onChange={this.handleChange}
                            /> 
                        </div>
                        <div className="col-3">
                            <input
                                placeholder="Passwort" type="text" className="form-control systeme_felder" id="osUC_passwort"
                                value={this.props.state.osUC_passwort}
                                onChange={this.handleChange}
                            /> 
                        </div>
                        <div className="col-3">
                            <input
                                placeholder="Windows-Authentifizierung" type="text" className="form-control systeme_felder" id="osUC_uosUC_windowsAuthsername"
                                value={this.props.state.osUC_windowsAuth}
                                onChange={this.handleChange}
                            /> 
                        </div>
                        <div className="col-3">
                            <input
                                placeholder="Single-Sign-On" type="text" className="form-control systeme_felder" id="osUC_singleSignOn"
                                value={this.props.state.osUC_singleSignOn}
                                onChange={this.handleChange}
                            /> 
                        </div>
                    </div> : ""
                }

                {/* Zeile 4 */}
                <div className="row">
                    <div className="col-2">
                        <div className="custom-control custom-checkbox">
                            <input 
                                id="osUC_zertifikate" 
                                type="checkbox" 
                                className="custom-control-input" 
                                checked={this.props.state.osUC_zertifikate}
                                onChange={this.handleChange}
                            ></input>
                            <label className="custom-control-label" htmlFor="osUC_zertifikate">Zertifikate?</label>
                        </div>
                    </div>

                    {   
                        this.props.state.osUC_zertifikate ?
                        <div className="col-2">
                           <label>Auslaufdatum: </label>
                           <input
                               className="datepicker" 
                               type="date" 
                               id="osUC_auslaufdatum" 
                               value={this.props.state.osUC_auslaufdatum}
                               onChange={this.handleChange}
                           ></input>
                       </div> : ""
                    }

                    <div className="col-8">
                        <input
                            placeholder="Bemerkungen (zB.: vernetzt mit anderen TK-Systemen, VNR)..." type="text" className="form-control systeme_felder" id="osUC_bemerkung"
                            value={this.props.state.osUC_bemerkung}
                            onChange={this.handleChange}
                        /> 
                    </div>
                </div>
            </div>
        )

    }
}

export default OSUCApplications