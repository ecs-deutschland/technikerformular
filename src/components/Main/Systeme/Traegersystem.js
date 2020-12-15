import React from "react";
import "./Traegersystem.css"

class Traegersystem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.props.handleChange(event)
    }

    render() {
        if(this.props.state.traegersystem === "server"){
            return (
                    <div className="row">
                        <div className="col-xl-4">
                            <input
                                placeholder="Hersteller" type="text" className="form-control" id="hersteller"
                                value={this.props.state.hersteller}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="col-xl-4">
                            <input
                                placeholder="Server-Typ" type="text" className="form-control" id="serverTyp"
                                value={this.props.state.serverTyp}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="col-xl-4">
                            <input
                                placeholder="Seriennummer" type="text" className="form-control" id="seriennummer"
                                value={this.props.state.seriennummer}
                                onChange={this.handleChange}
                            /> 
                         </div>
                    
                    </div>)
        } else {
            return <div> </div>;
        }   
    }
}

export default Traegersystem