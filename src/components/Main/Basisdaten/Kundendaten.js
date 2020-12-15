import React from "react";
import './Kundendaten.css'

class Kundendaten extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        this.props.handleChange(event)
    }

    render(){
        return (
            <div className="kundendaten">
                <input
                    placeholder="Firmen-Name" type="text" className="form-control" id="kundenname"
                    value={this.props.state.kundenname}
                    onChange={this.handleChange}
                />
                <input
                    placeholder="Strasse" type="text" className="form-control" id="kundenstrasse"
                    value={this.props.state.kundennstrasse}
                    onChange={this.handleChange}
                />
                <input
                    placeholder="Hausnummer" type="text" className="form-control" id="kundenhnr"
                    value={this.props.state.kundenhnr}
                    onChange={this.handleChange}
                />
                <input
                    placeholder="PLZ" type="text" className="form-control" id="kundenplz"
                    value={this.props.state.kundenplz}
                    onChange={this.handleChange}
                />
                <input
                    placeholder="Ort" type="text" className="form-control" id="kundenort"
                    value={this.props.state.kundenort}
                    onChange={this.handleChange}
                />
                <input
                    placeholder="Ansprechpartner" type="text" className="form-control" id="kundenansprechpartner"
                    value={this.props.state.kundenansprechpartner}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default Kundendaten