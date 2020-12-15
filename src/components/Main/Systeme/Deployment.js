import React from "react";
import OpenScape4000 from "./Deployments/OpenScape4000";
import OpenScapeVoice from "./Deployments/OpenScapeVoice";
import OpenScapeContactCenter from "./Deployments/OpenScapeContactCenter";
import OpenScapeUCApplications from "./Deployments/OpenScapeUCApplications";
import OpenScapeSBC from "./Deployments/OpenScapeSBC";

class Deployment extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.props.handleChange(event)
    }

    render() {
        switch(this.props.state.system){
            case "openScape4000": return (<OpenScape4000 handleChange={this.handleChange} state={this.props.state}/>);
            case "openScapeVoice": return (<OpenScapeVoice handleChange={this.handleChange} state={this.props.state}/>);
            case "openScapeContactCenter": return (<OpenScapeContactCenter handleChange={this.handleChange} state={this.props.state}/>);
            case "openScapeUcApplications": return (<OpenScapeUCApplications handleChange={this.handleChange} state={this.props.state}/>);
            case "openScapeSBC": return (<OpenScapeSBC handleChange={this.handleChange} state={this.props.state}/>);
            case "openScapeBusiness": return <div></div>;            

            default: return <div></div>;
        }
    }
}

export default Deployment