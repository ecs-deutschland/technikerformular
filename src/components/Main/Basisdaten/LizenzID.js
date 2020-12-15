import React from "react";

class LizenzID extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.props.handleChange(event)
    }

    render(){
        return (
            <div className="lid_root input-group mb-3 ">
                <div className="input-group-prepend">
                    <button
                        className="btn btn-outline-primary"
                        type="button"
                        onClick={this.props.onAdd}> +
                    </button>
                    <button
                        className="btn btn-outline-danger"
                        type="button"
                        onClick={this.props.onSubtract}> -
                    </button>
                </div>
                <input
                    type="text"
                    id="lizenzid"
                    className="form-control"
                    placeholder="Lizenz Id"
                    value={this.props.state.lizenzid[this.props.count]}
                    onChange={this.handleChange}/>
            </div>
        )
    }
}

export default LizenzID