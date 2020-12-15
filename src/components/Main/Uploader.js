import React, {useState} from "react";
import axios from 'axios';
  
class Uploader extends React.Component {
    state = { 
        selectedFile: null
    }; 

    onFileChange = event => { 
        this.setState({ selectedFile: event.target.files[0] }); 
    }; 
       
    onFileUpload = () => { 
        if(this.state.selectedFile){
            const formData = new FormData(); 

            formData.append( 
                "myFile", 
                this.state.selectedFile, 
                this.state.selectedFile.name 
            ); 
            
            console.log(this.state.selectedFile); 
            
            //axios.post({this.props.requestAddress}, formData); 
            //axios.post("api/uploadfile", formData); 
        } 
    }; 
         
    render() { 
        return ( 
            <div className="input-group mb-3">
                <div className="input-group-prepend ">
                        {
                            this.state.selectedFile ? 
                            <button 
                                className="btn btn-light input-group-text" 
                                onClick={this.onFileUpload}>Upload
                            </button> 
                            : ""
                        }
                </div>
                <div className="custom-file ">
                    <input 
                        type="file" 
                        className="custom-file-input" 
                        id="inputGroupFile01" 
                        onChange={this.onFileChange} 
                        multiple></input>
                    <label className="custom-file-label">
                        {
                            this.state.selectedFile ? 
                                this.state.selectedFile.name : 
                                this.props.uploadText
                        }
                    </label>
                </div>
            </div>

        ); 
    } 
}

export default Uploader