import React from "react";
import './Kundendaten.css'
import Uploader from "../Uploader"

class Standortdetails extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.props.handleChange(event)
    }

    render() {
        return (
            <div className="persDaten">

               <input
                    className="form-control"
                    id="Standortdetails"
                    type="text"
                    placeholder="Standortdetails"
                    checked={this.props.state.standortdetails}
                    onChange={this.handleChange}
                />

                <input
                    className="form-control"
                    id="raumdetails"
                    type="text"
                    placeholder="Raumdetails"
                    checked={this.props.state.raumdetails}
                    onChange={this.handleChange}
                />

                <div className="custom-control custom-checkbox">
                    <input 
                        id="klimatisiert" 
                        type="checkbox" 
                        className="custom-control-input" 
                        checked={this.props.state.klimatisiert}
                        onChange={this.handleChange}
                    ></input>
                    <label className="custom-control-label" htmlFor="klimatisiert">Klimatisiert?</label>
                </div> 

                <Uploader 
                    uploadText="Lageskizze anhängen..."
                    requestAddress=""    
                /> 

            </div>
        )
    }
}

export default Standortdetails