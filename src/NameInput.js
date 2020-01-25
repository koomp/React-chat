import React from 'react';

class NameInput extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            name: '',
            //text: ''
        }
        this.nameHandler = this.nameHandler.bind(this);
        this.textHandle  = this.textHandle.bind(this);
    }
    
    nameHandler(event) {
        this.setState({
            name : event.target.value
        })
    }

    textHandle(event){
        event.preventDefault();
        this.setState({
            text: event.target.value
        })
    }
    render(){
        return(
            <div>
                <input type="text" placeholder="Enter your name" onChange = {this.nameHandler} minLength = "10"></input>
                <input type="text" placeholder="Enter your message" onChange = {this.textHandle} maxLength = "100"></input>
                <h1>{this.state.name}</h1>
                <i>{this.state.text}</i>
            </div>
        );
    };
}

export default NameInput;