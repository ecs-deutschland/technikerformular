import React from "react";
import "../Traegersystem.css"

class OSContactCenter extends React.Component {
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
                 <div className="row">
                        <div className="col-4 sonderanbindungen">
                        <label>Sonderanbindungen</label>
                        <div className="custom-control custom-checkbox">
                            <input 
                                id="osCC_sonderanbindungen_extension" 
                                type="checkbox" 
                                className="custom-control-input" 
                                checked={this.props.state.osCC_sonderanbindungen_extension}
                                onChange={this.handleChange}
                            ></input>
                            <label className="custom-control-label" htmlFor="osCC_sonderanbindungen_extension">Extension?</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input 
                                id="osCC_sonderanbindungen_coc" 
                                type="checkbox" 
                                className="custom-control-input" 
                                checked={this.props.state.osCC_sonderanbindungen_coc}
                                onChange={this.handleChange}
                            ></input>
                            <label className="custom-control-label" htmlFor="osCC_sonderanbindungen_coc">CoC?</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input 
                                id="osCC_sonderanbindungen_datenbankanbindung" 
                                type="checkbox" 
                                className="custom-control-input" 
                                checked={this.props.state.osCC_sonderanbindungen_datenbankanbindung}
                                onChange={this.handleChange}
                            ></input>
                            <label className="custom-control-label" htmlFor="osCC_sonderanbindungen_datenbankanbindung">Datenbankanbindung?</label>
                        </div>
                       
                    </div>
                    <div className="col-4">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text">Anbindung an TK-System</label>
                            </div>
                            <select
                                className="custom-select"
                                id="osCC_anbindungAnTk"
                                value={this.props.state.osCC_anbindungAnTk}
                                onChange={this.handleChange}
                            >
                                <option value="Extensions">CDSS</option>
                                <option value="CoC">CMS</option>
                                <option value="Datenbankanbindung">XMU</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-2">
                        <input
                            placeholder="Anzahl Kanäle" 
                            type="text" 
                            className="form-control systeme_felder"
                            id="osCC_anzahlKanaele"
                            value={this.props.state.osCC_anzahlKanaele}
                            onChange={this.handleChange}
                        /> 
                    </div>
                   
                </div>
                
                {/* Zeile 2 */}
                <div className="row">
                    <div className="col-2">
                        <div className="custom-control custom-checkbox">
                            <input 
                                id="osCC_zertifikate" 
                                type="checkbox" 
                                className="custom-control-input" 
                                checked={this.props.state.osCC_zertifikate}
                                onChange={this.handleChange}
                            ></input>
                            <label className="custom-control-label" htmlFor="osCC_zertifikate">Zertifikate?</label>
                        </div>
                    </div>

                    {   this.props.state.osCC_zertifikate ?
                        <div className="col-2">
                           <label>Auslaufdatum: </label>
                           <input
                               className="datepicker" 
                               type="date" 
                               id="osCC_auslaufdatum" 
                               value={this.props.state.osCC_auslaufdatum}
                               onChange={this.handleChange}
                           ></input>
                       </div> : ""
                    }
                     <div className="col-8">
                        <input
                            placeholder="Bemerkungen (zB.: vernetzt mit anderen TK-Systemen, VNR)..." type="text" className="form-control systeme_felder" id="os4000_bemerkung"
                            value={this.props.state.osCC_bemerkung}
                            onChange={this.handleChange}
                        /> 
                    </div>
                </div>
            </div>
        )

    }
}

export default OSContactCenter