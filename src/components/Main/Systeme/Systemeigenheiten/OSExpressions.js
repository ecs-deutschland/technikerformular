import React from "react";
import "../Traegersystem.css"
import Hinweis from "../../../General/hinweis"

class OSExpressions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cti_hidden: false,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.props.handleChange(event)
    }

    render() {
        return (
            <div className="container-fluid">
                 <div className="row">
                    <div className="col-4">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text">Anbindungsart</label>
                            </div>
                            <select
                                className="custom-select"
                                id="osExpressions_artDerAnbidnung"
                                value={this.props.state.osExpressions_artDerAnbidnung}
                                onChange={this.handleChange}
                            >
                                <option value="S0">S0</option>
                                <option value="IP">IP</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-4">
                        <input
                            placeholder="Anzahl der Kanäle" type="text" className="form-control systeme_felder" id="osExpressions_anzahlKanaele"
                            value={this.props.state.osExpressions_anzahlKanaele}
                            onChange={this.handleChange}
                        /> 
                    </div>

                    <div className="col-2">
                        <div className="custom-control custom-checkbox">
                            <input 
                                id="osExpressions_satellitVorhanden" 
                                type="checkbox" 
                                className="custom-control-input" 
                                checked={this.props.state.osExpressions_satellitVorhanden}
                                onChange={this.handleChange}
                            ></input>
                            <label className="custom-control-label" htmlFor="osExpressions_satellitVorhanden">Sattelit vorhanden?</label>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="custom-control custom-checkbox">
                            <input 
                                id="osExpressions_applicationGenerator" 
                                type="checkbox" 
                                className="custom-control-input" 
                                checked={this.props.state.osExpressions_applicationGenerator}
                                onChange={this.handleChange}
                            ></input>
                            <label className="custom-control-label" htmlFor="osExpressions_applicationGenerator">Application-Generator?</label>
                        </div>
                    </div>
                </div>
                
                {/* Zeile 2 */}
                <div className="row">
                    <div className="col-1">
                        <div className="custom-control custom-checkbox">
                            <input 
                                id="osExpressions_cti" 
                                type="checkbox" 
                                className="custom-control-input" 
                                checked={this.props.state.osExpressions_cti}
                                onChange={this.handleChange}
                            ></input>
                            <label className="custom-control-label" htmlFor="osExpressions_cti">CTI?</label>
                        </div>
                    </div>                 

                    {
                        this.props.state.osExpressions_cti ?
                            
                            <div className="col-5">
                                <input
                                    placeholder="CTI-Beschreibung (zB.: Art des Clients...)" 
                                    type="text" 
                                    className="form-control systeme_felder"
                                    id="osExpressions_ctiBeschreibung"
                                    value={this.props.state.osExpressions_ctiBeschreibung}
                                    onChange={this.handleChange}
                                /> 
                            </div>
                        : ""
                    }      

                    <div className="col-2">
                        <div className="custom-control custom-checkbox">
                            <input 
                                id="osExpressions_audiokonferenz" 
                                type="checkbox" 
                                className="custom-control-input" 
                                checked={this.props.state.osExpressions_audiokonferenz}
                                onChange={this.handleChange}
                            ></input>
                            <label className="custom-control-label" htmlFor="osExpressions_audiokonferenz">Audiokonferenz?</label>
                        </div>
                    </div>

                    <div className="col-2">
                        <div className="custom-control custom-checkbox">
                            <input 
                                id="osExpressions_zertifikate" 
                                type="checkbox" 
                                className="custom-control-input" 
                                checked={this.props.state.osExpressions_zertifikate}
                                onChange={this.handleChange}
                            ></input>
                            <label className="custom-control-label" htmlFor="osExpressions_zertifikate">Zertifikate?</label>
                        </div>
                    </div>

                    {   this.props.state.osExpressions_zertifikate ?
                        <div className="col-2">
                           <label>Auslaufdatum: </label>
                           <input
                               className="datepicker" 
                               type="date" 
                               id="osExpressions_zertifikateAuslaufdatum" 
                               value={this.props.state.osExpressions_zertifikateAuslaufdatum}
                               onChange={this.handleChange}
                           ></input>
                       </div> : ""
                    }
                 
                </div>
      
            </div>
        )

    }
}

export default OSExpressions