import React from "react";
import OS4000VoiceBusiness from "./Systemeigenheiten/OS4000VoiceBusiness"
import OSExpressions from "./Systemeigenheiten/OSExpressions"
import OSContactCenter from "./Systemeigenheiten/OSContactCenter"
import OSUCApplications from "./Systemeigenheiten/OSUCApplications"
import XPhone from "./Systemeigenheiten/XPhone"
import OSSBC from "./Systemeigenheiten/OSSBC"
import VMWare from "./Systemeigenheiten/VMWare"

class Systemeigenheiten extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.props.handleChange(event)
    }

    render() {
        switch(this.props.state.system){
            case "openScape4000": 
            case "openScapeVoice": 
            case "openScapeBusiness": return <OS4000VoiceBusiness handleChange={this.handleChange} state={this.props.state}/>;           
            case "openScapeExpressions": return <OSExpressions handleChange={this.handleChange} state={this.props.state}/>;       
            case "openScapeContactCenter": return <OSContactCenter handleChange={this.handleChange} state={this.props.state}/>;   
            case "openScapeUcApplications": return <OSUCApplications handleChange={this.handleChange} state={this.props.state}/>;
            case "xPhone" : return <XPhone handleChange={this.handleChange} state={this.props.state}/>;
            case "openScapeSBC": return <OSSBC handleChange={this.handleChange} state={this.props.state}/>; 
            case "vmHost": return <VMWare handleChange={this.handleChange} state={this.props.state}/>; 

            default: return <div></div>;
        }
    }
}

export default Systemeigenheiten