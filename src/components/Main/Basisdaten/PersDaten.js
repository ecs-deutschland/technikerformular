import React from "react";
import './Kundendaten.css'

class PersDaten extends React.Component {
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
                    id="personalnummer"
                    type="text"
                    placeholder="Personalnummer "
                    checked={this.props.state.personalnummer}
                    onChange={this.handleChange}
                />
                <input
                    className="form-control"
                    id="vorname"
                    type="text"
                    placeholder="Vorname "
                    checked={this.props.state.vorname}
                    onChange={this.handleChange}
                />
                <input
                    className="form-control"
                    id="nachname"
                    type="text"
                    placeholder="Nachname "
                    checked={this.props.state.nachname}
                    onChange={this.handleChange}
                />

            </div>
        )
    }
}

export default PersDaten