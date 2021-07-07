
import './components.css'
import CheckBox from './checkBox'
import Button from './buttonComponent'

import React from 'react';
import ReactDOM from 'react-dom';

let currentState = [false, false, false, false, false, false, false, false, false];

class Themes extends React.Component{

    constructor(props){
        super();
        
        this.state = {
            currentThemes: props.currentThemes,
            currentLocations: props.currentLocations,
            currentState: currentState,
        }
        
        this.grabData = this.grabData.bind(this);
        this.grabButton = this.grabButton.bind(this);

        this.callBackButton = props.callBackButton.bind(this);
        this.callBack = props.callBack.bind(this);
        this.callBackClear = props.callBackClear.bind(this);

        this.clearAll = this.clearAll.bind(this);
    }
    
    grabData(evt){
        let copyStatus = this.state.currentState;
        copyStatus[parseInt(evt[1])] = evt[0];
        this.setState({currentState: copyStatus});
        this.callBack(copyStatus);
    }

    clearAll(){    
        let copyThemes = {}
        let copyLocations = {}
        let copyStates = [false,false,false,false,false,false,false,false,false]

        for(let theme in this.state.currentThemes)
            copyThemes[theme] = false;
        
        this.setState({currentThemes: copyThemes})

        for(let location in this.state.currentLocations)
            copyLocations[location] = false;
        

        this.setState({currentLocations: copyLocations})
        this.setState({currentState:copyStates})

        this.callBackClear([copyThemes,copyLocations,copyStates]);

    }

    grabButton(evt){
        if(evt[2] === "themes")
            {
                this.state.currentThemes[evt[0]] = evt[1];
                this.callBackButton([this.state.currentThemes,"themes"]);
            }
        else
            {
                this.state.currentLocations[evt[0]] = evt[1];
                this.callBackButton([this.state.currentLocations,"locations"]);
            }
    }

    generateThemes(themes){
        let result = []

        for(const [key,value] of Object.entries(themes)){
            result.push(<Button txt={key} color="#ffff80" status={value} callBack={this.grabButton} name="themes"/>)
        }
    
        result = result.map(element =>
            <span class="themes-button">{element}</span>);
            
        return result;
    }
    
    generateLocations(locations){
        let result = []

        for(const [key,value] of Object.entries(locations)){
            result.push(<Button txt={key} color="#99ffff" status={value} callBack={this.grabButton} name="locations"/>)
        }
    
        result = result.map(element =>
            <span class="themes-button">{element}</span>);
        
        return result;
    }

    render(){
        return(
            <div class='themes-section'>
                <div style={{marginBottom: "7%"}}>
                    <h1 class="themes-header" style={{marginLeft: "20%"}}>-THEMES-</h1>
                    <div style={{marginLeft: "-5%"}}>
                        {this.generateThemes(this.state.currentThemes)}
                    </div>
                </div>


                <div style={{marginBottom: "7%"}}>
                    <h1 class="themes-header" style={{marginLeft: "17%"}}>-LOCATION-</h1>
                    <div style={{marginLeft: "-5%"}}>
                        {this.generateLocations(this.state.currentLocations)}
                    </div>
                </div>

                <div class='themes-sense-of-direction'>
                    <h1 class='themes-header'> -SENSE OF DIRECTION- </h1>
                    <div class='wrap-text' style={{marginBottom: "10%", marginRight: "30%"}}>
                        
                        <div name="blue"> 
                            <CheckBox id="0" callBack={this.grabData} txt='Negative' margin='-45%' currentState={this.state.currentState[0]}/>
                        </div>
                        <div name="red"> 
                            <CheckBox id="1" callBack={this.grabData} txt='Neutral'  margin='-35%' currentState={this.state.currentState[1]}/>
                        </div>
                        <div name="green"> 
                            <CheckBox id="2" callBack={this.grabData} txt='Positive'  margin='-35%' currentState={this.state.currentState[2]}/>
                        </div>

                    </div>
                </div>

                <div class='themes-sense-of-direction'>
                    <h1 style={{marginLeft:"1%"}}class='themes-header'> -SENSE OF URGENCY- </h1>
                    <div class='wrap-text' style={{marginBottom: "10%", marginRight: "30%"}}>
                        
                        <div name="blue"> 
                            <CheckBox id="3" callBack={this.grabData} txt='Neutral'  margin='-35%' currentState={this.state.currentState[3]}/>
                        </div>
                        <div name="red"> 
                            <CheckBox id="4" callBack={this.grabData} txt='Medium'  margin='-40%' currentState={this.state.currentState[4]}/>
                        </div>
                        <div name="green"> 
                            <CheckBox id="5" callBack={this.grabData} txt='Strong'  margin='-30%' currentState={this.state.currentState[5]}/>
                        </div>

                    </div>
                </div>

                <div class='themes-sense-of-direction'>
                    <h1 class='themes-header' style={{marginLeft: "2%"}}> -GRADE OF ACTION- </h1>
                    <div class='wrap-text' style={{marginBottom: "10%", marginRight: "30%"}}>
                        
                        <div name="blue"> 
                            <CheckBox id="6" callBack={this.grabData} txt='Other' margin='-25%' currentState={this.state.currentState[6]}/>
                        </div>
                        <div name="red"> 
                            <CheckBox id="7" callBack={this.grabData} txt='Action Advised'  margin='-90%' currentState={this.state.currentState[7]}/>
                        </div>
                        <div name="green"> 
                            <CheckBox id="8" callBack={this.grabData} txt='Action Taken'  margin='-80%' currentState={this.state.currentState[8]}/>
                        </div>

                    </div>
                </div>

            <button class="themes-clear" onClick={this.clearAll}>Clear</button>
            </div>
        )
    }   
}


export default Themes;
