import React from "react";
import Systemeigenheiten from "./Systeme/Systemeigenheiten"
import BackUps from "./Systeme/BackUps";
import SystemdatenAllgemein from "./Systeme/SystemdatenAllgemein";

class Systeme extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.props.handleChange(event)
    }

    render() {
        if( this.props.state.system === "openScapeVoice" || this.props.state.system === "openScapeBusiness" ||
            this.props.state.system === "openScapeExpressions" || this.props.state.system === "openScapeContactCenter" ||
            this.props.state.system === "openScapeUcApplications" || this.props.state.system === "xPhone" ||
            this.props.state.system === "openScapeSBC" || this.props.state.system === "vmHost" ||
            this.props.state.system === "openScape4000"
        ){
            return (
                <div className="systeme">
                    
                    <br /> <h3>Systemdaten</h3> <hr></hr>
    
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <h5>Allgemeine Systemdaten</h5>
                                <SystemdatenAllgemein handleChange={this.handleChange} state={this.props.state}/>
                                <br/>
    
                                <h5>Systemspezifische Daten</h5>
                                <Systemeigenheiten handleChange={this.handleChange} state={this.props.state}/>
                                <br/>
    
                                <h5>Back-Ups</h5>
                                <BackUps handleChange={this.handleChange} state={this.props.state}/>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="systeme">
                    
                    <br /> <h3>Systemdaten</h3> <hr></hr>
    
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <h5>Allgemeine Systemdaten</h5>
                                <SystemdatenAllgemein handleChange={this.handleChange} state={this.props.state}/>
                                <br/>
    
                                <h5>Back-Ups</h5>
                                <BackUps handleChange={this.handleChange} state={this.props.state}/>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        
    }
}

export default Systeme