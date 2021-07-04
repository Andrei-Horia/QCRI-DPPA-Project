import React from 'react';
import ReactDOM from 'react-dom';



import './components.css'

let currentState = [false, false, false, false, false, false, false, false, false];

class CheckBox extends React.Component{
    constructor(props) {
      super();
      this.state = {isChecked: false};
      
      this.handleChecked = this.handleChecked.bind(this);
      this.id = props.id;
      this.name = props.name;

      this.call = props.callBack;
    }
  
    handleChecked () {
      this.setState({isChecked: !this.state.isChecked});
      currentState[parseInt(this.id)] = !this.state.isChecked;
      this.call(currentState);
    }
  
    render(){
      let txt = "";
      if(currentState[parseInt(this.id)])
        txt = "hey";
      else
        txt = "bye"

      return (<div>
         <input type="Checkbox" name="blue" value="yes" onChange={ this.handleChecked} />
         <p>{txt}</p>
      </div>)
    }
  }

  
export default CheckBox