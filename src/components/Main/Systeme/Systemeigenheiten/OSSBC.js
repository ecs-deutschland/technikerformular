import React from "react";
import Uploader from "../../Uploader"
import "../Traegersystem.css"

class OSSBC extends React.Component {
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
                                id="osSBC_tnRegistrierung" 
                                type="checkbox" 
                                className="custom-control-input" 
                                checked={this.props.state.osSBC_tnRegistrierung}
                                onChange={this.handleChange}
                            ></input>
                            <label className="custom-control-label" htmlFor="osSBC_tnRegistrierung">Teilnehmerregistrierung?</label>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="custom-control custom-checkbox">
                            <input 
                                id="osSBC_SIPProvider" 
                                type="checkbox" 
                                className="custom-control-input" 
                                checked={this.props.state.osSBC_SIPProvider}
                                onChange={this.handleChange}
                            ></input>
                            <label className="custom-control-label" htmlFor="osSBC_SIPProvider">SIP Provider?</label>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="custom-control custom-checkbox">
                            <input 
                                id="osSBC_circuitConnector" 
                                type="checkbox" 
                                className="custom-control-input" 
                                checked={this.props.state.osSBC_circuitConnector}
                                onChange={this.handleChange}
                            ></input>
                            <label className="custom-control-label" htmlFor="osSBC_circuitConnector">Circuit Connector?</label>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="custom-control custom-checkbox">
                            <input 
                                id="osSBC_zertifikate" 
                                type="checkbox" 
                                className="custom-control-input" 
                                checked={this.props.state.osSBC_zertifikate}
                                onChange={this.handleChange}
                            ></input>
                            <label className="custom-control-label" htmlFor="osSBC_zertifikate">Zertifikate?</label>
                        </div>
                    </div>

                    {   
                        this.props.state.osSBC_zertifikate ?
                        <div className="col-2">
                           <label>Auslaufdatum: </label>
                           <input
                               className="datepicker" 
                               type="date" 
                               id="osSBC_auslaufdatum" 
                               value={this.props.state.osSBC_auslaufdatum}
                               onChange={this.handleChange}
                           ></input>
                       </div> : ""
                    }
                </div>

                {/* Zeile 2 */}
                <div className="row">
                    <input
                        placeholder="Bemerkungen (zB.: vernetzt mit anderen TK-Systemen, VNR)..." type="text" className="form-control systeme_felder" id="osSBC_bemerkung"
                        value={this.props.state.osSBC_bemerkung}
                        onChange={this.handleChange}
                    /> 
                </div>

            </div>
        )

    }
}

export default OSSBC