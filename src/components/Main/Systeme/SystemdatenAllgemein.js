import React from "react";
import Deployment from "./Deployment";
import Traegersystem from "./Traegersystem";

class  SystemdatenAllgemein extends React.Component {
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
                        <div className="col-12">

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text">System</label>
                                </div>
                                <select
                                    className="custom-select"
                                    id="system"
                                    value={this.props.state.system}
                                    onChange={this.handleChange}
                                >
                                    <option value="openScape4000">OpenScape 4000</option>
                                    <option value="openScapeBusiness">OpenScape Business</option>
                                    <option value="openScapeExpressions">OpenScape Xpressions</option>
                                    <option value="openScapeContactCenter">OpenScape Contact Center</option>
                                    <option value="openScapeVoice">OpenScape Voice</option>
                                    <option value="openScapeUcApplications">OpenScape UC Applications</option>
                                    <option value="openScapeSBC">OpenScape SBC</option>
                                    <option value="xPhone">XPhone</option>
                                    <option value="vmHost">VM-Host</option>
                                    <option value="OpenScape Concierge">OpenScape Concierge</option>
                                    <option value="OpenScape 4000 Manager">OpenScape 4000 Manager</option>
                                    <option value="OpenScape Accouting">OpenScape Accouting</option>
                                    <option value="OpenScape Usermanagement">OpenScape Usermanagement</option>
                                    <option value="OpenScape DLS">OpenScape DLS</option>
                                    <option value="OpenScape WebCollaboration">OpenScape WebCollaboration</option>
                                    <option value="Estos">Estos</option>
                                    <option value="Serinus">Serinus</option>
                                </select>
                            </div>

                            <Deployment handleChange={this.handleChange} state={this.props.state}/>
                            
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text">Trägersystem</label>
                                </div>
                                <select
                                    className="custom-select"
                                    id="traegersystem"
                                    value={this.props.state.traegersystem}
                                    onChange={this.handleChange}
                                >
                                    <option value="virtuell">virtuell</option>
                                    <option value="server">Server</option>
                                </select>
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text">Betriebssystem</label>
                                </div>
                                <select
                                    className="custom-select"
                                    id="betriebssystem"
                                    value={this.props.state.betriebssystem}
                                    onChange={this.handleChange}
                                >
                                    <option value="sles11">SLES 11</option>
                                    <option value="sles12">SLES 12</option>
                                    <option value="linux">Linux</option>
                                    <option value="windowsServer2008R2">Windows Server 2008 R2</option>
                                    <option value="windowsServer2012R2">Windows Server 2012 R2</option>
                                    <option value="windowsServer2016">Windows Server 2016</option>
                                    <option value="windowsServer2019">Windows Server 2019</option>
                                    <option value="windowsXP">Windows XP</option>
                                    <option value="windowsVista">Windows Vista</option>
                                    <option value="windows7">Windows 7</option>
                                    <option value="windows8">Windows 8</option>
                                    <option value="windows10">Windows 10</option>
                                </select>
                            </div>

                            <Traegersystem  handleChange={this.handleChange} state={this.props.state} />

                            <div className="row">
                                <div className="col-4">
                                    <input
                                        placeholder="Version" type="text" className="form-control systeme_felder" id="version"
                                        value={this.props.state.version}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="col-4">
                                    <input
                                        placeholder="IP-Adresse" type="text" className="form-control systeme_felder" id="ipAdresse"
                                        value={this.props.state.ipAdresse}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="col-4">
                                    { 
                                        this.props.state.system !== "vmHost" ?
                                        <input
                                            placeholder="SIEL-ID" type="text" className="form-control systeme_felder" id="sielId"
                                            value={this.props.state.sielId}
                                            onChange={this.handleChange}
                                        /> 
                                        : ""
                                    }
                                </div>
                            </div>                           

                        </div>
                    </div>

                </div>
        );
    }
}

export default SystemdatenAllgemein