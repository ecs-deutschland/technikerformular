import React from "react";

class Netzwerkparameter extends React.Component {
    render() {
        return (
            <div className="netzwerkparameter">
                
                <br />
                <h3>Netzwerk</h3>
                <hr></hr>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">

                                <h5>Netzwerkparameter</h5>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-12">
                                            <input
                                                placeholder="DNS" type="text" className="form-control systeme_felder" id="dns"
                                                value={this.props.state.dns}
                                                onChange={this.handleChange}
                                            />
                                             <input
                                                placeholder="NTP" type="text" className="form-control systeme_felder" id="ntp"
                                                value={this.props.state.ntp}
                                                onChange={this.handleChange}
                                            />
                                             <input
                                                placeholder="Default Gateway" type="text" className="form-control systeme_felder" id="default_gateway"
                                                value={this.props.state.default_gateway}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <br/>
  
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Netzwerkparameter