import React from "react";
import Basisdaten from "./Basisdaten/Basisdaten";
import Zugriffsdaten from "./Zugriffsdaten/Zugriffsdaten";
import PersDaten from "./Basisdaten/PersDaten";
import Standortdetails from "./Basisdaten/Standortdetails";

class Kopfdaten extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
     }

    handleChange(event) {
        this.props.handleChange(event)
    }

    render() {
        return (
            <div className="kopdaten">

                <h3>Kopfdaten</h3>
                <hr></hr>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4">
                            <h5>Persönliche Daten</h5>
                            <PersDaten state={this.props.state} handleChange={this.handleChange}/>
                        </div>
                        <div className="col-4">
                            <h5>Basisdaten</h5>
                            <Basisdaten state={this.props.state} handleChange={this.handleChange}/>
                        </div>
                        <div className="col-4">
                            <h5>Zugriffsdaten</h5>
                            <Zugriffsdaten state={this.props.state} handleChange={this.handleChange}/>
                            <br/>
                            <h5>Standortdetails</h5>
                            <Standortdetails state={this.props.state} handleChange={this.handleChange}/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Kopfdaten

