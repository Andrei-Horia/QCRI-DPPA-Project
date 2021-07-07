import React from 'react';
import ReactDOM from 'react-dom';

import './components.css'

class CheckBox extends React.Component{
    constructor(props) {
      super();
      
      this.state = {
        currentState: false
      }

      this.id = props.id;
      this.name = props.name;

      this.txt = props.txt;
      this.call = props.callBack;

      this.marginLeft = props.margin;

      this.handleChecked = this.handleChecked.bind(this);
    }
  
    handleChecked () {
      this.setState({currentState:!this.props.currentState})
      this.call([!this.props.currentState, this.id]);
    }
    
    render(){



      return (
      <div>
         <input checked={this.props.currentState} class="checkbox-border" type="Checkbox" name="blue" value="yes" onChange={this.handleChecked} />
         <p style={{marginLeft:this.marginLeft, fontSize: '12px'}}>{this.txt}</p>
      </div>)
    }
  }

  
export default CheckBox