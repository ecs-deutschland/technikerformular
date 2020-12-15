import React from "react";
import Uploader from "../../Uploader"
import "../Traegersystem.css"

class VMWare extends React.Component {
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
                <div className="custom-control custom-checkbox">
                    <input 
                        id="vmWare_zugriff" 
                        type="checkbox" 
                        className="custom-control-input" 
                        checked={this.props.state.vmWare_zugriff}
                        onChange={this.handleChange}
                    ></input>
                    <label className="custom-control-label" htmlFor="vmWare_zugriff">VM-Zugriff vorhanden?</label>
                </div>

                {/* Zeile 2 */}
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text">Verantwortlicher</label>
                    </div>
                    <select
                        className="custom-select"
                        id="vmWare_verantwortlicher"
                        value={this.props.state.vmWare_verantwortlicher}
                        onChange={this.handleChange}
                    >
                        <option value="ECS">ECS</option>
                        <option value="Kunde">Kunde</option>
                    </select>   
                </div>

                {/* Zeile 3 */}
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text">Besitzer</label>
                    </div>
                    <select
                        className="custom-select"
                        id="vmWare_besitzer"
                        value={this.props.state.vmWare_besitzer}
                        onChange={this.handleChange}
                    >
                        <option value="ECS">ECS</option>
                        <option value="Kunde">Kunde</option>
                    </select>   
                </div>

            </div>
        )

    }
}

export default VMWare

