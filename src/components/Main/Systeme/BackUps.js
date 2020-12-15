import React from "react";

class BackUps extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.props.handleChange(event)
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-2">
                        <div className="custom-control custom-checkbox">
                            <input 
                                id="backUp_automatisch" 
                                type="checkbox" 
                                className="custom-control-input" 
                                checked={this.props.state.backUp_automatisch}
                                onChange={this.handleChange}
                            ></input>
                            <label className="custom-control-label" htmlFor="backUp_automatisch">Automatisches BackUp?</label>
                        </div>
                    </div>     
                    <div className="col-10">
                        <input
                            placeholder="Speicherort (der backUps)" type="text" className="form-control systeme_felder" id="backUp_speicherort"
                            value={this.props.state.backUp_speicherort}
                            onChange={this.handleChange}
                        /> 
                    </div>                 
                </div>
            </div>
        )
    }
}

export default BackUps