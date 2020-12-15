import React from "react";
import Uploader from "../../Uploader"
import "../Traegersystem.css"

class OS4000VoiceBusiness extends React.Component {
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
                    <div className="col-4">
                        <input
                            placeholder="Anzahl abgesetzter Standorte" type="text" className="form-control systeme_felder" id="os4000_anzahlAbgesetzterStandorte"
                            value={this.props.state.os4000_anzahlAbgesetzterStandorte}
                            onChange={this.handleChange}
                        /> 
                    </div>
                    <div className="col-4">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text">Amtsanbindung</label>
                            </div>
                            <select
                                className="custom-select"
                                id="os4000_amtsanschluss"
                                value={this.props.state.os4000_amtsanschluss}
                                onChange={this.handleChange}
                            >
                                <option value="ISDN">ISDN</option>
                                <option value="S2M">S2M</option>
                                <option value="SIP">SIP</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-4">
                        {   this.props.state.os4000_amtsanschluss === "SIP" ?
                            <Uploader 
                                uploadText="Registrierungsdaten anhängen..."
                                requestAddress=""      
                            /> 
                            : ""
                        }                          
                    </div>
                </div>
                
                {/* Zeile 2 */}
                <div className="row">
                    <div className="col-4">
                        <input
                            placeholder="Provider" type="text" className="form-control systeme_felder" id="os4000_provider"
                            value={this.props.state.os4000_provider}
                            onChange={this.handleChange}
                        /> 
                    </div>
                    <div className="col-4">
                        <input
                            placeholder="Produkt" type="text" className="form-control systeme_felder" id="os4000_produkt"
                            value={this.props.state.os4000_produkt}
                            onChange={this.handleChange}
                        /> 
                    </div>
                    <div className="col-4">
                        <input
                            placeholder="Anzahl Kanäle (0..5..65)" type="text" className="form-control systeme_felder" id="os4000_anzahlKanaele"
                            value={this.props.state.os4000_anzahlKanaele}
                            onChange={this.handleChange}
                        /> 
                    </div>
                </div>

                {/* Zeile 3 */}
                <div className="row">
                    <div className="col-4">
                        <input
                            placeholder="Rufnummerblock (100-999)" type="text" className="form-control systeme_felder" id="os4000_rufnummernblock"
                            value={this.props.state.os4000_rufnummernblock}
                            onChange={this.handleChange}
                        /> 
                    </div>
                    <div className="col-4">
                        <input
                            placeholder="Endgeräte-Typen" type="text" className="form-control systeme_felder" id="os4000_endgeraeteTypen"
                            value={this.props.state.os4000_endgeraeteTypen}
                            onChange={this.handleChange}
                        /> 
                    </div>
                    <div className="col-4">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text">Cordless</label>
                            </div>
                            <select
                                className="custom-select"
                                id="os4000_cordless"
                                value={this.props.state.os4000_cordless}
                                onChange={this.handleChange}
                            >
                                <option value="DECT">DECT</option>
                                <option value="DECT_IP">DECT_IP</option>
                            </select>   
                        </div>
                    </div>
                </div>
                
                {/* Zeile 4 */}
                <div className="row">
                    <div className="col-4">
                        <div className="custom-control custom-checkbox">
                            <input 
                                id="os4000_verschluesselung" 
                                type="checkbox" 
                                className="custom-control-input" 
                                checked={this.props.state.os4000_verschluesselung}
                                onChange={this.handleChange}
                            ></input>
                            <label className="custom-control-label" htmlFor="os4000_verschluesselung">Verschlüsselung?</label>
                        </div>
                    </div>

                    <div className="col-8">
                        <input
                            placeholder="Bemerkungen (zB.: vernetzt mit anderen TK-Systemen, VNR)..." type="text" className="form-control systeme_felder" id="os4000_bemerkung"
                            value={this.props.state.os4000_bemerkung}
                            onChange={this.handleChange}
                        /> 
                    </div>
                </div>

            </div>
        )

    }
}

export default OS4000VoiceBusiness