import './components.css'

import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component{
    constructor(props) {
      super();

      this.state = {
          currentState: props.status
      };

      this.handleChecked = this.handleChecked.bind(this);

      this.color = props.color;
      this.txt = props.txt;
      this.name = props.name;

      this.callBack = props.callBack;
    }
    
    handleChecked () {
        this.setState({currentState: !(this.state.currentState)});
        this.callBack([this.txt, !this.state.currentState, this.name]);
    }

  
    render(){

      let backColor = this.color;

      if(this.state.currentState === false)
            backColor = '#fafafa';

      return (
      <div>
          <button  class="themes-individual-button" style={{backgroundColor: backColor}}onClick={this.handleChecked}>{this.txt}</button> 
      </div>)
    }
  }

export default Button;