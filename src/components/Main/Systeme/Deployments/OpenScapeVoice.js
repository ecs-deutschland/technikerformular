import React from "react";

class OpenScapeVoice extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.props.handleChange(event)
    }

    render() {
        return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text">Deployment</label>
                </div>
                <select
                    className="custom-select"
                    id="deployment"
                    value={this.props.state.deployment}
                    onChange={this.handleChange}
                >
                    <option value="integratedSimplex">Integrated Simplex</option>
                    <option value="standardDuplex">Standard Dulex</option>

                </select>
            </div>

        )
    }
}

export default OpenScapeVoice