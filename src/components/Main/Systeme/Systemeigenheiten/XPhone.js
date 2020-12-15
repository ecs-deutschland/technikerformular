import React from "react";
import Uploader from "../../Uploader"
import "../Traegersystem.css"

class XPhone extends React.Component {
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
                    <div className="col-1">
                        <div className="custom-control custom-checkbox">
                            <input 
                                id="XPhone_voicemail" 
                                type="checkbox" 
                                className="custom-control-input" 
                                checked={this.props.state.XPhone_voicemail}
                                onChange={this.handleChange}
                            ></input>
                            <label className="custom-control-label" htmlFor="XPhone_voicemail">Voicemail?</label>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="custom-control custom-checkbox">
                            <input 
                                id="XPhone_fax" 
                                type="checkbox" 
                                className="custom-control-input" 
                                checked={this.props.state.XPhone_fax}
                                onChange={this.handleChange}
                            ></input>
                            <label className="custom-control-label" htmlFor="XPhone_fax">Fax?</label>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="custom-control custom-checkbox">
                            <input 
                                id="XPhone_cti" 
                                type="checkbox" 
                                className="custom-control-input" 
                                checked={this.props.state.XPhone_cti}
                                onChange={this.handleChange}
                            ></input>
                            <label className="custom-control-label" htmlFor="XPhone_cti">CTI?</label>
                        </div>
                    </div>
                    <div className="col-1">
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
                    <div className="col-2">
                        <div className="custom-control custom-checkbox">
                            <input 
                                id="XPhone_audiokonferenz" 
                                type="checkbox" 
                                className="custom-control-input" 
                                checked={this.props.state.XPhone_audiokonferenz}
                                onChange={this.handleChange}
                            ></input>
                            <label className="custom-control-label" htmlFor="XPhone_audiokonferenz">Audiokonferenz?</label>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="custom-control custom-checkbox">
                            <input 
                                id="XPhone_webCollaboration" 
                                type="checkbox" 
                                className="custom-control-input" 
                                checked={this.props.state.XPhone_webCollaboration}
                                onChange={this.handleChange}
                            ></input>
                            <label className="custom-control-label" htmlFor="XPhone_webCollaboration">Web-Collaboration?</label>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <div className="col-6">
                                <div className="custom-control custom-checkbox">
                                    <input 
                                        id="XPhone_iis" 
                                        type="checkbox" 
                                        className="custom-control-input" 
                                        checked={this.props.state.XPhone_iis}
                                        onChange={this.handleChange}
                                    ></input>
                                    <label className="custom-control-label" htmlFor="XPhone_iis">seperater IIS vorhanden?</label>
                                </div>
                            </div>
                            {
                                this.props.state.XPhone_iis ?
                                <div className="col-6">
                                    <div className="custom-control custom-checkbox">
                                        <input 
                                            id="XPhone_dmz" 
                                            type="checkbox" 
                                            className="custom-control-input" 
                                            checked={this.props.state.XPhone_dmz}
                                            onChange={this.handleChange}
                                        ></input>
                                        <label className="custom-control-label" htmlFor="XPhone_dmz">In der DMZ?</label>
                                    </div>
                                </div> : ""

                            }

                        </div>

                        {
                            this.props.state.XPhone_dmz && this.props.state.XPhone_iis?
                            <div className="row">
                                    <input
                                        placeholder="IP-Adresse" type="text" className="form-control systeme_felder" id="XPhone_ipAdresse"
                                        value={this.props.state.XPhone_ipAdresse}
                                        onChange={this.handleChange}
                                    /> 
                            </div> : ""
                        }


                    </div>
                </div>

                {/* Zeile 2 */}
                <div className="row">
                    <div className="col-2">
                        <div className="custom-control custom-checkbox">
                            <input 
                                id="XPhone_clientAnmeldung" 
                                type="checkbox" 
                                className="custom-control-input" 
                                checked={this.props.state.XPhone_clientAnmeldung}
                                onChange={this.handleChange}
                            ></input>
                            <label className="custom-control-label" htmlFor="XPhone_clientAnmeldung">Client-Anmeldung?</label> 
                        </div>
                    </div>
                    <div className="col-10"></div>
                </div>

                {/* Zeile 3 */}
                {
                    this.props.state.XPhone_clientAnmeldung ?
                    <div className="row">
                        <div className="col-3">
                            <input
                                placeholder="Login" type="text" className="form-control systeme_felder" id="XPhone_username"
                                value={this.props.state.XPhone_username}
                                onChange={this.handleChange}
                            /> 
                        </div>
                        <div className="col-3">
                            <input
                                placeholder="Passwort" type="text" className="form-control systeme_felder" id="XPhone_passwort"
                                value={this.props.state.XPhone_passwort}
                                onChange={this.handleChange}
                            /> 
                        </div>
                        <div className="col-3">
                            <input
                                placeholder="Windows-Authentifizierung" type="text" className="form-control systeme_felder" id="XPhone_windowsAuth"
                                value={this.props.state.XPhone_windowsAuth}
                                onChange={this.handleChange}
                            /> 
                        </div>
                        <div className="col-3">
                            <input
                                placeholder="Single-Sign-On" type="text" className="form-control systeme_felder" id="XPhone_singleSignOn"
                                value={this.props.state.XPhone_singleSignOn}
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
                                id="XPhone_zertifikate" 
                                type="checkbox" 
                                className="custom-control-input" 
                                checked={this.props.state.XPhone_zertifikate}
                                onChange={this.handleChange}
                            ></input>
                            <label className="custom-control-label" htmlFor="XPhone_zertifikate">Zertifikate?</label>
                        </div>
                    </div>

                    {   
                        this.props.state.XPhone_zertifikate ?
                        <div className="col-2">
                           <label>Auslaufdatum: </label>
                           <input
                               className="datepicker" 
                               type="date" 
                               id="XPhone_auslaufdatum" 
                               value={this.props.state.XPhone_auslaufdatum}
                               onChange={this.handleChange}
                           ></input>
                       </div> : ""
                    }

                    <div className="col-2">
                        <div className="custom-control custom-checkbox">
                            <input 
                                id="XPhone_virtualDirectory" 
                                type="checkbox" 
                                className="custom-control-input" 
                                checked={this.props.state.XPhone_virtualDirectory}
                                onChange={this.handleChange}
                            ></input>
                            <label className="custom-control-label" htmlFor="XPhone_virtualDirectory">Virtual Directory?</label>
                        </div>
                    </div>

                    <div className="col-6">
                        <input
                            placeholder="Bemerkungen (zB.: vernetzt mit anderen TK-Systemen, VNR)..." type="text" className="form-control systeme_felder" id="XPhone_bemerkung"
                            value={this.props.state.XPhone_bemerkung}
                            onChange={this.handleChange}
                        /> 
                    </div>

                </div>
            </div>
        )

    }
}

export default XPhone