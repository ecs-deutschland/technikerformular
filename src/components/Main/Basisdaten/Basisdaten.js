import React from "react";
import Kundendaten from "./Kundendaten";
import './Kundendaten.css'

class Basisdaten extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
     }

    handleChange(event) {
        this.props.handleChange(event)
    }

    render() {
        return (
            <div className="basisdaten">

                <div className="custom-control custom-checkbox">
                    <input 
                        id="kundenkonto" 
                        type="checkbox" 
                        className="custom-control-input" 
                        checked={this.props.state.kundenkonto}
                        onChange={this.handleChange}
                    ></input>
                    <label className="custom-control-label" htmlFor="kundenkonto">Bereits Kunde?</label>
                </div>

                {
                    this.props.state.kundenkonto ? // Kunde vorhanden
                        <div>
                            <input
                                placeholder="ECS-Kundennummer"
                                type="text"
                                className="form-control "
                                id="ecsknr"
                                value={this.props.state.ecsknr}
                                onChange={this.handleChange}
                            />
                            <input
                                placeholder="ECS-Anlagennummer"
                                type="text"
                                className="form-control "
                                id="ecsanlnr"
                                value={this.props.state.ecsanlnr}
                                onChange={this.handleChange}
                            />
                            <input
                                placeholder="Kundenname"
                                type="text"
                                className="form-control "
                                id="kundenname"
                                value={this.props.state.kundenname}
                                onChange={this.handleChange}
                            />
                            <input
                                placeholder="PUB-ID"
                                type="text"
                                className="form-control "
                                id="pubid"
                                value={this.props.state.pubid}
                                onChange={this.handleChange}
                            />
                            <div className="custom-control custom-checkbox">
                                <input 
                                    id="lizenzenUmzug" 
                                    type="checkbox" 
                                    className="custom-control-input" 
                                    checked={this.props.state.lizenzenUmzug}
                                    onChange={this.handleChange}
                                ></input>
                                <label className="custom-control-label" htmlFor="lizenzenUmzug">Lizenzen umgeschlüsselt?</label>
                            </div>                           

                        </div>
                        : // Kunde nicht vorhanden
                        <Kundendaten handleChange={this.handleChange} state={this.props.state}/>
                }

            </div>
        )
    }
}

export default Basisdaten