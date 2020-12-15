import React from "react"
import { Dialog, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton} from 'office-ui-fabric-react/lib/Button';

class Hinweis extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hidden: true,
        }
    }

    close(){
        this.setState({hidden: true})
    }

    render(){
        return(
            <>
                <Dialog 
                    hidden={this.props.hidden} 
                    isBlocking={false}
                    dialogContentProps = {{
                        title: this.props.title,
                        subText: this.props.text,
                    }}
                />

                <PrimaryButton onClick={this.close} text={this.props.buttonText} />
                
            </>
            )   
    }
}

export default Hinweis